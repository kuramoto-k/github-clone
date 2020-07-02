<template>
  <div>
    <div class="mt-8 mb-4">
      <h2 class="text-sm font-semibold">
        Explore repositories
      </h2>
      <Repository />
      <Repository />
      <Repository class="border-none" />
    </div>
    <nuxt-link to="/" class="text-xs text-description">
      Explore more →
    </nuxt-link>
  </div>
</template>

<script>
import Repository from '~/components/molecules/repository'

export default {
  components: {
    Repository
  }
}
</script>
