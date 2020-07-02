<template>
  <div>
    <div class="py-4 flex border-b">
      <span class="mr-1">
        <nuxt-link to="/">
          <span>o</span>
        </nuxt-link>
      </span>
      <div class="w-full">
        <div class="flex justify-between">
          <div>
            <nuxt-link to="/" class="text-sm font-semibold">
              user-name
            </nuxt-link>
            <span class="text-sm">
              <span>
                starred
              </span>
              <span>
                8 repositories
              </span>
              <span class="text-xs text-description">
                5 days ago
              </span>
            </span>
          </div>
          <div>
            <button>
              <span>
                <DetailsShow />
              </span>
            </button>
          </div>
        </div>
        <div>
          <div class="border rounded mt-2 p-4 bg-white">
            <div>
              <div>
                <nuxt-link to="/" class="font-semibold">
                  project-name/branch-name
                </nuxt-link>
                <div class="float-right">
                  <button class="star-btn border">
                    <StarIcon />
                    Star
                  </button>
                </div>
              </div>
              <div>
                <p class="text-description text-sm mt-1">
                  An accessible tab container element with keyboard support.
                </p>
              </div>
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
                      158
                    </span>
                  </nuxt-link>
                </span>
                <span>
                  <span class="text-xs text-description">
                    Updated Jul 2
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailsShow from '~/components/atoms/svg/details-show'
import StarIcon from '~/components/atoms/svg/star'

export default {
  components: {
    DetailsShow,
    StarIcon
  }
}
</script>

<style lang="postcss" scoped>
.star-btn {
  @apply px-3 py-1 rounded text-xs font-semibold
}
.star-btn:hover {
  @apply bg-star-btn-hover
}
</style>
