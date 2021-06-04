<template>
  <div class="min-h-screen flex flex-col">
    <AppNavbar/>
    <div class="px-4 md:px-6 lg:px-8 pt-20 pb-12 flex-grow">
      <LayoutContainer>
        <transition
          enter-active-class="transition-all duration-300 ease"
          leave-active-class="transition-all duration-300 ease"
          enter-class="opacity-0 scale-70"
          leave-to-class="opacity-0 scale-70"
          mode="out-in"
        >
          <router-view/>
        </transition>
      </LayoutContainer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppNavbar from '@/components/layout/AppNavbar.vue';
import LayoutContainer from '@/components/layout/LayoutContainer.vue';

export default Vue.extend({
  components: {
    AppNavbar,
    LayoutContainer,
  },
});
</script>
