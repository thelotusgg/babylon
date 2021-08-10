<template>
  <div>
    <UiCardList>
      <AppCard v-for="language in languages" :key="language.code" class="cursor-pointer">
        <router-link :to="{
            name: 'project.language',
            params: {
              'id': $route.params.id,
              'languageCode': language.code
            }
          }">
          <div class="flex gap-2 h-full">
            <div class="flex items-center">
            <country-flag
              :country='language.countryCode'
              size='big'/>
            </div>
            <div class="flex-grow">
              <p v-if="language.code" class="text-lg text-gray-700">
                {{ $t('language.' + language.code) }}
              </p>
              <p class="text-gray-400 text-sm">
                {{ $t('language.xPercentTranslated', { percent: '??,??' })}}
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
    languages: {
      type: Array,
      required: true,
    },
  },
});
</script>
