<template>
  <div>
    <!-- inputs to add photo to existing block -->
    <h3>add photo to existing block post</h3>
    <input type="file" ref="uploaded_image" />
    <input
      type="text"
      ref="image_description"
      placeholder="description of photo"
    />
    <input type="text" ref="block_ID" placeholder="block ID" />
    <button @click="addphoto">add photo</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    //Add photo function that uses form.append and sends a post request to the db
    addphoto() {
      let form = new FormData();
      form.append("uploaded_image", this.$refs["uploaded_image"]["files"][0]);
      form.append("block_id", this.$refs["block_ID"].value);
      form.append("image_description", this.$refs["image_description"].value);
      let cookie_token = cookies.get("token");
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/images`,
          method: `POST`,
          headers: {
            "Content-Type": "multipart/form-data",
            token: cookie_token,
          },
          data: form,
        })
        .then((response) => {
          console.log(response);
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