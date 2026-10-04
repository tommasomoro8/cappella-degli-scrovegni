/*Scene*/
const scene = new THREE.Scene();  

scene.background = new THREE.CubeTextureLoader().load([
  './cubemap/px.png',
  './cubemap/nx.png',
  './cubemap/py.png',
  './cubemap/ny.png',
  './cubemap/nz.png',
  './cubemap/pz.png',
]);


/*Camera*/
const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 1.0, 1000.0);

camera.position.set(0.021828348485616236, 19.182126291654217, -2.1431864408863794);


/*Render*/
const render = new THREE.WebGLRenderer({
  antialias: true
});
render.shadowMap.enabled = true;
render.shadowMap.type = THREE.PCFSoftShadowMap;
render.setPixelRatio(window.devicePixelRatio);
render.setSize(window.innerWidth, window.innerHeight);

document.getElementById("indoor").appendChild(render.domElement);


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
  if (indoor.style.display == "" || indoor.style.display == "none") return
  TWEEN.update();
  render.render(scene, camera);
  controls.update();
  window.requestAnimationFrame(animate);
}; animate();

function WindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  render.setSize(window.innerWidth, window.innerHeight);
}; WindowResize();

window.addEventListener('resize', () => {
  WindowResize();
}, false);


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
  domEvents.addEventListener(sphere, 'click', () => {
    animationCamera(i)
    indoor.style.cursor = "default"
  })
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