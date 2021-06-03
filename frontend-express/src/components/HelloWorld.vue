<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script lang="ts">
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
</style>
