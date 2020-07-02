<template>
  <div>
    <h2 class="mt-4">
      Recent activity
    </h2>
    <div class="mt-2 mb-8">
      <ul class="border rounded bg-white">
        <li class="p-2 flex">
          <nuxt-link to="/">
            <span>
              x
            </span>
          </nuxt-link>
          <div>
            <div class="flex">
              <div>
                <nuxt-link to="/" class="text-sm font-semibold">
                  Branch name
                </nuxt-link>
              </div>
              <div>
                <div>
                  <span>
                    x
                  </span>
                </div>
              </div>
            </div>
            <div class="text-xs text-description">
              <nuxt-link to="/">
                user-name/project-name
              </nuxt-link>
              <span>
                ・
              </span>
              <span>
                You opened this pull request
              </span>
              <span>
                6 days ago
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
