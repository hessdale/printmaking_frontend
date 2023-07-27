<template>
  <div>
    <home-info></home-info>
    <page-footer></page-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeInfo from "@/components/HomeInfo.vue";

import PageFooter from "@/components/PageFooter.vue";
export default {
  components: {
    HomeInfo,
    PageFooter,
  },
};
</script>
