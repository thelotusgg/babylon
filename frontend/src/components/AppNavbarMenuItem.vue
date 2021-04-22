<template>
  <router-link tag="li" :to="to">
    <font-awesome-icon :icon="icon" v-if="icon"/>
    <span v-if="title">{{ $t(title) }}</span>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNavbarMenuItem',
  props: {
    icon: {
      type: Array,
    },
    title: {
      type: String,
    },
    to: {
      type: Object,
      required: true,
    },
  },
});
</script>
