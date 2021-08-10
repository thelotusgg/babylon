<template>
  <div>
    <AppH1>
      <template v-if="project && project.title">
        {{ project.title.value }}
      </template>
      <template v-else>
        {{ $t('app.page.project.index')}}
      </template>
      <template v-if="project && project.description" v-slot:description>
        {{ project.description.value }}
      </template>
    </AppH1>
    <LoadableContent :show="!$apollo.loading" :spinner="$apollo.loading">
      <AppAlert v-if="!project" type="info">
        {{ $t('alert.project.notFound.info')}}
      </AppAlert>
      <template v-else>
        <router-view/>
      </template>
    </LoadableContent>
  </div>
</template>

<script lang="ts">
import gql from 'graphql-tag';
import Vue from 'vue';
import AppAlert from '@/components/ui/AppAlert.vue';
import AppH1 from '@/components/ui/AppH1.vue';
import LoadableContent from '@/components/ui/LoadableContent.vue';

export default Vue.extend({
  name: 'Project',
  components: {
    AppAlert,
    AppH1,
    LoadableContent,
  },

  apollo: {
    project: {
      query: gql`query ProjectQuery($id: ID!){
        project(_id: $id) {
          _id
          title {
            value
          }
          description {
            value
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
