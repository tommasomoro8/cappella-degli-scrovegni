/*Scene*/
const sceneHome = new THREE.Scene();


/*Camera*/
const cameraHome = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000.0)
cameraHome.position.x = scrollData[0].posX;
cameraHome.position.y = scrollData[0].posY;
cameraHome.position.z = scrollData[0].posZ;
cameraHome.rotation.y = scrollData[0].rotY;


/*Render*/
const renderHome = new THREE.WebGLRenderer({
  canvas: document.getElementById("homeRender")
})
renderHome.setPixelRatio(window.devicePixelRatio);
renderHome.setSize(window.innerWidth, window.innerHeight);

new THREE.ColladaLoader().load("render.dae", (result) => {
  let chapel = result.scene
  chapel.rotation.z = 64
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
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25,24,24);
  const material = new THREE.MeshBasicMaterial( {color:0xffffff} )
  const star = new THREE.Mesh(geometry, material)

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1000))

  star.position.set(x, y, z)

  sceneHome.add(star)

}; Array(2000).fill().forEach(addStar)


/*Onscroll animations*/

var attualScene = 0, isMoving = false

function blockSroll(bool) {
  if (bool) document.body.style.overflowY = "hidden"
  else document.body.style.overflowY = "scroll"
}

const divHeight = 5000, gap = 0
var nextScene, startMs, inMs = 2000, callback

var coefficient;
function findCoefficient(what, start, finish) {
  return (scrollData[finish][what] - scrollData[start][what])/(inMs)
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

  document.documentElement["scrollTop"] = divHeight/2
}

function moveCamera() {
  const start = (attualScene < nextScene) ? attualScene : nextScene,
        finish = (attualScene > nextScene) ? attualScene : nextScene

  coefficient = {
    posX: findCoefficient("posX", start, finish),
    posY: findCoefficient("posY", start, finish),
    posZ: findCoefficient("posZ", start, finish),
    rotX: findCoefficient("rotX", start, finish),
    rotY: findCoefficient("rotY", start, finish)
  };

  startMs = undefined
  isMoving = true
  blockSroll(true)

  window.requestAnimationFrame(animateMoveCamera)

  callback = () => {
    attualScene = nextScene
    blockSroll(false)
    isMoving = false
  }
}

function animateMoveCamera(timestamp) {
  if (startMs == undefined) startMs = timestamp

  var ms = ((timestamp - startMs > inMs) ? inMs : timestamp - startMs) * ((attualScene < nextScene) ? 1 : -1)

  console.log(ms, nextScene, attualScene)

  cameraHome.position.x = ms * coefficient.posX + scrollData[attualScene].posX
  cameraHome.position.y = ms * coefficient.posY + scrollData[attualScene].posY
  cameraHome.position.z = ms * coefficient.posZ + scrollData[attualScene].posZ
  cameraHome.rotation.x = ms * coefficient.rotX + scrollData[attualScene].rotX
  cameraHome.rotation.y = ms * coefficient.rotY + scrollData[attualScene].rotY



  if (Math.abs(ms) >= inMs)
    callback()
  else
    window.requestAnimationFrame(animateMoveCamera)
}

//moveCamera(toScene, inTime, callback)

/*
const init = scrollData[0]
const ifnum = 1

function moveCamera(time) {
  if (time == 0) {
    isMoving = true
    blockSroll(true)
    console.log("iniziato")
  }
  time += 1
  cameraHome.position.x = time * coefficients[ifnum].posX + init.posX
  cameraHome.position.y = time * coefficients[ifnum].posY + init.posY
  cameraHome.position.z = time * coefficients[ifnum].posZ + init.posZ
  cameraHome.rotation.x = time * coefficients[ifnum].rotX + init.rotX
  cameraHome.rotation.y = time * coefficients[ifnum].rotY + init.rotY

  if (time < 200) {
    setTimeout(() => {
      moveCamera(time)
    }, 1);
  } else {
    isMoving = false
    console.log("finito")
    blockSroll(false)
  }
}

*/





