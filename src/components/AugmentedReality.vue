<template>
  <div>
    <div ref="canvasZone">
      <canvas ref="renderCanvas" width="500" height="500"></canvas>
    </div>
  </div>
</template>

<script>
import mosaicScene from "/src/assets/js/mosaic_1.js";
export default {
  mounted() {
    let canvas = this.$refs.renderCanvas;
    if (canvas) {
      mosaicScene(canvas, "mini_mosaic_2.gltf");
    }
  },
};
</script>

<style scoped>
body {
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#renderCanvas {
  width: 100%;
  height: 100%;
  touch-action: none;
}

#canvasZone {
  width: 80%;
  height: 80%;
}
</style>