/*Scene*/
const sceneHome = new THREE.Scene();


/*Camera*/
const cameraHome = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000.0)
cameraHome.position.setX(scrollData[0].posX);
cameraHome.position.setY(scrollData[0].posY);
cameraHome.position.setZ(scrollData[0].posZ);
cameraHome.rotation.y = scrollData[0].rotY;


/*Render*/
const renderHome = new THREE.WebGLRenderer({
  canvas: document.getElementById("homeRender")
});
renderHome.setPixelRatio(window.devicePixelRatio);
renderHome.setSize(window.innerWidth, window.innerHeight);


/*Geometries*/
new THREE.ColladaLoader().load("render.dae", (result) => {
  let chapel = result.scene
  chapel.rotation.z = 64
  sceneHome.add(chapel)
});


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

var coefficients = []

function findCoefficient(what, i) {
  return (scrollData[i+1][what] - scrollData[i][what])/(25)
}

for (let i = 0; i < scrollData.length-1; i++) {
  coefficients.push({
    posX: findCoefficient("posX", i),
    posY: findCoefficient("posY", i),
    posZ: findCoefficient("posZ", i),
    rotX: findCoefficient("rotX", i),
    rotY: findCoefficient("rotY", i)
  })
}

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
  text("text1", 0, 3.28)
  text("text2", 16.7, 32)
  text("text3", 43.5, 56.2)
  text("text4", 72, 80)
  text("text5", 95, 100)

  var ifnum = Math.trunc(scrollPercent/25)
  
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
  if (scrollPercent > 80.5 /* && ha finito di caricare */) {
    goIndoor()
  }
})

function checkHomePointer() {
  if (scrollPercent > 80.5 /* && ha finito di caricare */) {
    homeScroll.style.cursor = "pointer";
  } else {
    homeScroll.style.cursor = "default";
  }
}

document.body.onload = () => {
  text1.classList.add("fromtop")
  homeArrow.classList.add("fromtop")
}

function text(textId, scrollStart, scrollStop) {
  if (scrollStart >= scrollStop) {console.error("Id: " + textId + " --> scrollStart is bigger than scrollStop --> " + scrollStart + " >= " + scrollStop); return}

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