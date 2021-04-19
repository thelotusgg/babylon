<template>
  <div>
    <h1 v-if="title" class="text-2xl text-gray-500 mb-2">{{ title }}</h1>
    <div v-if="cards" class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <AppCard
        v-for="card in cards"
        :key="card"
        :title="card.title"
        :description="card.description"
        :color="card.color"
        :to="card.to"
        class="flex-1"/>
    </div>
  </div>
</template>

<script lang="ts">
import AppCard from '@/components/AppCard.vue';

export default {
  name: 'AppCardList',
  components: {
    AppCard,
  },
  props: {
    cards: {
      type: Array,
    },
    title: {
      type: String,
    },
  },
};
</script>
