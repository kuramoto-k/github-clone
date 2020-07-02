<template>
  <form action="get" class="mr-4">
    <label class="bg-search-bar min-h-input-sm block rounded">
      <input type="text" class="input" placeholder="Search GitHub">
    </label>
  </form>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.input {
  @apply rounded px-3 min-h-input-sm bg-transparent;
}
.input:focus {
  @apply border-none outline-none bg-search-bar-focus;
}
</style>
