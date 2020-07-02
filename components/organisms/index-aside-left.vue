<template>
  <div>
    <div class="px-6">
      <div class="mt-8 mb-4">
        <div>
          <h2 class="text-sm font-semibold flex">
            Repositories
            <nuxt-link to="/" class="new-btn">
              <NewIcon />
              New
            </nuxt-link>
          </h2>
          <div>
            <input type="text" placeholder="Find a repository...">
          </div>
          <ul>
            <li>
              <nuxt-link to="/" class="text-sm font-semibold text-link">
                <span>
                  user-name
                </span>
                /
                <span>
                  project-name
                </span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="mb-4">
        <h2 class="text-sm font-semibold border-t pt-4 mb-1">
          Working with a team?
        </h2>
        <p class="text-sm">
          GitHub is built for collaboration. Set up an organization to improve the way your team works together, and get access to more features.
        </p>
        <nuxt-link to="/" class="create-organization-btn text-xs font-semibold rounded border inline-block py-1 px-3">
          Create an organization
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import NewIcon from '~/components/atoms/svg/new-icon'

export default {
  components: {
    NewIcon
  }
}
</script>

<style lang="postcss" scoped>
.new-btn {
  @apply bg-new-btn text-white px-3 py-1 rounded text-xs
}
.new-btn:hover {
  @apply bg-new-btn-hover
}
.create-organization-btn {
  @apply text-link
}
.create-organization-btn:hover {
  @apply text-white bg-link
}
</style>
