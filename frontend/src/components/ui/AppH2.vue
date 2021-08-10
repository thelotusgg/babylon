<template>
  <AppHeadline class="mb-3">
    <h2 class="text-xl text-gray-600">
      <slot/>
    </h2>
    <template v-slot:description>
      <slot name="description"/>
    </template>
  </AppHeadline>
</template>

<script lang="ts">
import Vue from 'vue';
import AppHeadline from '@/components/ui/AppHeadline.vue';

export default Vue.extend({
  name: 'AppH2',
  components: {
    AppHeadline,
  },
});
</script>
