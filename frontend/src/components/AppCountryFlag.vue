<template>
    <img :src="'/flags/' + countryCode + '.svg'"/>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppCountryFlag',
  props: {
    countryCode: {
      type: String,
    },
  },
});
</script>
