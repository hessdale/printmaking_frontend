<template>
  <div>
    <article v-if="token != undefined">
      <h3>Welcome</h3>
    </article>
    <article v-else>
      <admin-login></admin-login>
    </article>
    <article v-if="token != undefined">
      <post-block></post-block>
      <add-photo></add-photo>
      <button @click="logout">Log out</button>
    </article>
    <page-footer></page-footer>
  </div>
</template>

<script>
import AdminLogin from "@/components/AdminLogin.vue";
import PostBlock from "@/components/PostBlock.vue";
import AddPhoto from "@/components/AddPhoto.vue";
import cookies from "vue-cookies";
import PageFooter from "@/components/PageFooter.vue";
export default {
  methods: {
    logout() {
      cookies.remove("token");
      this.$router.go();
    },
  },
  mounted() {
    this.token = cookies.get("token");
  },
  data() {
    return {
      token: undefined,
    };
  },
  components: {
    AdminLogin,
    PostBlock,
    AddPhoto,
    PageFooter,
  },
};
</script>

<style scoped>
button {
  margin: 10px;
}
</style>