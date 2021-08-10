<template>
  <div class="flex items-center text-sm px-4 py-3"
    :class="{
      'bg-red-500 text-gray-50': type == 'error',
      'bg-blue-500 text-gray-50': type == 'info',
      'bg-green-500 text-gray-50': type == 'success',
      'bg-yellow-500 text-gray-50': type == 'warning',
    }">
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppAlert',
  props: {
    type: {
      type: String,
      default: 'info',
      validator(value: string): boolean {
        return ['error', 'info', 'success', 'warning'].indexOf(value) !== -1;
      },
    },
  },
});
</script>
