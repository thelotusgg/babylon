<template>
  <div>
    <h1 class="text-3xl text-gray-600 dark:text-gray-300 mb-4">{{ $t("app.page.dashboard")}}</h1>
    <div class="flex flex-col gap-8">
      <AppCardList
        v-for="projectCategory in projectCategories"
        :key="projectCategory._id"
        :title="projectCategory.title">
        <AppTextCard
          v-for="project in projectCategory.projects"
          :key="project"
          :title="project.title"
          :description="project.description"
          :borderColor="project.borderColor"
          :to="project.to"/>
      </AppCardList>
    </div>
  </div>
</template>

<script lang="ts">
import AppCardList from '@/components/AppCardList.vue';
import AppTextCard from '@/components/AppTextCard.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    AppCardList,
    AppTextCard,
  },
  data(): {
    projectCategories: ({
      title?: string;
      projects: ({
        _id: string;
        title?: string;
        description?: string;
        borderColor?: string;
        to?: {
          name: string;
          params: {
            id: string;
          }
        }
      })[];
    })[];
    } {
    return {
      projectCategories: [{
        title: 'Website',
        projects: [
          {
            _id: 'fsdfsdfsdfsdfsdf',
            title: 'Babylon',
            description: 'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            borderColor: 'blue-500',
            to: {
              name: 'project',
              params: {
                id: 'fsdfsdfsdfsdfsdf',
              },
            },
          },
          {
            _id: 'fesffasfacfae',
            title: 'Forum',
            description: 'At vero eos et accusam et justo duo dolores et ea rebum.',
            borderColor: 'green-500',
            to: {
              name: 'project',
              params: {
                id: 'fesffasfacfae',
              },
            },
          },
        ],
      }, {
        title: 'Minecraft',
        projects: [
          {
            _id: 'asdfasfasffaf',
            title: 'Lobby',
            description: 'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            borderColor: 'blue-500',
            to: {
              name: 'project',
              params: {
                id: 'asdfasfasffaf',
              },
            },
          },
          {
            _id: 'jklafjhkalsjhfkaljsf',
            title: 'BedWars',
            description: 'At vero eos et accusam et justo duo dolores et ea rebum.',
            borderColor: 'green-500',
            to: {
              name: 'project',
              params: {
                id: 'jklafjhkalsjhfkaljsf',
              },
            },
          },
          {
            _id: 'kladkgdskg',
            title: 'Jump Down',
            description: 'Diam nonumy eirmod tempor invidunt ut labore et dolo.',
            borderColor: 'gray-500',
            to: {
              name: 'project',
              params: {
                id: 'kladkgdskg',
              },
            },
          },
          {
            _id: 'jfjgjgfjgfjfgj',
            title: 'Survival Games',
            description: 'At vero eos et.',
            borderColor: 'green-500',
            to: {
              name: 'project',
              params: {
                id: 'jfjgjgfjgfjfgj',
              },
            },
          },
        ],
      }, {
        title: 'Discord',
        projects: [
          {
            _id: 'gfdhdghdhfdhdfh',
            title: 'Discord-Bot',
            description: 'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            borderColor: 'blue-500',
            to: {
              name: 'project',
              params: {
                id: 'gfdhdghdhfdhdfh',
              },
            },
          },
        ],
      }],
    };
  },
});
</script>
