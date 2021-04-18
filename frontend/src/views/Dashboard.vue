<template>
  <div>
    <h1 class="text-3xl text-gray-600 mb-4">{{ $t("app.page.dashboard")}}</h1>
    <AppCardList :cards="cards"/>
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
    cards: ({
      title?: string;
      description?: string;
      color?: string,
      to?: {
        name: string;
      }
    })[];
    } {
    return {
      cards: [
        {
          title: 'Babylon',
          description: 'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
          color: 'blue-500',
        },
        {

          title: 'Discord-Bot',
          description: 'At vero eos et accusam et justo duo dolores et ea rebum.',
          color: 'green-300',
        },
        {
          title: 'Anti-Cheat',
          description: 'Diam nonumy eirmod tempor invidunt ut labore et dolo.',
          to: {
            name: 'project',
          },
        },
        {

          title: 'MC-Server',
          description: 'At vero eos et.',
          color: 'green-300',
        },
      ],
    };
  },
};
</script>
