// Log that the mosaicScene function has been called
console.log("mosaicScene function called");

// Import required modules from Babylon.js
import { Engine, Scene, DeviceOrientationCamera, Vector3, HemisphericLight, SceneLoader } from "@babylonjs/core";
import "@babylonjs/loaders";

// Define the mosaicScene function with two parameters canvas_input and asset_input
function mosaicScene(canvas_input, asset_input) {
    // Declare variables to hold the engine and scene
    let engine = null;
    let scene = null;
    asset_input; // I would like to make it dynamic in the future

    // Create an async function called createScene to set up the Babylon.js scene
    async function createScene() {
        // Log that the scene is being created
        console.log("Creating scene...");

        // Create the Babylon.js engine and scene
        engine = new Engine(canvas_input);
        scene = new Scene(engine);

        //Future I would like to add gyro compatability
        // Create a DeviceOrientationCamera and attach it to the canvas
        let camera = new DeviceOrientationCamera("DevOr_camera", new Vector3(0, 0, 1.1), scene);
        camera.setTarget(Vector3.Zero());
        camera.attachControl(canvas_input, true);

        // Add a HemisphericLight to the scene
        new HemisphericLight("light", Vector3.Up(), scene);

        // Load the GLTF file using the specified path
        console.log("Loading GLTF file...");
        await SceneLoader.LoadAssetContainer(
            "/3d_assets/", // Base URL for the glTF file
            "mini_mosaic.gltf", // File name of the glTF file
            scene, // The scene to load the glTF model into
            function (container) {
                // Callback function executed when the glTF model is loaded
                container.addAllToScene(); // Add the loaded model to the scene
                startRenderLoop(); // Start the rendering loop after the GLTF model is loaded
            },
            function (event) {
                // Error callback function if there is an issue loading the glTF model
                console.error("Error loading GLTF file:", event);
            }
        );
    }

    // Function to start the rendering loop
    function startRenderLoop() {
        console.log("Starting render loop...");
        engine.runRenderLoop(() => {
            // Render the scene on every frame
            if (scene && scene.activeCamera) {
                scene.render();
            }
        });
    }

    // Function to initialize the scene and handle any errors
    function initFunction() {
        try {
            // Create the scene and load the GLTF model
            createScene();
        } catch (e) {
            console.log("Failed to initialize the custom engine. Falling back to the default engine.");
            // You may want to add fallback logic or additional error handling here if necessary
            engine = new Engine(canvas_input); // Create a new instance of the Engine class as a fallback
            createScene();
        }

        if (!engine) {
            // Throw an error if the engine is null (which should not happen)
            throw 'Engine should not be null.';
        }
    }

    // Function to handle window resizing and update the engines size
    function resizeHandler() {
        engine.resize();
    }

    // Function to set up the scene and resize event listener
    function setup() {
        initFunction();
        window.addEventListener("resize", resizeHandler);
    }

    // Call the setup function and return any functions or values you want to expose
    setup();

    return {
        // Return used to hand back any functions or values in the future
    };
}

// Export the mosaicScene function as the default export of this module
export default mosaicScene;
