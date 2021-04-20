<template>
  <nav>
    <div class="font-thin bg-gray-900 w-full lg:px-4 z-30">
      <div
        class="flex items-center 2xl:w-layoutContainer 2xl:mx-auto"
        :class="menuButtonPosition == 'right' ? 'flex-row-reverse' : ''">

        <div
          class="p-2 w-8 text-center group cursor-pointer absolute lg:invisible"
          @click="openNavbar"
          v-if="!isActive">
          <font-awesome-icon :icon="['fas', 'bars']" class="text-4xl text-gray-200
          group-hover:text-green-500"/>
        </div>
        <div
          class="p-2 w-12 text-center group cursor-pointer absolute lg:invisible"
          @click="closeNavbar"
          v-if="isActive">
          <font-awesome-icon :icon="['fas', 'times']" class="text-4xl text-gray-200
          group-hover:text-green-500"/>
        </div>

        <router-link class="flex-grow lg:flex-grow-0 text-4xl text-gray-50 uppercase
        p-2 text-center lg:text-left" :to="{name: 'dashboard'}">{{ $t(appName) }}</router-link>

      </div>
    </div>

    <div class="bg-gray-700 text-gray-200 fixed min-h-screen z-20 w-full transform duration-300
      overflow-hidden shadow-md"
      :class="{'translate-x-0': isActive, '-translate-x-full': !isActive}">

      <ul class="block text-lg">
        <li v-for="menuItem in menu" :key="menuItem" class="w-full">
          <router-link
            :to="menuItem.to"
            class="group px-3 py-4 w-full transition-colors hover:bg-gray-800 flex gap-2">
            <div class="text-center w-8 transition-colors group-hover:text-green-500">
              <font-awesome-icon
                :icon="menuItem.icon"
                class="text-2xl"/>
            </div>
            {{ $t(menuItem.title) }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
  props: {
    appName: {
      type: String,
      default: 'app.name',
    },
    menuButtonPosition: {
      type: String,
      validator: (value: 'left'|'right'): boolean => ['left', 'right'].indexOf(value) !== -1,
      default: 'left',
    },
  },
  data(): { isActive: boolean; menu: { title: string, icon: string[], to: { name: string } }[] } {
    return {
      isActive: false,
      menu: [
        {
          title: 'app.page.dashboard',
          icon: ['fas', 'cubes'],
          to: {
            name: 'dashboard',
          },
        },
        {
          title: 'app.page.user.settings',
          icon: ['fas', 'cogs'],
          to: {
            name: 'user.settings',
          },
        },
        {
          title: 'app.page.user.signout',
          icon: ['fas', 'sign-out-alt'],
          to: {
            name: 'user.signout',
          },
        },
      ],
    };
  },
  methods: {
    openNavbar(): void {
      document.documentElement.style.overflow = 'hidden';
      this.isActive = true;
    },
    closeNavbar(): void {
      document.documentElement.style.overflow = 'auto';
      this.isActive = false;
    },
  },
  watch: {
    $route() {
      if (this.isActive) {
        this.closeNavbar();
      }
    },
  },
});
</script>

<style lang="scss" scoped>
nav ul .router-link-exact-active {
  @apply bg-gray-800;
  > div {
    @apply text-green-500;
  }
}
</style>
