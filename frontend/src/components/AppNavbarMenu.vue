<template>
  <ul class="min-w-2/5 w-auto flex flex-col bg-gray-700 h-screen transform duration-300
    absolute lg:bg-transparent lg:static lg:flex-row lg:w-auto lg:h-auto">
    <slot/>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNavbarMenu',
});
</script>
