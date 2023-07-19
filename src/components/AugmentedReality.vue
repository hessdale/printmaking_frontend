<template>
  <div>
    <!-- IMAGE TRACKING -->
    <body style="margin: 0px; overflow: hidden">
      <div class="arjs-loader">
        <div>Loading, please wait...</div>
      </div>
      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true; precision: medium;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: true;"
      >
        <a-nft
          type="nft"
          url="/3d_assets/image_tracking/Duck"
          smooth="true"
          smoothCount="10"
          smoothTolerance=".01"
          smoothThreshold="5"
        >
          <a-entity
            gltf-model="/3d_assets//3d_image/Duck.gltf"
            scale="5 5 5"
            position="150 300 -100"
          >
          </a-entity>
        </a-nft>
        <a-entity camera></a-entity>
      </a-scene>
    </body>
    <!-- MARKER TRACKING -->
    <!-- <body style="margin: 0px; overflow: hidden">
      <a-scene embedded arjs>
        <a-marker preset="hiro">
          <a-entity
            position="0 0 0"
            scale="0.05 0.05 0.05"
            gltf-model="/3d_assets/Duck.gltf"
          ></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </body> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.arjs-loader {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arjs-loader div {
  text-align: center;
  font-size: 1.25em;
  color: white;
}
</style>