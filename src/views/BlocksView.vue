<template>
  <div>
    <search-blocks></search-blocks>
    <get-blocks></get-blocks>
    <page-footer></page-footer>
  </div>
</template>

<script>
import SearchBlocks from "@/components/SearchBlocks.vue";
import GetBlocks from "@/components/GetBlocks.vue";
import PageFooter from "@/components/PageFooter.vue";
export default {
  components: {
    SearchBlocks,
    GetBlocks,
    PageFooter,
  },
};
</script>

<style scoped>
</style>