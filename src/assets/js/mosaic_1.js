import { Engine, Scene, DeviceOrientationCamera, Vector3, HemisphericLight, SceneLoader } from "@babylonjs/core";

function mosaicScene(canvas_input, asset_input) {
    let engine = null;
    let scene = null;

    async function createScene(canvas_input, asset_input) {
        let canvas = canvas_input;
        engine = new Engine(canvas_input);
        scene = new Scene(engine);

        let camera = new DeviceOrientationCamera("DevOr_camera", new Vector3(0, 0, 1.1), scene);
        camera.setTarget(Vector3.Zero());
        camera.attachControl(canvas, true);

        new HemisphericLight("light", Vector3.Up(), scene);

        await SceneLoader.LoadAssetContainer("/public/3d_assets", asset_input, scene, function (container) {
            container.addAllToScene();
        });

        startRenderLoop();
    }

    function startRenderLoop() {
        engine.runRenderLoop(() => {
            if (scene && scene.activeCamera) {
                scene.render();
            }
        });
    }

    function initFunction() {
        try {
            // Perform any additional setup if needed (e.g., setting up options, rendering pipeline, etc.)
            // ...

            startRenderLoop();
        } catch (e) {
            console.log("Failed to initialize the custom engine. Falling back to the default engine.");
            // You may want to add fallback logic or additional error handling here if necessary
            engine = new Engine(canvas_input); // Create a new instance of the Engine class as a fallback
            startRenderLoop();
        }

        if (!engine) {
            throw 'Engine should not be null.';
        }
    }

    function resizeHandler() {
        engine.resize();
    }

    function setup(canvas) {
        initFunction();
        createScene(canvas, asset_input);
        window.addEventListener("resize", resizeHandler);
    }

    // Call the setup function and return any functions or values you want to expose
    setup(canvas_input);

    return {
        // Return any functions or values you want to expose
    };
}

export default mosaicScene;
