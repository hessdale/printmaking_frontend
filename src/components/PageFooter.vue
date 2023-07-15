<template>
  <div>
    <div class="footer-content">
      <p>&copy; 2023</p>
      <p>
        For more information, visit our <a href="/about">About page</a> or
        <a href="/contact">contact us</a>.
      </p>
      <p id="small">built by dale paul</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
footer-content {
  font-family: "Lora", sans-serif;
  display: grid;
  justify-items: center;
  align-items: center;
  text-align: center;
  background-color: rgba(173, 173, 173, 0.589);
}
#small {
  font-size: 13px;
}
</style>