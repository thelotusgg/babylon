<template>
  <div>
    <LoadableContent :show="!$apollo.loading" :spinner="$apollo.loading">
      {{ project }}
    </LoadableContent>
  </div>
</template>

<script lang="ts">
import gql from 'graphql-tag';
import Vue from 'vue';

export default Vue.extend({
  name: 'Language',

  apollo: {
    project: {
      query: gql`query ProjectLanguageQuery($id: ID!){
        project(_id: $id) {
          _id
          phrases {
            key 
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
