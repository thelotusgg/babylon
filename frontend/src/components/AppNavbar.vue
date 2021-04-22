<template>
  <nav class="bg-gray-800">
    <div class="mx-auto lg:px-2 2xl:px-0 2xl:max-w-layoutContainer">
      <div class="flex">
        <div class="flex items-center justify-center relative text-center cursor-pointer
        text-gray-200 hover:text-green-500 lg:hidden w-12 p-2 text-4xl">
          <font-awesome-icon
            :icon="['fas', 'bars']"
            @click="openMainMenu"
            v-if="!mainMenuIsOpen"/>
          <font-awesome-icon
            :icon="['fas', 'times']"
            @click="closeMainMenu"
            v-if="mainMenuIsOpen"/>
        </div>

        <router-link
          :to="{name: 'dashboard'}"
          tag="div"
          class="flex-1 flex p-2 items-center justify-center font-thin text-4xl uppercase
          text-gray-50 gap-2 lg:justify-start">
          <font-awesome-icon :icon="['fas', 'language']"/>
          <span class="hidden sm:block">{{ $t(appName) }}</span>
        </router-link>

        <div class="flex items-center justify-center relative text-center cursor-pointer
        text-gray-200 hover:text-green-500 lg:hidden w-12 p-2 text-4xl">
          <font-awesome-icon
            :icon="['fas', 'user']"
            @click="openUserMenu"
            v-if="!userMenuIsOpen"/>
          <font-awesome-icon
            :icon="['fas', 'times']"
            @click="closeUserMenu"
            v-if="userMenuIsOpen"/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNavbar',
  props: {
    appName: {
      type: String,
      default: 'app.name',
    },
  },
  data(): {
    mainMenuIsOpen: boolean;
    userMenuIsOpen: boolean;
    } {
    return {
      mainMenuIsOpen: false,
      userMenuIsOpen: false,
    };
  },
  methods: {
    openMainMenu(): void {
      if (this.userMenuIsOpen) {
        this.userMenuIsOpen = false;
      } else {
        document.documentElement.style.overflow = 'hidden';
      }
      this.mainMenuIsOpen = true;
    },
    closeMainMenu(): void {
      document.documentElement.style.overflow = 'auto';
      this.mainMenuIsOpen = false;
    },
    openUserMenu(): void {
      if (this.mainMenuIsOpen) {
        this.mainMenuIsOpen = false;
      } else {
        document.documentElement.style.overflow = 'hidden';
      }
      this.userMenuIsOpen = true;
    },
    closeUserMenu(): void {
      document.documentElement.style.overflow = 'auto';
      this.userMenuIsOpen = false;
    },
  },
  watch: {
    $route() {
      if (this.mainMenuIsOpen) {
        this.closeMainMenu();
      }
      if (this.userMenuIsOpen) {
        this.closeUserMenu();
      }
    },
  },
});
</script>
