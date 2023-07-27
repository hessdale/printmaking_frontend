<template>
  <div>
    <!-- Canvas zone and renderCanvas for the mosaic_1.js file to display on -->
    <div ref="canvasZone">
      <canvas ref="renderCanvas" width="800" height="800"></canvas>
    </div>
  </div>
</template>

<script>
import mosaicScene from "@/assets/js/mosaic";

export default {
  mounted() {
    // on mounted calls the mosaicScene function in mosaic_1.js if canvas is defined
    let canvas = this.$refs.renderCanvas;
    let assetInput = "mini_mosaic.gltf";
    if (canvas) {
      mosaicScene(canvas, assetInput);
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
