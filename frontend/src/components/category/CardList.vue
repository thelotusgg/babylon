<template>
  <div>
    <UiCardList>
      <AppCard v-for="category in categories" :key="category._id" class="cursor-pointer">
        <router-link :to="{
            name: 'category',
            params: {
              'id': category._id
            }
          }">
          <div class="flex gap-2 h-full">
            <div class="flex-grow">
              <p v-if="category.title" class="text-lg text-gray-700">
                {{ category.title.value }}
              </p>
              <p v-if="category.description" class="text-md text-gray-600 ">
                {{ category.description.value }}
              </p>
            </div>
            <div class="flex items-center">
              <font-awesome-icon
                :icon="['fas', 'chevron-right']"
                class="text-3xl text-gray-300 transition-transform duration-500 transform
                group-hover:translate-x-2 group-hover:text-gray-700 dark:group-hover:text-gray-50"/>
            </div>
          </div>
        </router-link>
      </AppCard>
    </UiCardList>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppCard from '@/components/ui/AppCard.vue';
import UiCardList from '@/components/ui/CardList.vue';

export default Vue.extend({
  name: 'CardList',
  components: {
    AppCard,
    UiCardList,
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
});
</script>
