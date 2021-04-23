<template>
  <li
    class="text-lg hover:bg-gray-900 dark:hover:bg-black"
    :class="{'lg:text-base lg:dark:bg-black lg:hover:bg-gray-100 lg:dark:hover:bg-black':
    (type == 'dropdown')}">
    <router-link
      :to="to"
      class="flex gap-2 px-4 py-3 items-center transition-colors group lg:h-full"
      :class="{'lg:px-2 py-1 lg:type-dropdown': (type == 'dropdown')}">
      <font-awesome-icon
        :icon="icon"
        v-if="icon"
        class="text-2xl transition-colors group-hover:text-green-500"
        :class="{'lg:text-base': (type == 'dropdown')}"
      />
      <span v-if="title">{{ $t(title) }}</span>
    </router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNavbarMenuItem',
  props: {
    icon: {
      type: Array,
    },
    title: {
      type: String,
    },
    to: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      default: 'default',
    },
  },
});
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  @apply bg-gray-900 dark:bg-black;
  > svg {
    @apply text-green-500;
  }
  &.lg\:type-dropdown {
    @screen lg {
      @apply bg-gray-100 dark:bg-black;
      > svg {
        @apply text-green-500;
      }
    }
  }
}
</style>
