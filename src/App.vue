<template>
  <main class="app-main-wrap">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <RouterView />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.app-main-wrap {
  min-width: 100vw;
  min-height: 100vh;
}
</style>
