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

buttonSendFeedback.addEventListener('click', () => {
    if(document.getElementById('messaggio-utente').value == '') {
        allRed(document.getElementById('messaggio-utente'))
        return 1
    } else {
        let data = {
            userFeedback: document.getElementById('messaggio-utente').value,
            userEmail: document.getElementById('e-mail-holder').value,
            timestamp: new Date(),
            review: false,
        }

        document.getElementById('messaggio-utente').value = ''
        document.getElementById('e-mail-holder').value = ''

        success(data)
    }
})

buttonSendReview.addEventListener('click', () => {
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
            userFeedback: document.getElementById('messaggio-utente-feedback').value,
            userRate: valSito,
            timestamp: new Date(),
            review: true,
        }

        document.getElementById('messaggio-utente-feedback').value = ''
        for(let i = 0; i < bottoniValutazioneSito.length; i++) {
            bottoniValutazioneSito[i].classList.remove('button-active')
        }
        valSito = -1

        console.log(data)
        success(data)
    }
})

function allRed(element) {
    element.classList.add('redColor')
    setTimeout(() => {element.classList.remove('redColor')}, 1500)
}

function success(data) {
    cliccaPerForm.classList.remove('selected')
    cliccaPerFeedback.classList.remove('selected')
    parteForm.style.transform = 'translateX(100%)'
    parteFeedback.style.transform = 'translateX(100%)'
    exitAll.style.transform = 'translateX(0%)'

    if(/*funzione server con data come parametro*/true) {
        imageServer.src = '/system/success-icon.png'
        let ita
        language == 'IT' ? ita = true : ita = false

        ita ? textServer.textContent = 'Tutto è stato inviato!' : textServer.textContent = 'All good!'
    } else {
        imageServer.src = '/system/fail-icon.png'
        let ita
        language == 'IT' ? ita = true : ita = false

        ita ? textServer.textContent = 'C\'è stato un problema' : textServer.textContent = 'Something is not right'
    }
}

