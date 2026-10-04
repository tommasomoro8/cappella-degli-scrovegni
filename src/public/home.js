const firstScene = 5

/*Scene*/
const sceneHome = new THREE.Scene();

/*Camera*/
var fov = 155

const cameraHome = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 0.1, 1000.0)
cameraHome.position.x = scrollData[firstScene].posX;
cameraHome.position.y = scrollData[firstScene].posY;
cameraHome.position.z = scrollData[firstScene].posZ;
cameraHome.rotation.y = scrollData[firstScene].rotY;


/*Render*/
const renderHome = new THREE.WebGLRenderer({
  canvas: document.getElementById("homeRender")
})
renderHome.setPixelRatio(window.devicePixelRatio);
renderHome.setSize(window.innerWidth, window.innerHeight);


new THREE.ColladaLoader().load("render.dae", (result) => {
  const chapel = result.scene
  chapel.rotation.z = 64
  //chapel.rotation.z = Math.PI/2
  sceneHome.add(chapel)
})


/*Light*/
const pointlight = new THREE.PointLight(0xffffff)
pointlight.position.set(35,35,35)
sceneHome.add(pointlight);

const ambientlight = new THREE.AmbientLight(0xffffff)
sceneHome.add(ambientlight);


/*Helpers*/
//const lightHelper = new THREE.PointLightHelper(pointlight); sceneHome.add(lightHelper);
const gridHelper = new THREE.GridHelper(50, 10); sceneHome.add(gridHelper);


/*Stars*/
var stars = []
for (var i = 0; i < 2000; i++) {
  const geometry = new THREE.SphereGeometry(0.25,24,24);
  const material = new THREE.MeshBasicMaterial( {color:0xffffff} )
  const star = new THREE.Mesh(geometry, material)

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1000))

  star.position.set(x, y, z)

  sceneHome.add(star)
  stars.push(star)
}


/*Click for indoor*/
var canGoIndoor = false

function checkHomePointer() {
  if (canGoIndoor) homeScroll.style.cursor = "pointer"
  else homeScroll.style.cursor = "default"
}

homeScroll.addEventListener('mousemove', checkHomePointer)
document.addEventListener('scroll', checkHomePointer)

homeScroll.addEventListener('click', () => {
  if (canGoIndoor) {
    goIndoor()
    canGoIndoor = false
  }
})


/*Onscroll animations*/

function y(x) {
  if (x < 0.00002) return 0
  return ( ( Math.cbrt( Math.sqrt(3) * Math.sqrt( 27*Math.pow(x, 2) - 540*x + 2704 ) + 9*x - 90 ) ) / (Math.cbrt(2)*Math.pow(3, 2/3)) ) - ( (Math.cbrt(2/3)) / ( Math.cbrt( Math.sqrt(3) * Math.sqrt( 27*Math.pow(x, 2) - 540*x + 2704 ) + 9*x - 90 ) ) ) + 2
  // inverse of y = (x-2)^3 + (x-2) + 10
}


function blockSroll(bool) {
  if (bool) document.body.style.overflowY = "hidden"
  else document.body.style.overflowY = "scroll"
}

const divHeight = 5000, gap = 0, inMs = 2000
var attualScene = firstScene, isMoving = true, nextScene = 0, startMs, callback, timeDistortion

var coefficient;
function findCoefficient(what, start, finish) {
  return (scrollData[finish][what] - scrollData[start][what])/(inMs)
}

var starsCoefficient
function findStarsCoefficient(start, finish) {
  if (start == 5 && finish == 0) return 0
  return (finish - start)/(inMs*2.5)
}


document.body.onscroll = () => {
  if (!isMoving) {
    nextScene = attualScene

    if (document.documentElement["scrollTop"] > divHeight/2 + gap && attualScene < 4)
      nextScene++
    else if (document.documentElement["scrollTop"] < divHeight/2 - gap && attualScene > 0)
      nextScene--

    if (nextScene != attualScene)
      moveCamera()
  }

  if (nextScene != 6) document.documentElement["scrollTop"] = divHeight/2
}

const textIds = ["homeText1", "homeText2", "homeText3", "homeText4", "homeText5"]

