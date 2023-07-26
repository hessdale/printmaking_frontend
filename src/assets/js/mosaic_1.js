import { Engine, Scene, DeviceOrientationCamera, Vector3, HemisphericLight, SceneLoader, } from "@babylonjs/core";
//Engine, Scene, DeviceOrientationCamera, Vector3, HemisphericLight, SceneLoader, 


let createScene = (canvas_input, asset_input) => {
    let canvas = canvas_input;
    let engine = new Engine(canvas);
    let sceneToRender = null;

    //INSERT scene creation?
    let scene = new Scene(engine);

    /********** DEVICE ORIENTATION CAMERA EXAMPLE **************************/

    // This creates and positions a device orientation camera 	
    let camera = new DeviceOrientationCamera("DevOr_camera", new Vector3(0, 0, 1.1), scene);

    // This targets the camera to scene origin
    camera.setTarget(new Vector3(0, 0, 1));

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);
    /**************************************************************/

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    // let light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    //import local gltf
    SceneLoader.LoadAssetContainer("/images/", asset_input, scene, function (container) {
        const meshes = container.meshes;
        const materials = container.materials;
        //...

        // Adds all elements to the scene
        container.addAllToScene();

    });
    //took out because of assigned value but never used
    // let ground = Mesh.CreateGround("ground1", 10, 10, 2, scene);

    //?? might go to end of createScene
    let startRenderLoop = function (engine, canvas) {
        engine.runRenderLoop(function () {
            if (sceneToRender && sceneToRender.activeCamera) {
                sceneToRender.render();
            }
        });
    }

    window.initFunction = async function () {



        let asyncEngineCreation = async function () {
            try {
                return createDefaultEngine();
            } catch (e) {
                console.log("the available createEngine function failed. Creating the default engine instead");
                return createDefaultEngine();
            }
        }

        window.engine = await asyncEngineCreation();
        if (!engine) throw 'engine should not be null.';
        startRenderLoop(engine, canvas);
        window.scene = createScene();
    };
    initFunction().then(() => {
        sceneToRender = scene
    });

    // Resize
    window.addEventListener("resize", function () {
        engine.resize();
    });
}
export { createScene }