<template>
  <nav class="bg-gray-900 w-full flex items-center lg:px-4"
  :class="menuButtonPosition == 'right' ? 'flex-row-reverse' : ''">

    <router-link class="flex-grow lg:flex-grow-0 text-4xl text-gray-50 uppercase
    p-2 text-center lg:text-left" :to="{name: 'dashboard'}">{{ $t(appName) }}</router-link>

    <div class="p-2 group hover:cursor-pointer absolute lg:invisible">
      <font-awesome-icon :icon="['fas', 'bars']" class="text-4xl text-gray-200
      group-hover:text-green-500"/>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Navbar',
  props: {
    appName: {
      type: String,
      default: 'app.name',
    },
    menuButtonPosition: {
      type: String,
      validator: (value: 'left'|'right'): boolean => ['left', 'right'].indexOf(value) !== -1,
      default: 'left',
    },
  },
};
</script>
