<template>
  <div>
    <AppNavbar/>
    <router-view class="px-2 pt-8 pb-6 2xl:w-layoutContainer 2xl:mx-auto"/>
  </div>
</template>

<script lang="ts">
import AppNavbar from '@/components/AppNavbar.vue';

export default {
  components: {
    AppNavbar,
  },
};
</script>
