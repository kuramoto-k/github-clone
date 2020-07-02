<template>
  <div class="bg-header">
    <header class="px-4 text-white leading-normal flex items-center">
      <div class="header-item">
        <nuxt-link to="/">
          <GithubIcon />
        </nuxt-link>
      </div>
      <div class="header-item w-full">
        <HeaderSearch />
        <HeaderNav />
      </div>
      <div class="header-item">
        <NavNotification />
      </div>
      <div class="header-item">
        <NavPlus />
      </div>
      <div class="header-item">
        <span>x</span>
      </div>
    </header>
  </div>
</template>

<script>
import GithubIcon from '~/components/atoms/svg/github-icon'
import NavNotification from '~/components/atoms/svg/nav-notification'
import NavPlus from '~/components/atoms/svg/nav-plus'
import HeaderSearch from '~/components/molecules/header-search'
import HeaderNav from '~/components/molecules/header-nav'

export default {
  components: {
    GithubIcon,
    HeaderSearch,
    HeaderNav,
    NavNotification,
    NavPlus
  }
}
</script>

<style lang="postcss" scoped>
.header-item {
  @apply self-stretch flex-no-wrap mr-4 items-center flex
}
</style>
