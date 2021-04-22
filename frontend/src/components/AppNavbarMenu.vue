<template>
  <ul>
    <slot/>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNavbarMenu',
});
</script>
