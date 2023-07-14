<template>
  <div>
    <search-blocks></search-blocks>
    <article v-for="(block, i) in blocks" :key="i">
      <h3>{{ block[`title`] }}</h3>
      <p>{{ block[`cliff_notes`] }}</p>
      <img
        :src="getImageUrl(block[`file`])"
        :alt="block[`image_description`]"
        width="200px"
      />
      <button @click="moreInfo(block[`block_id`])">more info</button>
    </article>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import SearchBlocks from "@/components/SearchBlocks.vue";
export default {
  components: {
    SearchBlocks,
  },
  methods: {
    moreInfo(block_id) {
      router.push({ name: "block", params: { block_id } });
    },
    getImageUrl(img) {
      let new_image = require("../assets/" + img);
      return new_image;
    },
  },
  data() {
    return {
      blocks: undefined,
      search_params: this.$route.params[`search_params`],
    };
  },
  mounted() {
    axios
      .request({
        url: `${process.env.VUE_APP_BASE_DOMAIN}/api/search`,
        method: `GET`,
        params: {
          search: this.search_params,
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
};
</script>

<style scoped>
</style>