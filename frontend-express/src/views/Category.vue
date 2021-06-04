<template>
  <div>
    <AppH1>
      <template v-if="category && category.title">
        {{ category.title.value }}
      </template>
      <template v-else>
        {{ $t('app.page.category.index')}}
      </template>
      <template v-if="category && category.description" v-slot:description>
        {{ category.description.value }}
      </template>
    </AppH1>
    <LoadableContent :show="!$apollo.loading" :spinner="$apollo.loading">
      <AppAlert v-if="!category" type="info">
        {{ $t('alert.category.notFound.info')}}
      </AppAlert>
      <template v-else>
        <AppAlert v-if="category.projects.length == 0" type="info">
          {{ $t('alert.project.notFound.info')}}
        </AppAlert>
        <CardList v-else :projects="category.projects"/>
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
import CardList from '@/components/project/CardList.vue';

export default Vue.extend({
  name: 'Category',
  components: {
    AppAlert,
    AppH1,
    CardList,
    LoadableContent,
  },

  data() {
    return {
      category: null,
    };
  },

  apollo: {
    category: {
      query: gql`query CategoryQuery($id: ID!){
        category(_id: $id) {
          _id
          title {
            value
          }
          description {
            value
          }
          projects {
            _id
            title {
              value
            }
            description {
              value
            }
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
  mounted(): void {
    if (this.category) {
      // this.$route.meta.title = this.$t('app.page.category.index',
      // { title: this.category.title.value });
    }
  },
});
</script>
