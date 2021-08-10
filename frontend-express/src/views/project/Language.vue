<template>
  <div>
    <LoadableContent :show="!$apollo.loading" :spinner="$apollo.loading">
      <AppAlert v-if="!project" type="info">
        {{ $t('alert.project.notFound.info')}}
      </AppAlert>
      <div v-else class="flex gap-4">
        <div class="bg-gray-300">
          <input
            v-model="phraseQuery"
            placeholder="Search..."
            class="px-3 py-1 focus:outline-none"/>
          <ul class="py-2">
            <li v-for="phrase in filteredPhrases" :key="phrase.key" class="px-3 py-1">
              {{ phrase.key }}
            </li>
          </ul>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <a>{{ project }}</a>
      </div>
    </LoadableContent>
  </div>
</template>

<script lang="ts">
import gql from 'graphql-tag';
import Vue from 'vue';
import LoadableContent from '@/components/ui/LoadableContent.vue';

declare interface Phrase {
  key: string;
}

declare interface Project {
  _id: string;
  phrases: Phrase[];
}

export default Vue.extend({
  name: 'Language',
  components: {
    LoadableContent,
  },
  data() {
    return {
      phraseQuery: '',
      project: {} as Project,
    };
  },
  apollo: {
    project: {
      query: gql`query ProjectLanguageQuery($id: ID!){
        project(_id: $id) {
          _id
          phrases {
            key
            translations {
              languageCode
              value
              proposals {
                value
              }
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

  computed: {
    filteredPhrases(): Phrase[] {
      if (!this.project.phrases) return [];
      let { phrases }: { phrases: Phrase[]} = JSON.parse(JSON.stringify(this.project));

      // filter by query
      const phraseQuery = this.phraseQuery.toLowerCase();
      phrases = phrases.filter((phrase) => phrase?.key.toLowerCase().includes(phraseQuery));

      // sort by key
      phrases = phrases.sort((a, b) => a.key.localeCompare(b.key));

      return phrases;
    },
  },
});
</script>
