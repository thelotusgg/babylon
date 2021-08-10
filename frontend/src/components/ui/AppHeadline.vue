<template>
  <div>
    <slot/>
    <div class="text-sm text-gray-500">
      <slot name="description"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppHeadline',
});
</script>
