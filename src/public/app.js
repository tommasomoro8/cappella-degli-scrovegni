function preloadImages(callback) {
  var imagesLoaded = 0

  const images = ["cubemap/px.png", "cubemap/nx.png", "cubemap/py.png", "cubemap/ny.png", "cubemap/nz.png", "cubemap/pz.png"]
  for (const imageSrc of images) {
    const img = new Image()
    img.src = imageSrc
    img.onload = () => {
      imagesLoaded++
      if (imagesLoaded === 64) callback()
    }
  }

  for (var i = 1; i <= 58; i++) {
    const img = new Image()
    img.src = "img/" + i + ".png"
    img.onload =() => {
      imagesLoaded++
      if (imagesLoaded === 64) callback()
    }
  }
}

function goIndoor() {
  nextScene = 6
  moveCamera()
  moveFov(165, 2000)
  homeOverlay.style.display = "flex"
  setTimeout(() => homeOverlay.style.opacity = 1, 0)
}

function goHome() {
  if (descriptionOpen) closeDescription()

  moveFov(75, 1000)
  homeOverlay.style.transition = '1s'
  homeOverlay.style.display = "flex"
  setTimeout(() => homeOverlay.style.opacity = 1, 0)

  setTimeout(() => {
    homeOverlay.style.transition = '2s'

    indoor.style.display = "none";
    backHomeButton.style.display = "none";
    contactsButton.style.display = "flex";
    rightButton.style.display = "flex";
    home.style.display = "flex";

    animateHome()
    attualScene = 7
    nextScene = 0
    moveCamera()
    homeOverlay.style.display = "flex"
    homeOverlay.style.opacity = 0

    setTimeout(() => {
      homeOverlay.style.display = "none"
      homeText1.classList.add("appear")
      document.body.style.overflowY = "scroll"
      blockSroll(false)
      isMoving = false
      homeOverlay.style.transition = '2s'
    }, 2000)
  }, 1000)
}

var language = "EN"

function changeLang() {
  stopAudio()
  if (language == "IT") {
    language = "EN";
    if (document.title != "Loading...")
      document.title = "The Scrovegni Chapel";
    img.alt = "Failed to load image"
    homeArrowText.innerText = "Scroll"

    homeText1.innerHTML = "Scrovegni<br>&nbsp;&nbsp;Chapel"
    homeText2.innerHTML = "Frescoed<br>&nbsp;&nbsp;by Giotto"
    homeText3.innerHTML = "Built in<br>&nbsp;&nbsp;Padua in 1300"
    homeText4.innerHTML = "UNESCO World&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;Heritage Site&nbsp;&nbsp;&nbsp;&nbsp;"
    homeText5.innerHTML = "Click to<br>&nbsp;&nbsp;explore inside"

  } else if (language == "EN") {
    language = "IT";
    if (document.title != "Loading...")
      document.title = "Cappella Degli Scrovegni";
    img.alt = "Impossibile caricare l'immagine"
    homeArrowText.innerText = "Scorri"

    homeText1.innerHTML = "Cappella<br>&nbsp;&nbsp;degli Scrovegni"
    homeText2.innerHTML = "Affrescata<br>&nbsp;&nbsp;da Giotto"
    homeText3.innerHTML = "Costruita a<br>&nbsp;&nbsp;Padova nel 1300"
    homeText4.innerHTML = "Patrimonio<br>&nbsp;&nbsp;UNESCO dal 2021"
    homeText5.innerHTML = "Clicca per<br>&nbsp;&nbsp;esplorare l'interno"

  }

  changeFormLang()

  langImg.src = "system/" + language + ".png";
  if (descriptionOpen) {
    openDescription(currentPoint)
  };

}
langButton.addEventListener('click', changeLang)

changeLang()

function changeMode(to) {
  switch (to) {
    case "toDark":
      lightMode.style.display = "none"
      darkMode.style.display = "flex"

      //description
      description.style.backgroundColor= "black";
      description.style.color = "#eeeeee"
      headingTitle.style.color = "#bbbbbb"
      headingSubtitle.style.color = "#bbbbbb"

      break;

    case "toLight":
      darkMode.style.display = "none"
      lightMode.style.display = "flex"

      //description
      description.style.backgroundColor= "#ffffff";
      description.style.color = "black"
      headingTitle.style.color = "#333333"
      headingSubtitle.style.color = "#333333"

      break;
  }
}

function checkTime() {
  const date = new Date().getHours()
  if (date > 20 || date < 6) changeMode("toDark")
  else changeMode("toLight")

  setTimeout(checkTime, 60000); //1 minute
}; checkTime()

var currentPoint
var descriptionOpen = false

var audio

function startAudio() {
  play.style.display = "none"
  stopp.style.display = "flex"
  if (language == "IT")
    audio = new Audio("audio/" + (currentPoint+1)+ ".m4a")
  else
    audio = new Audio("audio/" + (currentPoint+1)+ "EN.m4a")
  audio.play()
  audio.addEventListener('ended', stopAudio)
}

function stopAudio() {
  stopp.style.display = "none"
  play.style.display = "flex"
  if (audio != undefined && !audio.paused) {
    audio.pause()
  }
}

play.addEventListener('click', startAudio)
stopp.addEventListener('click', stopAudio)

function openDescription(point) {
  descriptionOpen = true;
  currentPoint = point;

  updateDescription(point)

  openModal(description, backDescription)

  bodyDesc.scrollTop = 0;
  document.getElementById("text").scrollTop = 0;
}

function updateDescription(point) {
  img.src = "img/" + (point+1)+ ".png"
  headingTitle.innerHTML = data[point].title
  headingSubtitle.innerHTML = data[point].subtitle
  document.getElementById("text").innerHTML = data[point][language].text
  //document.getElementById("autore-descrizione").innerText = data[point][language].textAuthor
  //document.getElementById("autore-audio").innerText = data[point][language].audioAuthor
}

function closeDescription() {
  stopAudio()
  closeModal(description, backDescription)

  descriptionOpen = false;
  controls.enabled = true;
}

function openModal(modal, overlay) {
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal, overlay) {
  modal.classList.remove('active')
  overlay.classList.remove('active')
}