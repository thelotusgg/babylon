<template>
  <div>
    <div id="nav" class="bg-green-100">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <font-awesome-icon
      :icon="['fas', 'bars']"
      class="text-4xl hover:text-green-500 hover:cursor-pointer"
    />
    <font-awesome-icon
      :icon="['fab', 'github']"
      class="text-4xl hover:text-yellow-500 hover:cursor-pointer"
    />
    </div>
</template>

<style>
</style>
