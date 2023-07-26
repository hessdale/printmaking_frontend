console.log("mosaicScene function called");
import { Engine, Scene, DeviceOrientationCamera, Vector3, HemisphericLight, SceneLoader } from "@babylonjs/core";

function mosaicScene(canvas_input, asset_input) {
    let engine = null;
    let scene = null;

    async function createScene() {
        console.log("Creating scene...");
        engine = new Engine(canvas_input);
        scene = new Scene(engine);

        let camera = new DeviceOrientationCamera("DevOr_camera", new Vector3(0, 0, 1.1), scene);
        camera.setTarget(Vector3.Zero());
        camera.attachControl(canvas_input, true);

        new HemisphericLight("light", Vector3.Up(), scene);

        // Load the GLTF file using the imported path
        console.log("Loading GLTF file...");
        await SceneLoader.LoadAssetContainer("", asset_input, scene,
            function (container) {
                container.addAllToScene();
                startRenderLoop();
            },
            function (event) {
                console.error("Error loading GLTF file:", event); // Add this line
            }
        );
    }

    function startRenderLoop() {
        console.log("Starting render loop...");
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

            // Create the scene and load the GLTF model
            createScene();
        } catch (e) {
            console.log("Failed to initialize the custom engine. Falling back to the default engine.");
            // You may want to add fallback logic or additional error handling here if necessary
            engine = new Engine(canvas_input); // Create a new instance of the Engine class as a fallback
            createScene();
        }

        if (!engine) {
            throw 'Engine should not be null.';
        }
    }

    function resizeHandler() {
        engine.resize();
    }

    function setup() {
        initFunction();
        window.addEventListener("resize", resizeHandler);
    }

    // Call the setup function and return any functions or values you want to expose
    setup();

    return {
        // Return any functions or values you want to expose
    };
}

export default mosaicScene;
