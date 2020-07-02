<template>
  <div class="my-2 py-2 border-b">
    <nuxt-link to="/" class="text-xs font-semibold">
      user-name/repositoriy-name
    </nuxt-link>
    <p class="text-xs text-description">
      An extremely fast JavaScript bundler and minifier
    </p>
    <p class="mt-1">
      <span class="mr-4">
        <span>
          <span class="inline-block bg-yellow-400 rounded-full w-3 h-3" />
          <span class="text-xs text-description">
            Javascript
          </span>
        </span>
      </span>
      <span class="mr-4">
        <nuxt-link to="/">
          <StarIcon />
          <span class="text-xs text-description">
            9.8k
          </span>
        </nuxt-link>
      </span>
    </p>
  </div>
</template>

<script>
import StarIcon from '~/components/atoms/svg/star'

export default {
  components: {
    StarIcon
  }
}
</script>

<style>

</style>
