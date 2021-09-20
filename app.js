function preloadImages(callback) {
  var imagesLoaded = 0

  const images = ["cubemap/px.png", "cubemap/nx.png", "cubemap/py.png", "cubemap/ny.png", "cubemap/nz.png", "cubemap/pz.png"]
  for (const imageSrc of images) {
    const img = new Image()
    img.src = imageSrc
    img.onload = () => {
      imagesLoaded++
      animateProgressBar(imagesLoaded)
      if (imagesLoaded === 64) callback()
    }
  }

  for (var i = 1; i <= 58; i++) {
    const img = new Image()
    img.src = "img/" + i + ".png"
    img.onload =() => {
      imagesLoaded++
      animateProgressBar(imagesLoaded)
      if (imagesLoaded === 64) callback()
    }
  }
}

function animateProgressBar(imagesLoadedCount) {
  var progress = imagesLoadedCount / 64 * 100
  bar.style.width = progress + "%"
}

function goIndoor() {
  home.style.display = "none";
  contactsButton.style.display = "none";
  indoor.style.display = "flex";
  backHomeButton.style.display = "flex";
  camera.position.set(0.021828348485616236, 19.182126291654217, -2.1431864408863794); controls.update();
}

function goHome() {
  if (descriptionOpen) {
    closeDescription()
  };
  indoor.style.display = "none";
  backHomeButton.style.display = "none";
  //loadingView.style.display = "none";
  contactsButton.style.display = "flex";
  rightButton.style.display = "flex";
  home.style.display = "flex";
}

var language = "EN"

function changeLang() {
  stopAudio()
  if (language == "IT") {
    language = "EN";
    document.title = "The Scrovegni Chapel";
    img.alt = "Failed to load image"
  }
  else if (language == "EN") {
    language = "IT";
    document.title = "Cappella Degli Scrovegni";
    img.alt = "Impossibile caricare l'immagine"
  };
  langImg.src = "system/" + language + ".png";
  if (descriptionOpen) {
    openDescription(currentPoint)
  };
}
langButton.addEventListener('click', changeLang)

function changeMode(to) {
  switch (to) {
    case "toDark":
      lightMode.style.display = "none"
      darkMode.style.display = "flex"

      //description
      description.style.backgroundColor= "black";
      description.style.color = "#eeeeee"
      headingTitle.style.color = "#bbbbbb"
      headingSpace.style.color = "#bbbbbb"
      headingSubtitle.style.color = "#bbbbbb"

      break;

    case "toLight":
      darkMode.style.display = "none"
      lightMode.style.display = "flex"

      //description
      description.style.backgroundColor= "#ffffff";
      description.style.color = "black"
      headingTitle.style.color = "#333333"
      headingSpace.style.color = "#333333"
      headingSubtitle.style.color = "#333333"

      break;
  }
}

function checkTime() {
  const date = new Date().getHours()
  if (date > 20 || date < 6) changeMode("toDark")
  else changeMode("toLight")

  setTimeout(checkTime, 60000); //1 minute
}
checkTime()

var currentPoint
var descriptionOpen = false

var audio

function startAudio() {
  play.style.display = "none"
  stopp.style.display = "flex"
  if (language == "IT") {
    console.error("nessuna traccia audio presente")
    stopAudio()
    return
  } else {
    audio = new Audio("audio/" + (currentPoint+1)+ "EN.m4a")
  }
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
  text.scrollTop = 0;
}

function updateDescription(point) {
  img.src = "img/" + (point+1)+ ".png"
  headingTitle.innerHTML = data[point].title
  headingSubtitle.innerHTML = data[point].subtitle
  text.innerHTML = data[point][language].text
  //autore testo  data[point][language].textAuthor
  //autore audio  data[point][language].audioAuthor
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