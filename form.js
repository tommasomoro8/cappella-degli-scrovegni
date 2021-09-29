const bottoniValutazioneSito = document.querySelectorAll('[data-domande-sito]')
const messaggioDellUtente = document.getElementById('messaggio-utente')
const eMailUtente = document.getElementById('e-mail-holder')
const bottoneInvia = document.getElementById('invia-messaggio')

bottoniValutazioneSito.forEach(button => button.addEventListener('click', cambioVal))

let valSito

function cambioVal(val) {
    valSito = eval(val.target.id.charAt(0))
    for(let i = 0; i < bottoniValutazioneSito.length; i++) {
        bottoniValutazioneSito[i].classList.remove('button-active')
    }

    bottoniValutazioneSito[valSito - 1].classList.add('button-active')
}

bottoneInvia.addEventListener('click', () => {
    // aggiiungere funzione per mandare i dati al server
})

const cliccaPerForm = document.getElementById('segnala-un-problema')
const cliccaPerFeedback = document.getElementById('bottone-feedback')
const parteCrediti = document.getElementById('parte-crediti')
const parteForm = document.getElementById('form-testo')
const parteFeedback = document.getElementById('feedback-form')

const indietroCreditiForm = document.getElementById('indietro-crediti')
const indietroCreditiFeedback = document.getElementById('indietro-crediti-feedback')

cliccaPerForm.addEventListener('click', () => {
    parteForm.style.left = '0%'
})

indietroCreditiForm.addEventListener('click', () => {
    parteForm.style.left = '100%'
})

cliccaPerFeedback.addEventListener('click', () => {
    parteFeedback.style.left = '0%'
})

indietroCreditiFeedback.addEventListener('click', () => {
    parteFeedback.style.left = '100%'
})

parteForm.style.left = '0%'
parteFeedback.style.left = '0%'
parteForm.style.left = '100%'
parteFeedback.style.left = '100%'

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
}