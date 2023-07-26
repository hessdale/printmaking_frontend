<template>
  <div>
    <article v-for="(block, i) in blocks" :key="i">
      <img
        :src="getImageUrl(block[`file`])"
        :alt="block[`image_description`]"
        width="80%"
      />
      <span>
        <h3>{{ block[`title`] }}</h3>
        <p>{{ block[`cliff_notes`] }}</p>
        <button @click="moreInfo(block[`block_id`])">more info</button>
      </span>
    </article>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
export default {
  data() {
    return {
      blocks: undefined,
    };
  },
  methods: {
    moreInfo(block_id) {
      router.push({ name: "block", params: { block_id } });
    },
    getImageUrl(img) {
      let new_image = require("../../../printmaking/images/" + img);
      return new_image;
    },
  },
  mounted() {
    axios
      .request({
        url: `${process.env.VUE_APP_BASE_DOMAIN}/api/blocks`,
        method: `GET`,
      })
      .then((response) => {
        this.blocks = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
article {
  display: grid;
  justify-items: center;
  align-items: center;
  text-align: center;
  grid-auto-flow: column;
  margin: 20px;
  background-color: rgba(173, 173, 173, 0.589);
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 40px;
}
img {
  max-width: 375px;
}
button {
  margin-top: 5px;
}
</style>