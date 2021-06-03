<template>
  <div class="min-h-screen flex flex-col">
    <div class="px-4 md:px-6 lg:px-8 pt-20 pb-12 flex-grow">
      <LayoutContainer>
        <router-view/>
      </LayoutContainer>
    </div>
  </div>
</template>

<script lang="ts">
import LayoutContainer from '@/components/layout/LayoutContainer.vue';

export default {
  components: {
    LayoutContainer,
  },
};
</script>
