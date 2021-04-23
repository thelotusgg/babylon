<template>
  <nav class="bg-gray-800 dark:bg-black text-gray-50 w-full fixed z-30">
    <div class="mx-auto lg:px-2 lg:flex lg:gap-4 2xl:px-0 2xl:max-w-layoutContainer">
      <div class="flex">
        <div
          class="flex items-center justify-center text-center cursor-pointer z-10
          transition-colors hover:text-green-500 lg:hidden w-12 p-2 text-4xl">
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
          @click="closeOpenMenu"
          class="group flex-1 flex p-2 items-center justify-center font-thin text-4xl
          uppercase gap-2 lg:justify-start">
          <font-awesome-icon :icon="['fas', 'language']" class="group-hover:text-green-500"/>
          <span class="hidden sm:block">{{ $t(appName) }}</span>
        </router-link>

        <div
          class="flex items-center justify-center text-center cursor-pointer z-10
          transition-colors hover:text-green-500 lg:hidden w-12 p-2 text-4xl">
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

      <AppNavbarMenu
        class="lg:flex-grow"
        :class="{
          'translate-x-0': mainMenuIsOpen,
          '-translate-x-full lg:translate-x-0': !mainMenuIsOpen,
        }">
        <AppNavbarMenuItem
          v-for="mainMenuItem in mainMenu.items"
          :key="mainMenuItem"
          :icon="mainMenuItem.icon"
          :title="$t(mainMenuItem.title)"
          :to="mainMenuItem.to"
          @click="closeMainMenu"/>
      </AppNavbarMenu>

      <div id="userMenu" class="lg:relative">
        <div
          class="hidden text-lg gap-4 px-4 py-3 items-center group h-full cursor-pointer lg:flex">
          <span>Doe, John</span>
          <font-awesome-icon
            :icon="['fas', 'user']"
            class="text-2xl transition-colors group-hover:text-green-500"
          />
        </div>
      <AppNavbarMenu
        class="right-0 flex-grow lg:flex-col lg:absolute lg:bg-gray-50 lg:dark:bg-gray-800
        lg:text-gray-700 lg:dark:text-gray-50 lg:hidden lg:shadow-sm"
        :class="{
          '-translate-x-0': userMenuIsOpen,
          'translate-x-full lg:translate-x-0': !userMenuIsOpen,
        }">
        <AppNavbarMenuItem
          :type="userMenu.type"
          v-for="userMenuItem in userMenu.items"
          :key="userMenuItem"
          :icon="userMenuItem.icon"
          :title="$t(userMenuItem.title)"
          :to="userMenuItem.to"
          @click="closeUserMenu"/>
      </AppNavbarMenu>
      </div>
    </div>
  </nav>

  <div
    v-if="(mainMenuIsOpen || userMenuIsOpen)"
    @click="closeOpenMenu"
    class="absolute w-full h-screen transition-color transition-opacity bg-opacity-50 duration-300
    dark:bg-opacity-70 bg-gray-900 dark:bg-black z-20 cursor-pointer lg:hidden"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNavbarMenu from '@/components/AppNavbarMenu.vue';
import AppNavbarMenuItem from '@/components/AppNavbarMenuItem.vue';

export default defineComponent({
  name: 'AppNavbar',
  components: {
    AppNavbarMenu,
    AppNavbarMenuItem,
  },
  props: {
    appName: {
      type: String,
      default: 'app.name',
    },
  },
  data(): {
    mainMenuIsOpen: boolean;
    userMenuIsOpen: boolean;

    mainMenu: {
      items: {
        title?: string;
        icon: string[];
        to: {
          name: string,
          params?: {
            id: string,
          };
        }
      }[];
    };
    userMenu: {
      type: string;
      items: {
        title?: string;
        icon: string[];
        to: {
          name: string,
          params?: {
            id: string,
          };
        }
      }[];
    };
    } {
    return {
      mainMenuIsOpen: false,
      userMenuIsOpen: false,

      mainMenu: {
        items: [
          {
            title: 'app.page.dashboard',
            icon: ['fas', 'cubes'],
            to: {
              name: 'dashboard',
            },
          },
        ],
      },
      userMenu: {
        type: 'dropdown',
        items: [
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
      },
    };
  },
  methods: {
    openMainMenu(): void {
      if (this.userMenuIsOpen) {
        this.userMenuIsOpen = false;
        setTimeout((): void => {
          this.mainMenuIsOpen = true;
        }, 300);
      } else {
        document.body.classList.add('overflow-hidden');
        document.body.classList.add('lg:overflow-auto');
        this.mainMenuIsOpen = true;
      }
    },
    closeMainMenu(): void {
      document.body.classList.remove('overflow-hidden');
      document.body.classList.remove('lg:overflow-auto');
      this.mainMenuIsOpen = false;
    },
    openUserMenu(): void {
      if (this.mainMenuIsOpen) {
        this.mainMenuIsOpen = false;
        setTimeout((): void => {
          this.userMenuIsOpen = true;
        }, 300);
      } else {
        document.body.classList.add('overflow-hidden');
        document.body.classList.add('lg:overflow-auto');
        this.userMenuIsOpen = true;
      }
    },
    closeUserMenu(): void {
      document.body.classList.remove('overflow-hidden');
      document.body.classList.remove('lg:overflow-auto');
      this.userMenuIsOpen = false;
    },
    closeOpenMenu(): void {
      if (this.mainMenuIsOpen) {
        this.closeMainMenu();
      }
      if (this.userMenuIsOpen) {
        this.closeUserMenu();
      }
    },
  },
  watch: {
    $route() {
      this.closeOpenMenu();
    },
  },
});
</script>

<style lang="scss" scoped>
@screen lg {
  #userMenu {
    &:hover {
      > ul {
        @apply flex;
      }
    }
  }
}
</style>
