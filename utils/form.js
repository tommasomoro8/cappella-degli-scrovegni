const bottoniValutazioneSito = document.querySelectorAll('[data-domande-sito]')
const messaggioDellUtente = document.getElementById('messaggio-utente')
const eMailUtente = document.getElementById('e-mail-holder')
const bottoneInvia = document.getElementById('invia-messaggio')

let valSito = 5

bottoniValutazioneSito.forEach(button => button.addEventListener('click', cambioVal))

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