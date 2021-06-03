<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>

    {{ $t('app.page.user.settings') }}

    <div v-if="$apollo.loading">Loading...</div>
    <ul v-else>
      <li v-for="category in categories" :key="category._id">
        {{ category.title.value }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
  },

  apollo: {
    // Simple query that will update the 'hello' vue property
    categories: gql`query {
      categories(rootOnly: true) {
        _id
        title {
          value
        }
      }
    }`,
  },
});
</script>
