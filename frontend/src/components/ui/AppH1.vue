<template>
  <AppHeadline class="mb-2">
    <h1 class="text-2xl text-gray-700">
      <slot/>
    </h1>
    <template v-slot:description>
      <slot name="description"/>
    </template>
  </AppHeadline>
</template>

<script lang="ts">
import Vue from 'vue';
import AppHeadline from '@/components/ui/AppHeadline.vue';

export default Vue.extend({
  name: 'AppH1',
  components: {
    AppHeadline,
  },
});
</script>
