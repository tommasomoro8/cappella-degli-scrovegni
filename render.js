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


/*Points*/
var points = [];
const geometry = new THREE.SphereGeometry( 10, 50, 50 );
var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );


const sphere1 = new THREE.Mesh( geometry, material );
sphere1.position.x = 325; sphere1.position.y = 610; sphere1.position.z = -600;
const to1 = {x: -1.749715823672447, y: 16.60824317257341, z: 3.230244597549133}

const sphere2 = new THREE.Mesh( geometry, material );
sphere2.position.x = 325; sphere2.position.y = 610; sphere2.position.z = -375;
const to2 = {x: -2.026269597868586, y: 16.07215431797782, z: 2.3380033821560606}

const sphere3 = new THREE.Mesh( geometry, material );
sphere3.position.x = 325; sphere3.position.y = 610; sphere3.position.z = -125;
const to3 = {x: -2.2574888505706165, y: 15.623944689663112, z: 0.8682649425271601}

const sphere4 = new THREE.Mesh( geometry, material );
sphere4.position.x = 325; sphere4.position.y = 610; sphere4.position.z = 140;
const to4 = {x: -2.248879166470853, y: 15.640634231148807, z: -0.9687479486335986}

const sphere5 = new THREE.Mesh( geometry, material );
sphere5.position.x = 325; sphere5.position.y = 610; sphere5.position.z = 400;
const to5 = {x: -1.9964214617362295, y: 16.130013781865156, z: -2.457134106752282}

const sphere6 = new THREE.Mesh( geometry, material );
sphere6.position.x = 325; sphere6.position.y = 610; sphere6.position.z = 650;
const to6 = {x: -1.6895717140616973, y: 16.724830215818866, z: -3.379143428123393}

const sphere7 = new THREE.Mesh( geometry, material );
sphere7.position.x = 325; sphere7.position.y = 410; sphere7.position.z = -600;
const to7 = {x: -2.0147509518800417, y: 17.334329509820254, z: 3.719540218855462}

const sphere8 = new THREE.Mesh( geometry, material );
sphere8.position.x = 325; sphere8.position.y = 410; sphere8.position.z = -375;
const to8 = {x: -2.4747946591371757, y: 16.725656297141583, z: 2.8555322990044334}

const sphere9 = new THREE.Mesh( geometry, material );
sphere9.position.x = 325; sphere9.position.y = 400; sphere9.position.z = -125;
const to9 = {x: -2.9785193227432614, y: 16.150836567531783, z: 1.1455843549012543}

const sphere10 = new THREE.Mesh( geometry, material );
sphere10.position.x = 325; sphere10.position.y = 400; sphere10.position.z = 140;
const to10 = {x: -2.9588278500390315, y: 16.17628400918033, z: -1.274571996939891}

const sphere11 = new THREE.Mesh( geometry, material );
sphere11.position.x = 325; sphere11.position.y = 410; sphere11.position.z = 375;
const to11 = {x: -2.474794659137176, y: 16.725656297141583, z: -2.855532299004433}

const sphere12 = new THREE.Mesh( geometry, material );
sphere12.position.x = 325; sphere12.position.y = 410; sphere12.position.z = 630;
const to12 = {x: -1.959930647979294, y: 17.406860988827397, z: -3.79925017915986}

const sphere13 = new THREE.Mesh( geometry, material );
sphere13.position.x = 325; sphere13.position.y = 250; sphere13.position.z = -600;
const to13 = {x: -2.2143712316863167, y: 18.160368515214444, z: 4.088069966190123}

const sphere14 = new THREE.Mesh( geometry, material );
sphere14.position.x = 325; sphere14.position.y = 250; sphere14.position.z = -375;
const to14 = {x: -2.8764441161900143, y: 17.61033873424214, z: 3.3189739802192473}

const sphere15 = new THREE.Mesh( geometry, material );
sphere15.position.x = 325; sphere15.position.y = 225; sphere15.position.z = -125;
const to15 = {x: -3.8166682174236928, y: 17.122819343788294, z: 1.4679493143937279}

