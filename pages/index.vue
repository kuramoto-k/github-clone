<template>
  <div class="application-main bg-main">
    <aside class="left-column bg-white">
      <AsideLeft />
    </aside>
    <div class="contents">
      <main>
        <RecentActivity />
        <AllActivity />
      </main>
    </div>
    <aside class="right-column">
      <AsideRight />
    </aside>
  </div>
</template>

<script>
import AsideLeft from '~/components/organisms/index-aside-left'
import AsideRight from '~/components/organisms/index-aside-right'
import RecentActivity from '~/components/organisms/recent-activity'
import AllActivity from '~/components/organisms/all-activity'

export default {
  components: {
    AsideLeft,
    AsideRight,
    RecentActivity,
    AllActivity
  }
}
</script>

<style lang="postcss" scoped>
.application-main {
  min-height: 100vh;
  display: flex;
}
.left-column {
  @apply max-w-aside w-1/4
}
.right-column {
  @apply max-w-aside w-1/4
}
.contents {
  @apply px-4 w-full mt-4 border-b
}
</style>