/*
var scrollPercent = 0
var lastScrollPercent = 0

function moveCamera() {
  if (home.style.display == "none") return

  lastScrollPercent = scrollPercent

  const h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

  scrollPercent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

  if (scrollPercent >= 100)
    scrollPercent = scrollPercent/100*99.9999

  if (scrollPercent < 25) {
    var init = scrollData[0],
        scrollUsed = scrollPercent
  } else if (scrollPercent < 50) {
    var init = scrollData[1],
        scrollUsed = scrollPercent - 25
  } else if (scrollPercent < 75) {
    var init = scrollData[2],
        scrollUsed = scrollPercent - 50
  } else {
    var init = scrollData[3],
        scrollUsed = scrollPercent - 75
  }

  text("homeArrow", 0, 0.3)
  text("homeText1", -10, 3.28)
  text("homeText2", 16.7, 32)
  text("homeText3", 43.5, 56.2)
  text("homeText4", 72, 80)
  text("homeText5", 95, 200)

  var ifnum = Math.trunc(scrollPercent/25)

  
  //cameraHome.rotation.x = Math.pow(scrollUsed, 1/3)
  cameraHome.position.x = scrollUsed * coefficients[ifnum].posX + init.posX
  cameraHome.position.y = scrollUsed * coefficients[ifnum].posY + init.posY
  cameraHome.position.z = scrollUsed * coefficients[ifnum].posZ + init.posZ
  cameraHome.rotation.x = scrollUsed * coefficients[ifnum].rotX + init.rotX
  cameraHome.rotation.y = scrollUsed * coefficients[ifnum].rotY + init.rotY

}
document.body.onscroll = moveCamera

homeScroll.addEventListener('mousemove', checkHomePointer)
document.addEventListener('scroll', checkHomePointer)
homeScroll.addEventListener('click', () => {
  if (scrollPercent > 80.5) {
    goIndoor()
  }
})

function checkHomePointer() {
  if (scrollPercent > 80.5) {
    homeScroll.style.cursor = "pointer";
  } else {
    homeScroll.style.cursor = "default";
  }
}

document.body.onload = () => {
  homeText1.classList.add("fromtop")
  homeArrow.classList.add("fromtop")
}

function text(textId, scrollStart, scrollStop) {
  if (scrollStart >= scrollStop) {console.error(`Id: ${textId} --> scrollStart is bigger than scrollStop --> ${scrollStart} >= ${scrollStop}`); return}

  if (scrollPercent < scrollStart) {
    if (document.getElementById(textId).classList.contains("fromtop"))
      document.getElementById(textId).classList.remove("fromtop")
  } else if (scrollPercent >= scrollStart && scrollPercent <= scrollStop) {
    if (scrollPercent > lastScrollPercent) {
      if (!document.getElementById(textId).classList.contains("fromtop"))
        document.getElementById(textId).classList.add("fromtop")
    } else {
      if (document.getElementById(textId).classList.contains("frombottom"))
        document.getElementById(textId).classList.remove("frombottom")
    }
  } else if (scrollPercent > scrollStop) {
    if (!document.getElementById(textId).classList.contains("frombottom"))
      document.getElementById(textId).classList.add("frombottom")
  }
}
*/

/*Animate*/
function animateHome() {
  if (home.style.display == "none") return
  //TWEEN.update();
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

/*const delay = ms => new Promise(res => setTimeout(res, ms));

async function firstAnimation() {
  document.body.style.overflowY = "hidden"

  await delay(5000)

  var from = {x: scrollData[0].posX, y: scrollData[0].posY, z: scrollData[0].posZ}
  var to = {x: scrollData[0].posX, y: scrollData[0].posY, z: scrollData[0].posZ}

  new TWEEN.Tween(from)
    .to(to,3000)
    .easing(TWEEN.Easing.Exponential.Out)
    .onUpdate(function () {
      cameraHome.position.set(this.x, this.y, this.z);
    })
    .onComplete(function () {
      homeText1.classList.add("fromtop")
      homeArrow.classList.add("fromtop")
      document.body.style.overflowY = "scroll"
    })
    .start();
}
firstAnimation()*/