const sphere16 = new THREE.Mesh( geometry, material );
sphere16.position.x = 325; sphere16.position.y = 225; sphere16.position.z = 130;
const to16 = {x: -3.8033163173191906, y: 17.13288462232861, z: -1.521326526927677}

const sphere17 = new THREE.Mesh( geometry, material );
sphere17.position.x = 325; sphere17.position.y = 225; sphere17.position.z = 400;
const to17 = {x: -2.8475923927292937, y: 17.853353427019456, z: -3.5047290987437454}

const sphere18 = new THREE.Mesh( geometry, material );
sphere18.position.x = 325; sphere18.position.y = 225; sphere18.position.z = 630;
const to18 = {x: -2.166570376789649, y: 18.36673925442011, z: -4.199813345776855}

const sphere19 = new THREE.Mesh( geometry, material );
sphere19.position.x = 325; sphere19.position.y = 85; sphere19.position.z = -745;
const to19 = {x: -1.9827765472168313, y: 19.3594106539761, z: 4.545133931312429}

const sphere20 = new THREE.Mesh( geometry, material );
sphere20.position.x = 325; sphere20.position.y = 75; sphere20.position.z = -510;
const to20 = {x: -2.6544988684926114, y: 19.224069561517545, z: 4.165521301326867}

const sphere21 = new THREE.Mesh( geometry, material );
sphere21.position.x = 325; sphere21.position.y = 75; sphere21.position.z = -250;
const to21 = {x: -3.8608487379982286, y: 18.871444215046672, z: 2.969883644614022}

const sphere22 = new THREE.Mesh( geometry, material );
sphere22.position.x = 325; sphere22.position.y = 75; sphere22.position.z = 0;
const to22 = {x: -4.799172228377261, y: 18.597165040935877, z: 2.9386454540195414e-16}

const sphere23 = new THREE.Mesh( geometry, material );
sphere23.position.x = 325; sphere23.position.y = 75; sphere23.position.z = 260;
const to23 = {x: -3.8064453316841598, y: 18.887346749200013, z: -3.0451562653473285}

const sphere24 = new THREE.Mesh( geometry, material );
sphere24.position.x = 325; sphere24.position.y = 75; sphere24.position.z = 520;
const to24 = {x: -2.6187545896038746, y: 19.234517889192713, z: -4.190007343366198}

const sphere25 = new THREE.Mesh( geometry, material );
sphere25.position.x = 325; sphere25.position.y = 75; sphere25.position.z = 650;
const to25 = {x: -2.2172036010749148, y: 19.35189433199349, z: -4.434407202149828}

const sphere26 = new THREE.Mesh( geometry, material );
sphere26.position.x = 240; sphere26.position.y = 390; sphere26.position.z = 775;
const to26 = {x: -1.3200968656614067, y: 17.744834521161764, z: -4.262812795364962}

const sphere27 = new THREE.Mesh( geometry, material );
sphere27.position.x = -240; sphere27.position.y = 390; sphere27.position.z = 775;
const to27 = {x: 1.3200968656614067, y: 17.744834521161764, z: -4.262812795364962}

const sphere28 = new THREE.Mesh( geometry, material );
sphere28.position.x = 0; sphere28.position.y = 600; sphere28.position.z = 600;
const to28 = {x: 4.2582281263301025e-16, y: 16.406989291167044, z: -3.4771071375802776}

const sphere29 = new THREE.Mesh( geometry, material );
sphere29.position.x = -240; sphere29.position.y = 540; sphere29.position.z = 775;
const to29 = {x: 1.2172708232538314, y: 17.159701412407724, z: -3.930770366757166}

const sphere30 = new THREE.Mesh( geometry, material );
sphere30.position.x = 5; sphere30.position.y = 300; sphere30.position.z = -600;
const to30 = {x: -0.03676371206706406, y: 17.6471224277079, z: 4.411645448047687}

