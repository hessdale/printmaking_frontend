<template>
  <div>
    <input type="text" placeholder="search" ref="search_input" />
    <button @click="search">search</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blocks: undefined,
    };
  },
  methods: {
    search() {
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/search`,
          method: `GET`,
          params: {
            search: this.$refs["search_input"].value,
          },
        })
        .then((response) => {
          console.log(response);
          this.blocks = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>