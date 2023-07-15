<template>
  <div>
    <search-results></search-results>
    <page-footer></page-footer>
  </div>
</template>

<script>
import SearchResults from "@/components/SearchResults.vue";

import PageFooter from "@/components/PageFooter.vue";
export default {
  components: {
    SearchResults,
    PageFooter,
  },
};
</script>

<style scoped>
</style>