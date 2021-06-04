<template>
  <div>
    <AppSpinner :show="spinner"/>
    <transition
      :enter-active-class="'transition-all duration-300 ease-out-quad' + (
        spinnerDelay ? ' delay-200' : '')"
      :leave-active-class="'transition-all duration-300 ease-in-quad' + (
        spinnerDelay ? ' delay-200' : '')"
      enter-class="opacity-0 scale-70"
      enter-to-class="opacity-100 scale-100"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-70"
      mode="out-in"
    >
      <div v-if="show">
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppSpinner from '@/components/ui/AppSpinner.vue';

export default Vue.extend({
  name: 'LoadableContent',
  components: {
    AppSpinner,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    spinner: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      spinnerDelay: false,
    };
  },
  created() {
    if (this.spinner) this.spinnerDelay = true;
  },
});
</script>

<style>

</style>