function moveCamera() {
  coefficient = {
    posX: findCoefficient("posX", attualScene, nextScene),
    posY: findCoefficient("posY", attualScene, nextScene),
    posZ: findCoefficient("posZ", attualScene, nextScene),
    rotX: findCoefficient("rotX", attualScene, nextScene),
    rotY: findCoefficient("rotY", attualScene, nextScene)
  };
  starsCoefficient = findStarsCoefficient(attualScene, nextScene)

  if (attualScene == 0 && !homeArrow.classList.contains("frombottom")) 
    homeArrow.classList.add("frombottom")

  startMs = undefined
  isMoving = true
  blockSroll(true)

  timeDistortion = (Math.abs(attualScene - nextScene) <= 1)

  if (attualScene < textIds.length)
    eval(textIds[attualScene]).classList.remove("appear")

  if (attualScene != 6 && nextScene != 6)
    setTimeout(() => eval(textIds[nextScene]).classList.add("appear"), (attualScene == 5) ? inMs : inMs-200)

  if (attualScene == 4)
    canGoIndoor = false

  checkHomePointer()


  callback = () => {
    if (nextScene == 4)
      canGoIndoor = true

    if (attualScene == 5) {
      homeOverlay.style.display = "none"
      homeArrow.classList.remove("frombottom")
    }
    
    if (nextScene == 0)
      homeArrow.classList.remove("frombottom")

    if (nextScene == 6) {
      fov = 75; camera.fov = fov; camera.updateProjectionMatrix()

      home.style.display = "none";
      contactsButton.style.display = "none";
      document.body.style.overflowY = "hidden";
      
      backHomeButton.style.display = "flex";
      indoor.style.display = "flex"
      animate()
      
      camera.position.set(0.021828348485616236, 19.182126291654217, -2.1431864408863794); controls.update();
      
      homeOverlay.style.transition = '1s'
      document.documentElement["scrollTop"] = 0
      homeOverlay.style.opacity = 0
      moveFov(65, 1000)

      setTimeout(() => {
        homeOverlay.style.display = "none"
        homeOverlay.style.transition = '2s'
      }, 800)
    }
      
    if (nextScene != 6){
      blockSroll(false)
      isMoving = false
    }
    
    attualScene = nextScene

    checkHomePointer()
  }

  window.requestAnimationFrame(animateMoveCamera)
}

function animateMoveCamera(timestamp) {
  if (startMs == undefined) startMs = timestamp

  const ms = (timestamp - startMs > inMs) ? inMs : timestamp - startMs,
        msMove = (timeDistortion) ? y(ms/2000*20)/4*2000 : ms

  cameraHome.position.x = msMove * coefficient.posX + scrollData[attualScene].posX
  cameraHome.position.y = msMove * coefficient.posY + scrollData[attualScene].posY
  cameraHome.position.z = msMove * coefficient.posZ + scrollData[attualScene].posZ
  cameraHome.rotation.x = msMove * coefficient.rotX + scrollData[attualScene].rotX
  cameraHome.rotation.y = msMove * coefficient.rotY + scrollData[attualScene].rotY

  stars.forEach((star) => star.position.y = ms * starsCoefficient + star.position.y)
  

  if (ms >= inMs)
    callback()
  else
    window.requestAnimationFrame(animateMoveCamera)
}

var fovCoeff, startMsFov, inMsFov, startFov

function moveFov(toFov, _inMsFov) {
  startFov = fov
  inMsFov = _inMsFov

  fovCoeff = (toFov - startFov)/(inMsFov)

  startMsFov = undefined

  window.requestAnimationFrame(animateMoveFov)
}

function animateMoveFov(timestamp) {
  if (startMsFov == undefined) startMsFov = timestamp

  const ms = (timestamp - startMsFov > inMsFov) ? inMsFov : timestamp - startMsFov

  fov = ms * fovCoeff + startFov
  if (home.style.display == "none") {
    camera.fov = fov
    camera.updateProjectionMatrix()
  } else {
    cameraHome.fov = fov
    cameraHome.updateProjectionMatrix()
  }

  if (ms < inMsFov)
    window.requestAnimationFrame(animateMoveFov)
}


/*Animate*/
function animateHome() {
  if (home.style.display == "none") return
  requestAnimationFrame(animateHome);
  renderHome.render(sceneHome, cameraHome);
}; animateHome();

function WindowResizeHome() {
  cameraHome.aspect = window.innerWidth / window.innerHeight;
  cameraHome.updateProjectionMatrix();
  renderHome.setSize(window.innerWidth, window.innerHeight);
}; WindowResizeHome();

window.addEventListener('resize', () => {
  WindowResizeHome();
}, false);