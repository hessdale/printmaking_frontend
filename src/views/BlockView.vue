<template>
  <div>
    <get-block></get-block>
    <page-footer></page-footer>
  </div>
</template>

<script>
import GetBlock from "@/components/GetBlock.vue";

import PageFooter from "@/components/PageFooter.vue";
export default {
  components: {
    GetBlock,
    PageFooter,
  },
};
</script>

<style scoped>
</style>