<template>
  <div
    class="group bg-gray-50 dark:bg-gray-800 shadow-sm p-4 relative
    transition-shadow duration-500"
    :class="{'hover:shadow-md': to, 'border-l-4': borderColor, [computedBorderColor]: true}">
    <slot/>
    <router-link
      v-if="to"
      :to="to"
      class="top-0 bottom-0 left-0 right-0 absolute z-10 cursor-pointer"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppCard',
  props: {
    borderColor: {
      type: String,
      validator: (value: string): boolean => (/^(gray|red|yellow|green|blue|indigo|purple|pink)-(([1-9]00)|50)$/g).test(value),
    },
    to: {
      type: Object,
    },
  },
  computed: {
    computedBorderColor(): string {
      return `border-${this.borderColor}`;
    },
  },
});
</script>
