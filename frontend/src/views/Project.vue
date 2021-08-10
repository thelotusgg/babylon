<template>
  <div>
    <h1
      class="text-3xl text-gray-600 dark:text-gray-300 mb-4"
    >{{ $t("app.page.project", { name: "Anti-Cheat"})}}</h1>
    <AppCardList
      v-if="projectLanguages.length"
      :title="$t('project.languages')"
      gridClasses="md:grid-cols-10 lg:grid-cols-6 xl:grid-cols-6">
      <AppCard
        v-for="projectLanguage in projectLanguages"
        :key="projectLanguage.code"
        class="flex flex-col items-center"
        :to="{
          name: 'project.phrases',
          params: {
            id: 'jklafjhkalsjhfkaljsf',
            languageCode: projectLanguage.code
          }
        }">
        <AppCountryFlag
           class="h-16 mb-2"
          :countryCode="(projectLanguage.code.includes('-') ?
          projectLanguage.code.split('-')[1].toLowerCase() :
          projectLanguage.code.toLowerCase())"/>
        <h1>{{ $t('language.' + projectLanguage.code + '.noun') }}</h1>
        <p class="text-gray-500">{{ $t('project.translatedInPercentage', {
          percentage: projectLanguage.translatedInPercentage
          }) }}</p>
      </AppCard>
    </AppCardList>
  </div>
</template>

<script lang="ts">
import AppCardList from '@/components/AppCardList.vue';
import AppCard from '@/components/AppCard.vue';
import AppCountryFlag from '@/components/AppCountryFlag.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Project',
  components: {
    AppCardList,
    AppCard,
    AppCountryFlag,
  },
  data(): {
    projectLanguages: {
      code: string;
      translatedInPercentage: number;
    }[];
    } {
    return {
      projectLanguages: [
        {
          code: 'de-DE',
          translatedInPercentage: 100.00,
        },
        {
          code: 'en-GB',
          translatedInPercentage: 99.99,
        },
        {
          code: 'en-US',
          translatedInPercentage: 95.54,
        },
        {
          code: 'de-AT',
          translatedInPercentage: 99.54,
        },
        {
          code: 'de-CH',
          translatedInPercentage: 80.43,
        },
        {
          code: 'fr-FR',
          translatedInPercentage: 12.34,
        },
      ],
    };
  },
});
</script>
