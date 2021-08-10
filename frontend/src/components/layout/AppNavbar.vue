<template>
  <div>
    <nav class="w-full fixed h-14 bg-gray-900 text-gray-50 2xl:px-8 z-10">
      <LayoutContainer class="lg:px-8 lg:flex lg:gap-4 2xl:px-0 h-full">
        <div class="flex h-full">
          <div
            class="flex items-center justify-center cursor-pointer w-12 p-2 text-4xl
            transition-colors  hover:text-highlight lg:hidden"
            >
              <font-awesome-icon :icon="['fas', 'bars']" class="pointer-events-none"/>
          </div>

          <router-link
            :to="{name: 'home'}"
            class="group flex-grow flex p-2 items-center justify-center font-thin text-4xl
            uppercase gap-2 lg:justify-start"
            >
              <font-awesome-icon
                :icon="['fas', 'language']"
                class="transition-colors group-hover:text-highlight"
              />
              <span class="hidden sm:block lg:hidden xl:block">{{ $t('app.name')}}</span>
              <span class="bg-green-500 radius-20 px-2 text-base font-bold">Alpha</span>
          </router-link>

          <div
            class="flex items-center justify-center cursor-pointer w-12 p-2 text-4xl
            transition-colors  hover:text-highlight lg:hidden"
            >
              <font-awesome-icon :icon="['fas', 'user']"/>
          </div>
        </div>
      </LayoutContainer>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue';
import LayoutContainer from '@/components/layout/LayoutContainer.vue';

export default Vue.extend({
  name: 'AppNavbar',
  components: {
    LayoutContainer,
  },
});
</script>

<style>

</style>