const sphere31 = new THREE.Mesh( geometry, material );
sphere31.position.x = -325; sphere31.position.y = 88; sphere31.position.z = -750;
const to31 = {x: 1.9709077576861795, y: 19.345052191291977, z: 4.548248671583491}

const sphere32 = new THREE.Mesh( geometry, material );
sphere32.position.x = -325; sphere32.position.y = 75; sphere32.position.z = -505;
const to32 = {x: 2.6726576039120125, y: 19.218761623471874, z: 4.152898738386358}

const sphere33 = new THREE.Mesh( geometry, material );
sphere33.position.x = -325; sphere33.position.y = 75; sphere33.position.z = -250;
const to33 = {x: 3.8608487379982286, y: 18.871444215046672, z: 2.969883644614022}

const sphere34 = new THREE.Mesh( geometry, material );
sphere34.position.x = -325; sphere34.position.y = 75; sphere34.position.z = 5;
const to34 = {x: 4.798649072303501, y: 18.597317963480513, z: -0.07382537034313162}

const sphere35 = new THREE.Mesh( geometry, material );
sphere35.position.x = -325; sphere35.position.y = 75; sphere35.position.z = 260;
const to35 = {x: 3.8064453316841598, y: 18.887346749200013, z: -3.0451562653473285}

const sphere36 = new THREE.Mesh( geometry, material );
sphere36.position.x = -325; sphere36.position.y = 75; sphere36.position.z = 520;
const to36 = {x: 2.6187545896038746, y: 19.234517889192713, z: -4.190007343366198}

const sphere37 = new THREE.Mesh( geometry, material );
sphere37.position.x = -280; sphere37.position.y = 65; sphere37.position.z = 650;
const to37 = {x: 1.9640057467293035, y: 19.40378396974289, z: -4.559299054907314}

const sphere38 = new THREE.Mesh( geometry, material );
sphere38.position.x = -325; sphere38.position.y = 610; sphere38.position.z = -600;
const to38 = {x: 1.749715823672447, y: 16.60824317257341, z: 3.230244597549133}

const sphere39 = new THREE.Mesh( geometry, material );
sphere39.position.x = -325; sphere39.position.y = 610; sphere39.position.z = -375;
const to39 = {x: 2.026269597868586, y: 16.07215431797782, z: 2.3380033821560606}

const sphere40 = new THREE.Mesh( geometry, material );
sphere40.position.x = -325; sphere40.position.y = 610; sphere40.position.z = -125;
const to40 = {x: 2.2574888505706165, y: 15.623944689663112, z: 0.8682649425271601}

const sphere41 = new THREE.Mesh( geometry, material );
sphere41.position.x = -325; sphere41.position.y = 610; sphere41.position.z = 140;
const to41 = {x: 2.248879166470853, y: 15.640634231148807, z: -0.9687479486335986}

const sphere42 = new THREE.Mesh( geometry, material );
sphere42.position.x = -325; sphere42.position.y = 610; sphere42.position.z = 400;
const to42 = {x: 1.9964214617362295, y: 16.130013781865156, z: -2.457134106752282}

const sphere43 = new THREE.Mesh( geometry, material );
sphere43.position.x = -325; sphere43.position.y = 610; sphere43.position.z = 650;
const to43 = {x: 1.6895717140616973, y: 16.724830215818866, z: -3.379143428123393}

const sphere44 = new THREE.Mesh( geometry, material );
sphere44.position.x = -325; sphere44.position.y = 420; sphere44.position.z = -550;
const to44 = {x: 2.0948567838756746, y: 17.163886200291394, z: 3.5451422496357576}

const sphere45 = new THREE.Mesh( geometry, material );
sphere45.position.x = -325; sphere45.position.y = 420; sphere45.position.z = -270;
const to45 = {x: 2.663844940869425, y: 16.393563772361393, z: 2.2130404124145993}

const sphere46 = new THREE.Mesh( geometry, material );
sphere46.position.x = -325; sphere46.position.y = 420; sphere46.position.z = 0;
const to46 = {x: 2.970670116730335, y: 15.978169688118932, z: 1.8190108248882493e-16}

