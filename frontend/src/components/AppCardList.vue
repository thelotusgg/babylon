<template>
  <div>
    <h1 v-if="title" class="text-2xl text-gray-500 dark:text-gray-300 mb-2">{{ title }}</h1>
    <div class="grid gap-4" :class="gridClasses">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'AppCardList',
  props: {
    title: {
      type: String,
    },
    gridClasses: {
      type: String,
      default: 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    },
  },
};
</script>
