<template>
  <div>
    <article v-for="image in images" :key="image.id">
      <img
        :src="getImageUrl(image.file)"
        :alt="image.description"
        width="200px"
      />
    </article>
    <h2>{{ block[`title`] }}</h2>
    <p>{{ block[`info`] }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      images: undefined,
      block: undefined,
      block_id: this.$route.params[`block_id`],
    };
  },
  methods: {
    getImageUrl(img) {
      let new_image = require("../assets/" + img);
      return new_image;
    },
  },
  mounted() {
    axios
      .request({
        url: `${process.env.VUE_APP_BASE_DOMAIN}/api/blocks_id`,
        method: `GET`,
        params: { block_id: this.block_id },
      })
      .then((response) => {
        console.log(response);
        this.block = response.data[0];
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .request({
        url: `${process.env.VUE_APP_BASE_DOMAIN}/api/images_id`,
        method: `GET`,
        params: { block_id: this.block_id },
      })
      .then((response) => {
        console.log(response);
        this.images = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
</style>