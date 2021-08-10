<template>
  <transition
    enter-active-class="transition-all duration-300 ease-out-quad"
    leave-active-class="transition-all duration-300 ease-in-quad"
    enter-class="opacity-0 scale-70"
    enter-to-class="opacity-100 scale-100"
    leave-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-70"
  >
    <div v-if="show" class="flex items-center justify-center fixed w-full">
      <half-circle-spinner
        :animation-duration="1000"
        :size="60"
        color="#10B981"
      />
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { HalfCircleSpinner } from 'epic-spinners';

export default Vue.extend({
  name: 'AppSpinner',
  components: {
    HalfCircleSpinner,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style>

</style>
