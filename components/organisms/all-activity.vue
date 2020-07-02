<template>
  <div>
    <h2>
      All activity
    </h2>
    <div>
      <div class="activity">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <div v-show="false">
          list
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityCard from '~/components/molecules/activity-card'

export default {
  components: {
    ActivityCard
  }
}
</script>

<style>

</style>
