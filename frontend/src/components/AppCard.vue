<template>
  <div
    class="group flex bg-gray-50 shadow-sm p-4 border-l-4 relative gap-4 transition-shadow
    duration-500 hover:shadow-md"
    :class="'border-' + color">
    <div class="flex-grow">
      <h1 v-if="title" class="text-gray-700 text-2xl">{{ title }}</h1>
      <p v-if="description" class="text-gray-600">
        {{ description }}
      </p>
    </div>
    <div class="flex items-center">
      <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-3xl text-gray-300
        transition-transform duration-500 transform group-hover:translate-x-2
        group-hover:text-gray-700"/>
    </div>
    <router-link
      v-if="to"
      :to="to"
      class="top-0 bottom-0 left-0 right-0 absolute z-10 cursor-pointer"/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppCard',
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    color: {
      type: String,
      default: 'gray-400',
      validator: (value: string): boolean => (/^(gray|red|yellow|green|blue|indigo|purple|pink)-(([1-9]00)|50)$/g).test(value),
    },
    to: {
      type: Object,
    },
  },
};
</script>
