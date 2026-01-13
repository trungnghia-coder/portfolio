<script setup>
import Header from './components/Header.vue'
import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<template>
  <Header />
  <main class="flex-grow-1">
    <router-view></router-view>
  </main>
</template>

<style scoped>

</style>
