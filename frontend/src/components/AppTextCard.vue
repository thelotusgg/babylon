<template>
  <AppCard :to="to" :borderColor="borderColor" class="flex gap-4">
    <div class="flex-grow">
      <h1 v-if="title" class="text-gray-700 dark:text-gray-200 text-2xl">{{ title }}</h1>
      <p v-if="description" class="text-gray-600 dark:text-gray-200 ">
        {{ description }}
      </p>
    </div>
    <div v-if="to" class="flex items-center">
      <font-awesome-icon
        :icon="['fas', 'chevron-right']"
        class="text-3xl text-gray-300 transition-transform duration-500 transform
        group-hover:translate-x-2 group-hover:text-gray-700 dark:group-hover:text-gray-50"/>
    </div>
  </AppCard>
</template>

<script lang="ts">
import AppCard from '@/components/AppCard.vue';

export default {
  name: 'AppTextCard',
  components: {
    AppCard,
  },
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    borderColor: {
      type: String,
    },
    to: {
      type: Object,
    },
  },
};
</script>
