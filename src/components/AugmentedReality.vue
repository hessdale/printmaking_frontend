<template>
  <div>
    <div ref="canvasZone">
      <canvas ref="renderCanvas" width="800" height="800"></canvas>
    </div>
  </div>
</template>

<script>
import mosaicScene from "@/assets/js/mosaic_1";

export default {
  mounted() {
    let canvas = this.$refs.renderCanvas;
    let assetInput = "mini_mosaic_2.gltf";
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
