<template>
  <div>
    <LoadableContent :show="!$apollo.loading" :spinner="$apollo.loading">
      <CardList v-if="project" :languages="project.languages" />
    </LoadableContent>
  </div>
</template>

<script lang="ts">
import gql from 'graphql-tag';
import Vue from 'vue';
import CardList from '@/components/project/language/CardList.vue';
import LoadableContent from '@/components/ui/LoadableContent.vue';

export default Vue.extend({
  name: 'Project',
  components: {
    CardList,
    LoadableContent,
  },

  apollo: {
    project: {
      query: gql`query ProjectIndexQuery($id: ID!){
        project(_id: $id) {
          _id
          languages {
            code
            countryCode
          }
        }
      }`,
      variables(): { id: string; } {
        return {
          id: this.$route.params.id,
        };
      },
    },
  },
});
</script>
