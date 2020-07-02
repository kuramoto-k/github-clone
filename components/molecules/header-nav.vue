<template>
  <nav class="flex">
    <nuxt-link to="/" class="nav-text">
      Pull requests
    </nuxt-link>
    <nuxt-link to="/" class="nav-text">
      Issues
    </nuxt-link>
    <nuxt-link to="/" class="nav-text">
      Marketplace
    </nuxt-link>
    <nuxt-link to="/" class="nav-text">
      Explore
    </nuxt-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.nav-text {
  @apply block text-white font-semibold mr-4 py-4 text-sm
}
</style>
