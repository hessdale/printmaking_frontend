<template>
  <div>
    <input type="text" placeholder="title" ref="title" />
    <input type="text" placeholder="name" ref="name" />
    <input type="text" placeholder="Date (yyyy-mm-dd)" ref="date" />
    <input type="text" placeholder="publication" ref="publication" />
    <input type="text" placeholder="block ID" ref="block_id" />
    <input type="text" placeholder="cliffnotes" ref="cliffnotes" />
    <textarea name="info" ref="info" cols="60" rows="30"></textarea>
    <button @click="post_block">POST</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    post_block() {
      let form = new FormData();
      form.append("title", this.$refs["title"].value);
      form.append("name", this.$refs["name"].value);
      form.append("date", this.$refs["date"].value);
      form.append("publication", this.$refs["publication"].value);
      form.append("block_id", this.$refs["block_id"].value);
      form.append("cliff_notes", this.$refs["cliffnotes"].value);
      form.append("info", this.$refs["info"].value);
      let cookie_token = cookies.get("token");
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/blocks`,
          method: `POST`,
          headers: {
            token: cookie_token,
            "Content-Type": "multipart/form-data",
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
div {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin-top: 60px;
}
button {
  margin-top: 10px;
}
input {
  margin-top: 10px;
}
textarea {
  margin-top: 10px;
}
</style>