<template>
  <div class="contact-form">
    <h2>Contact Us</h2>
    <div>
      <!-- Form for contact -->
      <label for="email">Email:</label>
      <input type="email" id="email" ref="email" />
      <label for="block-id">Block ID:</label>
      <input type="text" id="block-id" ref="blockId" />
      <label for="name">Name:</label>
      <input type="text" id="name" ref="name" />
      <label for="question">Question:</label>
      <textarea id="question"></textarea>
    </div>
    <button @click="submitForm">Submit</button>
  </div>
</template>
  
  <script>
export default {
  methods: {
    // Will eventually have either db request for contact questions or email
    submitForm() {},
  },
};
</script>
  
  <style scoped>
div {
  display: grid;
  justify-items: center;
  align-items: center;
  text-align: center;
  margin: 20px;
  background-color: rgba(173, 173, 173, 0.589);
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 40px;
}
</style>
  