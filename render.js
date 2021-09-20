/*Render*/
const render = new THREE.WebGLRenderer({
  antialias: true,
});
render.shadowMap.enabled = true;
render.shadowMap.type = THREE.PCFSoftShadowMap;
render.setPixelRatio(window.devicePixelRatio);
render.setSize(window.innerWidth, window.innerHeight);

document.getElementById("indoor").appendChild(render.domElement);

window.addEventListener('resize', () => {
  WindowResize();
}, false);

/*Camera*/
const fov = 60;
const aspect = 1920 / 1080;
const near = 1.0;
const far = 1000.0;
var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0.021828348485616236, 19.182126291654217, -2.1431864408863794);

/*Scene*/
var scene = new THREE.Scene();  

const loader = new THREE.CubeTextureLoader();
const texture = loader.load([
  './cubemap/px.png',
  './cubemap/nx.png',
  './cubemap/py.png',
  './cubemap/ny.png',
  './cubemap/nz.png',
  './cubemap/pz.png',
]);
scene.background = texture;


/*Light*/
var light = new THREE.AmbientLight(0x101010);
scene.add(light);


/*Controls*/
const controls = new THREE.OrbitControls(camera, render.domElement);
controls.target.set(0, 20, 0);
controls.update();
controls.enableZoom = false;
controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.rotateSpeed = -0.2;
controls.maxDistance = 5;


/*Animate*/
function animate() {
  TWEEN.update();
  requestAnimationFrame(animate);
  render.render(scene, camera);
  controls.update();
}
animate();

function WindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  render.setSize(window.innerWidth, window.innerHeight);
}
WindowResize();


/*Points and events*/
const geometry = new THREE.SphereGeometry( 10, 50, 50 );
const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
const domEvents = new THREEx.DomEvents(camera, render.domElement)

for (let i = 0; i < data.length; i++) {
  const sphere = new THREE.Mesh(geometry, material)

  sphere.position.x = data[i].position.x
  sphere.position.y = data[i].position.y
  sphere.position.z = data[i].position.z
  
  scene.add(sphere)

  domEvents.addEventListener(sphere, 'mouseover', () => indoor.style.cursor = "pointer")
  domEvents.addEventListener(sphere, 'mouseout', () => indoor.style.cursor = "default")
  domEvents.addEventListener(sphere, 'click', () => animationCamera(i))
  domEvents.addEventListener(sphere, 'touchstart', () => animationCamera(i))
}


/*Camera animation*/
function animationCamera(point) {
  controls.enabled = false

  var from = {x: camera.position.x, y: camera.position.y, z: camera.position.z}
  var to = data[point].to

  if (from.x == to.x && from.y == to.y && from.z == to.z) {
    openDescription(point)
    return
  }

  new TWEEN.Tween(from)
    .to(to,1000)
    .easing(TWEEN.Easing.Exponential.Out)
    .onUpdate(function () {
      camera.position.set(this.x, this.y, this.z);
    })
    .onComplete(function () {
      openDescription(point)
    })
    .start();
}