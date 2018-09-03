
const container = document.getElementById("graphicContainer");
const scene = new THREE.Scene();
const HEIGHT = container.clientHeight;
const WIDTH = getWidth();
// Create a renderer with Antialiasing
const renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});

// Configure renderer clear color
renderer.setClearColor( 0x000000, 0 );

// Configure renderer size
renderer.setSize( WIDTH, HEIGHT );

function getWidth () {
    if (window.innerWidth>=window.innerHeight) {
        return window.innerWidth;
    }
    else{
        return window.innerWidth;
    }
}

window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

// Create a basic perspective camera
const camera = new THREE.PerspectiveCamera( 10, WIDTH/HEIGHT, 0.1, 1000 );
camera.position.z = 30;



// Append Renderer to DOM
container.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic material
var geometry = new THREE.BoxGeometry( 2.5, 2.5, 2.5 );
var material = new THREE.MeshNormalMaterial( { color: "#ec9d3e" } );
var cube = new THREE.Mesh( geometry, material );
cube.receiveShadow = true;
cube.castShadow = true;
cube.position.x += 2;
cube.position.y += 0.5;
cube.rotation.x -= 2.5;

// Add cube to Scene
scene.add( cube );

const light = new THREE.AmbientLight(0xffffff,0.5);
scene.add(light);
var light2 = new THREE.DirectionalLight( 0xffffff );
light2.position.set( 0, 1, 1 ).normalize();
scene.add(light2);
// Render Loop
var render = function () {
    requestAnimationFrame( render );

    // cube.rotation.x += 0.01;
    cube.rotation.y += 0.005;

    // Render the scene
    renderer.render(scene, camera);
};


render();

// container.appendChild(renderer.domElement);
