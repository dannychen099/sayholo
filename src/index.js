import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";

const style = {
    height: 500 // we can control scene size by setting container dimensions
};

class App extends Component {
    componentDidMount() {
        this.sceneSetup();
        this.addLights();
        this.loadTheModel();
        this.startAnimationLoop();
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
        window.cancelAnimationFrame(this.requestID);
        this.controls.dispose();
    }

    // Standard scene setup in Three.js. Check "Creating a scene" manual for more information
    // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
    sceneSetup = () => {
        // get container dimensions and use them for scene sizing
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            0.8, // fov = field of view / How big is the object, the smaller the larger
            width / height, // aspect ratio
            1, // near plane
            1000 // far plane
        );
        this.camera.position.z = 500; // is used here to set some distance from a cube that is located at z = 0
        // OrbitControls allow a camera to orbit around the object
        // https://threejs.org/docs/#examples/controls/OrbitControls
        this.controls = new OrbitControls( this.camera, this.mount );
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( width, height );
        this.mount.appendChild( this.renderer.domElement ); // mount using React ref
    };

    // Code below is taken from Three.js OBJ Loader example
    // https://threejs.org/docs/#examples/en/loaders/OBJLoader
    loadTheModel = () => {
        // instantiate a loader
        const loader = new OBJLoader();

        // load a resource
        loader.load(
            // resource URL relative to the /public/index.html of the app
            'https://sayholo.s3.us-east-2.amazonaws.com/sayholo.obj',
            // called when resource is loaded
            ( object ) => {
                this.scene.add( object );
                // get the newly added object by name specified in the OBJ model (that is Elephant_4 in my case)
                // you can always set console.log(this.scene) and check its children to know the name of a model
                const sayholo = this.scene.getObjectByName("esp32_cam");
                // change some custom props of the element: placement, color, rotation, anything that should be
                // done once the model was loaded and ready for display
                sayholo.position.set(0, -2.5, 0 );
                sayholo.material.color.set(0xfffff);
                //sayholo.rotation.x = 23.5;
                sayholo.rotateX(110);

                // make this element available inside of the whole component to do any animation later
                this.model = sayholo;
            },
            // called when loading is in progresses
             ( xhr ) => {

                const loadingPercentage = Math.ceil(xhr.loaded / xhr.total * 100);
                console.log( ( loadingPercentage ) + '% loaded' );

                // update parent react component to display loading percentage
                this.props.onProgress(loadingPercentage);
            },
            // called when loading has errors
             ( error ) => {

                console.log( 'An error happened:' + error );

            }
        );
        loader.load(
            // resource URL relative to the /public/index.html of the app
            'https://sayholo.s3.us-east-2.amazonaws.com/sayholo1.obj',
            // called when resource is loaded
            ( object ) => {
                this.scene.add( object );
                // get the newly added object by name specified in the OBJ model (that is Elephant_4 in my case)
                // you can always set console.log(this.scene) and check its children to know the name of a model
                const sayholo = this.scene.getObjectByName("esp32_cam_1");
                // change some custom props of the element: placement, color, rotation, anything that should be
                // done once the model was loaded and ready for display
                sayholo.position.set(2.5, 0, 0 );
                sayholo.material.color.set(0xfffff);
                //sayholo.rotation.y = 0.03;
                sayholo.rotateZ(11);

                // make this element available inside of the whole component to do any animation later
                this.model1 = sayholo;
            },
            // called when loading is in progresses
             ( xhr ) => {

                const loadingPercentage = Math.ceil(xhr.loaded / xhr.total * 100);
                console.log( ( loadingPercentage ) + '% loaded' );

                // update parent react component to display loading percentage
                this.props.onProgress(loadingPercentage);
            },
            // called when loading has errors
             ( error ) => {

                console.log( 'An error happened:' + error );

            }
        );
        loader.load(
            // resource URL relative to the /public/index.html of the app
            'https://sayholo.s3.us-east-2.amazonaws.com/sayholo2.obj',
            // called when resource is loaded
            ( object ) => {
                this.scene.add( object );
                // get the newly added object by name specified in the OBJ model (that is Elephant_4 in my case)
                // you can always set console.log(this.scene) and check its children to know the name of a model
                const sayholo = this.scene.getObjectByName("esp32_cam_2");
                // change some custom props of the element: placement, color, rotation, anything that should be
                // done once the model was loaded and ready for display
                sayholo.position.set(-2.5, 0, 0 );
                sayholo.material.color.set(0xfffff);
                //sayholo.rotation.y = 0.03;
                sayholo.rotateZ(-11);

                // make this element available inside of the whole component to do any animation later
                this.model2 = sayholo;
            },
            // called when loading is in progresses
             ( xhr ) => {

                const loadingPercentage = Math.ceil(xhr.loaded / xhr.total * 100);
                console.log( ( loadingPercentage ) + '% loaded' );

                // update parent react component to display loading percentage
                this.props.onProgress(loadingPercentage);
            },
            // called when loading has errors
             ( error ) => {

                console.log( 'An error happened:' + error );

            }
        );
        loader.load(
            // resource URL relative to the /public/index.html of the app
            'https://sayholo.s3.us-east-2.amazonaws.com/sayholo3.obj',
            // called when resource is loaded
            ( object ) => {
                this.scene.add( object );
                // get the newly added object by name specified in the OBJ model (that is Elephant_4 in my case)
                // you can always set console.log(this.scene) and check its children to know the name of a model
                const sayholo = this.scene.getObjectByName("esp32_cam_3");
                // change some custom props of the element: placement, color, rotation, anything that should be
                // done once the model was loaded and ready for display
                sayholo.position.set(0, 2.5, 0 );
                sayholo.material.color.set(0xfffff);
                sayholo.rotation.y = 0.03;

                // make this element available inside of the whole component to do any animation later
                this.model3 = sayholo;
            },
            // called when loading is in progresses
             ( xhr ) => {

                const loadingPercentage = Math.ceil(xhr.loaded / xhr.total * 100);
                console.log( ( loadingPercentage ) + '% loaded' );

                // update parent react component to display loading percentage
                this.props.onProgress(loadingPercentage);
            },
            // called when loading has errors
             ( error ) => {

                console.log( 'An error happened:' + error );

            }
        );
    };

    // adding some lights to the scene
    addLights = () => {
        const lights = [];

        // set color and intensity of lights
        lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

        // place some lights around the scene for best looks and feel
        lights[ 0 ].position.set( 0, 2000, 0 );
        lights[ 1 ].position.set( 1000, 2000, 1000 );
        lights[ 2 ].position.set( - 1000, - 2000, - 1000 );

        this.scene.add( lights[ 0 ] );
        this.scene.add( lights[ 1 ] );
        this.scene.add( lights[ 2 ] );
    };

    startAnimationLoop = () => {
        // slowly rotate an object
        if (this.model) this.model.rotation.y += 0.01;
        if (this.model1) this.model1.rotation.x += 0.01;
        if (this.model2) this.model2.rotation.x += 0.01;
        if (this.model3) this.model3.rotation.y += 0.01;
        this.renderer.render( this.scene, this.camera );

        // The window.requestAnimationFrame() method tells the browser that you wish to perform
        // an animation and requests that the browser call a specified function
        // to update an animation before the next repaint
        this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    };

    handleWindowResize = () => {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        this.renderer.setSize( width, height );
        this.camera.aspect = width / height;

        // Note that after making changes to most of camera properties you have to call
        // .updateProjectionMatrix for the changes to take effect.
        this.camera.updateProjectionMatrix();
    };

    render() {
        return <div style={style} ref={ref => (this.mount = ref)} />;
    }
}

class Container extends React.Component {
    state = {isMounted: true};

    render() {
        const {isMounted = true, loadingPercentage = 0} = this.state;
        return (
            <>
                {/* <button onClick={() => this.setState(state => ({isMounted: !state.isMounted}))}>
                    {isMounted ? "Unmount" : "Mount"}
                </button> */}<br></br><br></br><br></br><br></br><br></br>
                {isMounted && <App onProgress={loadingPercentage => this.setState({ loadingPercentage })} />}
                {/* {isMounted && loadingPercentage === 100 && <div>Scroll to zoom, drag to rotate</div>}
                {isMounted && loadingPercentage !== 100 && <div>Loading Model: {loadingPercentage}%</div>} */}
            </>
        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Container />, rootElement);