const sphere47 = new THREE.Mesh( geometry, material );
sphere47.position.x = -325; sphere47.position.y = 420; sphere47.position.z = 270;
const to47 = {x: 2.6638449408694247, y: 16.393563772361393, z: -2.2130404124145997}

const sphere48 = new THREE.Mesh( geometry, material );
sphere48.position.x = -325; sphere48.position.y = 420; sphere48.position.z = 550;
const to48 = {x: 2.0948567838756755, y: 17.163886200291394, z: -3.545142249635757}

const sphere49 = new THREE.Mesh( geometry, material );
sphere49.position.x = -325; sphere49.position.y = 255; sphere49.position.z = -550;
const to49 = {x: 2.3363767527411654, y: 18.023065824603627, z: 3.9538683507927415}

const sphere50 = new THREE.Mesh( geometry, material );
sphere50.position.x = -325; sphere50.position.y = 250; sphere50.position.z = -270;
const to50 = {x: 3.240776910034154, y: 17.307662259356242, z: 2.6923377406437585}

const sphere51 = new THREE.Mesh( geometry, material );
sphere51.position.x = -325; sphere51.position.y = 250; sphere51.position.z = 0;
const to51 = {x: 3.845951865259752, y: 16.804901527322667, z: 2.354966320732574e-16}

const sphere52 = new THREE.Mesh( geometry, material );
sphere52.position.x = -325; sphere52.position.y = 240; sphere52.position.z = 270;
const to52 = {x: 3.2754841387681117, y: 17.37961268898551, z: -2.721171438361201}

const sphere53 = new THREE.Mesh( geometry, material );
sphere53.position.x = -325; sphere53.position.y = 255; sphere53.position.z = 550;
const to53 = {x: 2.3363767527411663, y: 18.023065824603627, z: -3.953868350792741}

const sphere54 = new THREE.Mesh( geometry, material );
sphere54.position.x = 240; sphere54.position.y = 540; sphere54.position.z = 775;
const to54 = {x: -1.2172708232538314, y: 17.159701412407724, z: -3.930770366757166}

const sphere55 = new THREE.Mesh( geometry, material );
sphere55.position.x = -230; sphere55.position.y = 240; sphere55.position.z = 775;
const to55 = {x: 1.354230417716142, y: 18.46913083214697, z: -4.56316771186961}

const sphere56 = new THREE.Mesh( geometry, material );
sphere56.position.x = 230; sphere56.position.y = 240; sphere56.position.z = 775;
const to56 = {x: -1.354230417716142, y: 18.46913083214697, z: -4.56316771186961}

const sphere57 = new THREE.Mesh( geometry, material );
sphere57.position.x = 0; sphere57.position.y = 600; sphere57.position.z = 260;
const to57 = {x: 2.368017931076416e-16, y: 15.389028090857346, z: -1.9336333812533721}

const sphere58 = new THREE.Mesh( geometry, material );
sphere58.position.x = 5; sphere58.position.y = 600; sphere58.position.z = -255;
const to58 = {x: -0.03729059528958949, y: 15.375966184090906, z: 1.901820359769064}

for (var i = 1; i <= 58; i++) {
  points.push(eval("sphere" + i))
}


for (const point of points) {
  scene.add(point);
}


/*Events*/
const domEvents = new THREEx.DomEvents(camera, render.domElement)
for (let i = 0; i < points.length; i++) {
  domEvents.addEventListener(points[i], 'mouseover', () => indoor.style.cursor = "pointer")
  domEvents.addEventListener(points[i], 'mouseout', () => indoor.style.cursor = "default")
  domEvents.addEventListener(points[i], 'click', () => animationCamera(i + 1))
  domEvents.addEventListener(points[i], 'touchstart', () => animationCamera(i + 1))
}


/*Camera animation*/
function animationCamera(point) {
  controls.enabled = false

  var from = {x: camera.position.x, y: camera.position.y, z: camera.position.z};
  var to = eval("to" + point)

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