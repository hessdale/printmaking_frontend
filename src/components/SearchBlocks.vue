<template>
  <div>
    <!-- Search bar for user input -->
    <input type="text" placeholder="search" ref="search_input" />
    <button @click="search">search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blocks: undefined,
    };
  },
  methods: {
    // Pushes user to search page with params in html
    search() {
      let search_params = this.$refs["search_input"].value;
      this.$router.push({ name: "search", params: { search_params } });
      this.$router.go();
    },
  },
};
</script>

<style scoped>
</style>