<template>
  <div>
    <search-blocks></search-blocks>
    <get-blocks></get-blocks>
  </div>
</template>

<script>
import SearchBlocks from "@/components/SearchBlocks.vue";
import GetBlocks from "@/components/GetBlocks.vue";
export default {
  components: {
    SearchBlocks,
    GetBlocks,
  },
};
</script>

<style scoped>
</style>