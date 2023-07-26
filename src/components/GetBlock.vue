<template>
  <div>
    <!-- Loop through each image in the 'images' array and display them -->
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
    //Function to get proper path for image url
    getImageUrl(img) {
      let new_image = require("../../../printmaking/images/" + img);
      return new_image;
    },
  },
  mounted() {
    // requests to get the appropriate block and info/images with it
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