function WinFail(win) {
    if(win) {
        imageServer.src = '/system/success-icon.png'
        let ita
        language == 'IT' ? ita = true : ita = false

        ita ? textServer.textContent = 'Tutto è stato inviato!' : textServer.textContent = 'All good!'
    } else {
        imageServer.src = '/system/fail-icon.png'
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

const languageFormData = [
    {
        getId: document.getElementById('init-title'),
        ita: 'Chi siamo',
        ing: 'About us'
    },
    {
        getId: document.getElementById('title-text'),
        ita: "UN PO' SU DI NOI",
        ing: 'A LITTLE BIT ABOUT US'
    },
    {
        getId: document.getElementById('text-description-school'),
        ita: "Il liceo viene fondato nel 1898 a Treviso, come Scuola normale femminile.  Nel 1912 apre anche agli studenti maschi e nel 1913 l'istituto viene intitolato al filosofo Roberto Ardigò; nel 1923, a seguito della Riforma Gentile, la scuola normale si trasforma in un istituto magistrale. Nel 1933 si arriva all'attuale intitolazione al Duca degli Abruzzi, da poco deceduto in Somalia, considerato uno dei migliori esploratori geografici. Dopo la Seconda Guerra Mondiale, la scuola si trasferisce nell'attuale sede, e, dal 1990, si arricchisce di numerosi indirizzi di studio.",
        ing: 'The high school was founded in 1898 in Treviso, as a normal female school. In 1912 it also opened to male students and in 1913 the institute was named after the philosopher Roberto Ardigò; in 1923, following the Gentile Reform, the normal school was transformed into a teaching institute. In 1933 we arrive at the current dedication to the Duke of Abruzzi, who recently died in Somalia, considered one of the best geographical explorers. After the Second World War, the school moved to its current location, and, since 1990, it has been enriched with numerous courses of study.'
    },
    {
        getId: document.getElementById('text-description-school2'),
        ita: 'Il Liceo statale Duca degli Abruzzi è un istituto scolastico superiore presente a Treviso. Conta gli indirizzi: scientifico, scienze applicate, scienze umane, linguistico ed economico sociale.',
        ing: 'The Liceo statale Duca degli Abruzzi is a high school in Treviso, Italy. It counts the addresses: scientific, applied sciences, human sciences, linguistic and economic and social.'
    },
    {
        getId: document.getElementById('link-school'),
        ita: 'Scopri di più',
        ing: 'Find out more'
    },
    {
        getId: document.getElementById('CCT-programmers'),
        ita: 'SVILUPPATORI',
        ing: 'DEVELOPERS'
    },
    {
        getId: document.getElementById('CCT-programmers-txt'),
        ita: 'Ideatori e programmatori del sito: Ivan si è occupato della parte grafica del sito, mentre Tommaso delle animazioni del modello 3D.',
        ing: 'Creators and programmers of the site: Ivan took care of the graphic part of the site, while Tommaso of the animations of the 3D model.'
    },
    {
        getId: document.getElementById('CCT-readers'),
        ita: 'LETTRICI',
        ing: 'READERS'
    },
    {
        getId: document.getElementById('CCT-readers-txt'),
        ita: 'Coloro che hanno prestato la propria voce al sito: Ginevra si è occupata degli audio in italiano mentre Greta ha registrato gli audio in inglese.',
        ing: 'Those who lent their voices to the site: Ginevra took care of the audio in Italian while Greta recorded the audios in English.'
    },
    {
        getId: document.getElementById('CCT-model'),
        ita: '3D MODEL DESIGNER',
        ing: '3D MODEL DESIGNER'
    },
    {
        getId: document.getElementById('CCT-model-txt'),
        ita: 'Lucandrea, sempre studente del Liceo Duca degli Abruzzi, si è occupato del modello 3d.',
        ing: 'Lucandrea, also a student at the Liceo Duca degli Abruzzi, took care of the 3D model.'
    },
    {
        getId: document.getElementById('CCT-supervisor'),
        ita: 'SUPERVISORE',
        ing: 'SUPERVISOR'
    },
    {
        getId: document.getElementById('CCT-supervisor-txt'),
        ita: 'Docente di Storia dell’Arte, ha supervisionato i lavori da principio; dando all\'occorrenza consigli e materiali necessari per completare le descrizioni.',
        ing: 'Professor of Art History, he supervised the work from the beginning; giving if necessary advice and materials necessary to complete the descriptions.'
    },
    {
        getId: document.getElementById('CCT-writers'),
        ita: 'AUTORI',
        ing: 'WRITERS'
    },
    {
        getId: document.getElementById('CCT-writers-txt'),
        ita: 'Noi siamo la 3BA del Liceo Duca Degli Abruzzi di Treviso, abbiamo contribuito nel lavoro ideato da Tommaso e Ivan occupandoci delle descrizioni delle opere.',
        ing: 'We are the 3BA of the Liceo Duca Degli Abruzzi in Treviso, we have contributed to the work conceived by Tommaso and Ivan taking care of the descriptions of the works.'
    },
    {
        getId: document.getElementById('contactUS'),
        ita: 'Contattaci',
        ing: 'Contact us'
    },
    {
        getId: document.getElementById('bottone-feedback'),
        ita: 'Valuta il sito',
        ing: 'Leave a review'
    },
    {
        getId: document.getElementById('segnala-un-problema'),
        ita: 'Segnala un problema',
        ing: 'Report a problem'
    },
    {
        getId: document.getElementById('report-a-problem-'),
        ita: 'Segnala un problema',
        ing: 'Report a problem'
    },
    {
        getId: document.getElementById('invia-messaggio'),
        ita: 'Invia',
        ing: 'Send'
    },
    {
        getId: document.getElementById('voto-al-sito'),
        ita: 'Dai un voto al sito',
        ing: 'Rate the website'
    },
    {
        getId: document.getElementById('invia-messaggio-feedback'),
        ita: 'Invia',
        ing: 'Send'
    },
    {
        getId: document.getElementById('messaggio-utente'),
        ita: 'Descrivici il problema',
        ing: 'Describe the issue',
        placeHolder: true
    },
    {
        getId: document.getElementById('e-mail-holder'),
        ita: 'Scrivi qui la tua e-mail (opzionale)',
        ing: 'Write your e-mail here (optional)',
        placeHolder: true
    },
    {
        getId: document.getElementById('messaggio-utente-feedback'),
        ita: 'Lascia una recensione',
        ing: 'Leave a review',
        placeHolder: true
    }
]