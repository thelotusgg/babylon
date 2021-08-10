<template>
  <div>
    <AppH1>{{ $t('app.page.categories.index') }}</AppH1>

    <LoadableContent :show="!$apollo.loading" :spinner="$apollo.loading">
      <AppAlert v-if="!categories || categories.lenght == 0" type="info">
        {{ $t('alert.categories.notFound.info')}}
      </AppAlert>
      <div v-else class="flex flex-col gap-8">
        <div v-for="category in categories" :key="category._id">
          <AppH2>
            {{ category.title.value }}
            <template v-if="category.description" v-slot:description>
              {{ category.description.value }}
            </template>
          </AppH2>
          <CardList v-if="category.children" :categories="category.children"/>
        </div>
      </div>
    </LoadableContent>
  </div>
</template>

<script lang="ts">
import gql from 'graphql-tag';
import Vue from 'vue';
import AppAlert from '@/components/ui/AppAlert.vue';
import AppH1 from '@/components/ui/AppH1.vue';
import AppH2 from '@/components/ui/AppH2.vue';
import LoadableContent from '@/components/ui/LoadableContent.vue';
import CardList from '@/components/category/CardList.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    AppAlert,
    AppH1,
    AppH2,
    LoadableContent,
    CardList,
  },
  apollo: {
    categories: gql`query {
      categories(rootOnly: true) {
        _id
        title {
          value
        }
        description {
          value
        }
        children {
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
  },
});
</script>
