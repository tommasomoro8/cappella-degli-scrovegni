const bottoniValutazioneSito = document.querySelectorAll('[data-domande-sito]')
const messaggioDellUtente = document.getElementById('messaggio-utente')
const eMailUtente = document.getElementById('e-mail-holder')

bottoniValutazioneSito.forEach(button => button.addEventListener('click', cambioVal))

let valSito = -1

function cambioVal(val) {
    valSito = eval(val.target.id.charAt(0))
    for(let i = 0; i < bottoniValutazioneSito.length; i++) {
        bottoniValutazioneSito[i].classList.remove('button-active')
    }

    bottoniValutazioneSito[valSito - 1].classList.add('button-active')
}

const cliccaPerForm = document.getElementById('segnala-un-problema')
const cliccaPerFeedback = document.getElementById('bottone-feedback')
const parteCrediti = document.getElementById('parte-crediti')
const parteForm = document.getElementById('form-testo')
const parteFeedback = document.getElementById('feedback-form')
const exitAll = document.getElementById('exit-p')

cliccaPerForm.addEventListener('click', () => {
    cliccaPerForm.classList.add('selected')
    cliccaPerFeedback.classList.remove('selected')

    parteForm.style.transform = 'translateX(0%)'
    parteFeedback.style.transform = 'translateX(100%)'
    exitAll.style.transform = 'translateX(100%)'

    imageServer.src = ''
    let ita
    language == 'IT' ? ita = true : ita = false
    ita ? textServer.textContent = 'Per favore aspetta' : textServer.textContent = 'Please wait'
})

cliccaPerFeedback.addEventListener('click', () => {
    cliccaPerFeedback.classList.add('selected')
    cliccaPerForm.classList.remove('selected')


    parteFeedback.style.transform = 'translateX(0%)'
    parteForm.style.transform = 'translateX(100%)'
    exitAll.style.transform = 'translateX(100%)'

    imageServer.src = ''
    let ita
    language == 'IT' ? ita = true : ita = false
    ita ? textServer.textContent = 'Per favore aspetta' : textServer.textContent = 'Please wait'
})

const buttonSendFeedback = document.getElementById('invia-messaggio')
const buttonSendReview = document.getElementById('invia-messaggio-feedback')

buttonSendFeedback.addEventListener('click', async () => {
    if(document.getElementById('messaggio-utente').value == '') {
        allRed(document.getElementById('messaggio-utente'))
        return 1
    } else {
        let data = { description: document.getElementById('messaggio-utente').value }
        if (document.getElementById('e-mail-holder').value != "") data.email = document.getElementById('e-mail-holder').value

        cliccaPerForm.classList.remove('selected')
        cliccaPerFeedback.classList.remove('selected')
        parteForm.style.transform = 'translateX(100%)'
        parteFeedback.style.transform = 'translateX(100%)'
        exitAll.style.transform = 'translateX(0%)'

        document.getElementById('messaggio-utente').value = ''
        document.getElementById('e-mail-holder').value = ''

        console.log(data)

        const result = await callAPI('problem', 'POST', data)
        success(result == 200)
    }
})

buttonSendReview.addEventListener('click', async () => {
    if(valSito == -1) {
        for(let i = 0; i < bottoniValutazioneSito.length; i++) {
            bottoniValutazioneSito[i].classList.add('tomatoColor')
        }

        setTimeout(() => {
            for(let i = 0; i < bottoniValutazioneSito.length; i++) 
                bottoniValutazioneSito[i].classList.remove('tomatoColor')
        }, 1500)

        return 1
    } else if(document.getElementById('messaggio-utente-feedback').value == '') {
        allRed(document.getElementById('messaggio-utente-feedback'))
        return 1
    }  else {
        let data = {
            review: document.getElementById('messaggio-utente-feedback').value,
            vote: valSito
        }

        cliccaPerForm.classList.remove('selected')
        cliccaPerFeedback.classList.remove('selected')
        parteForm.style.transform = 'translateX(100%)'
        parteFeedback.style.transform = 'translateX(100%)'
        exitAll.style.transform = 'translateX(0%)'

        document.getElementById('messaggio-utente-feedback').value = ''
        for(let i = 0; i < bottoniValutazioneSito.length; i++) {
            bottoniValutazioneSito[i].classList.remove('button-active')
        }
        valSito = -1

        const result = await callAPI('review', 'POST', data)
        success(result == 200)
    }
})

function allRed(element) {
    element.classList.add('redColor')
    setTimeout(() => {element.classList.remove('redColor')}, 1500)
}

function success(bool) {
    if(bool) {
        imageServer.src = 'system/success-icon.png'
        let ita
        language == 'IT' ? ita = true : ita = false

        ita ? textServer.textContent = 'Tutto è stato inviato!' : textServer.textContent = 'All good!'
    } else {
        imageServer.src = 'system/fail-icon.png'
        let ita
        language == 'IT' ? ita = true : ita = false

        ita ? textServer.textContent = 'C\'è stato un problema' : textServer.textContent = 'Something went wrong'
    }
}

function WinFail(win) {
    if(win) {
        imageServer.src = 'system/success-icon.png'
        let ita
        language == 'IT' ? ita = true : ita = false

        ita ? textServer.textContent = 'Tutto è stato inviato!' : textServer.textContent = 'All good!'
    } else {
        imageServer.src = 'system/fail-icon.png'
        let ita
        language == 'IT' ? ita = true : ita = false

        ita ? textServer.textContent = 'C\'è stato un problema' : textServer.textContent = 'Something went wrong'
    }
}

// cambio lingua

function changeFormLang() {
    let ita
    language == 'IT' ? ita = true : ita = false

    for (let i = 0; i < languageFormData.length; i++) {
        if (languageFormData[i].placeHolder) {
            ita ? languageFormData[i].getId.placeholder = languageFormData[i].ita : languageFormData[i].getId.placeholder = languageFormData[i].ing
        } else {
            ita ? languageFormData[i].getId.textContent = languageFormData[i].ita : languageFormData[i].getId.textContent = languageFormData[i].ing
        }
    }

    ita ? textServer.textContent = 'Per favore aspetta' : textServer.textContent = 'Please wait'
}

// api call

async function callAPI(url, method, body) {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const requestOptions = {
        method: method,
        headers: headers,
        body: JSON.stringify(body)
    }

    const response = await fetch(`/api/${url}`, requestOptions)

    return response.status
}