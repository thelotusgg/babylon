<template>
  <ul class="flex flex-col bg-gray-700 w-full h-screen transform duration-300
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
