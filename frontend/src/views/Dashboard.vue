<template>
  <div>
    <h1 class="text-3xl text-gray-600 mb-4">{{ $t("app.page.dashboard")}}</h1>
    <div class="flex flex-col gap-8">
      <AppCardList
        v-for="projectCategory in projectCategories"
        :key="projectCategory._id"
        :cards="projectCategory.projcts"
        :title="projectCategory.title"/>
      </div>
  </div>
</template>

<script lang="ts">
import AppCardList from '@/components/AppCardList.vue';

export default {
  name: 'Dashboard',
  components: {
    AppCardList,
  },
  data(): {
    projectCategories: ({
      title?: string;
      projcts: ({
        _id: string,
        title?: string;
        description?: string;
        color?: string,
        to?: {
          name: string;
          params: {
            id: string,
          }
        }
      })[];
    })[];
    } {
    return {
      projectCategories: [{
        title: 'Website',
        projcts: [
          {
            _id: 'fsdfsdfsdfsdfsdf',
            title: 'Babylon',
            description: 'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            color: 'blue-500',
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
            color: 'green-500',
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
        projcts: [
          {
            _id: 'asdfasfasffaf',
            title: 'Lobby',
            description: 'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            color: 'blue-500',
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
            color: 'green-500',
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
            color: 'green-500',
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
        projcts: [
          {
            _id: 'gfdhdghdhfdhdfh',
            title: 'Discord-Bot',
            description: 'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            color: 'blue-500',
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
};
</script>
