const scrollData = [
    {// scene 0
        posX: 20,
        posY: 10,
        posZ: 40,
        rotX: 0,
        rotY: 1
    },
    {// scene 1
        posX: -12,
        posY: 10,
        posZ: 40,
        rotX: 0,
        rotY: -0.8
    },
    {// scene 2
        posX: 15,
        posY: 10,
        posZ: 40,
        rotX: 0,
        rotY: 0.9
    },
    {// scene 3
        posX: -20,
        posY: 10,
        posZ: 40,
        rotX: 0,
        rotY: -1
    },
    {// scene 4
        posX: 25,
        posY: 20,
        posZ: 60,
        rotX: 0,
        rotY: 0.9
    },
    {// scene 5 (before DOMContentLoaded scene)
        posX: 400,
        posY: 200,
        posZ: 300,
        rotX: 0,
        rotY: 1.3
    },
    {// scene 6 (entry inside scene)
        posX: 0,
        posY: 0,
        posZ: 0,
        rotX: 0,
        rotY: 0
    },
    {// scene 7 (from indoor to home init scene)
        posX: 0,
        posY: 10,
        posZ: 20,
        rotX: 0,
        rotY: 0
    }
]

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
        ita: "Il liceo viene fondato nel 1898 a Treviso, come Scuola normale femminile. Nel 1912 apre anche agli studenti maschi e nel 1913 l'istituto viene intitolato al filosofo Roberto Ardigò; nel 1923, a seguito della Riforma Gentile, la scuola normale si trasforma in un istituto magistrale. Nel 1933 si arriva all'attuale intitolazione al Duca degli Abruzzi, da poco deceduto in Somalia, considerato uno dei migliori esploratori geografici. Dopo la Seconda Guerra Mondiale, la scuola si trasferisce nell'attuale sede, e, dal 1990, si arricchisce di numerosi indirizzi di studio.",
        ing: 'The high school was founded in 1898 in Treviso, as a normal female school. In 1912 it also opened to male students and in 1913 the institute was named after the philosopher Roberto Ardigò; in 1923, following the Gentile Reform, the normal school was transformed into a teaching institute. In 1933 we arrive at the current dedication to the Duke of Abruzzi, who recently died in Somalia, considered one of the best geographical explorers. After the Second World War, the school moved to its current location, and, since 1990, it has been enriched with numerous courses of study.'
    },
    {
        getId: document.getElementById('text-description-school2'),
        ita: 'Il Liceo statale Duca degli Abruzzi è un istituto scolastico superiore presente a Treviso. Conta gli indirizzi: scientifico, scienze applicate, scienze umane,  linguistico ed economico sociale.È una delle scuole più prestigiose della città che permette di compiere qualsiasi scelta universitaria.Offre la possibilità agli studenti di sperimentarsi nelle discipline di loro maggiore interesse, recando alla scuola moltecipli premi e riconoscimenti. Numerosi laboratori permettono agli studenti di misurarsi con quanto appreso e le attività extrascolastiche, quali ad esempio il teatro, la musica, gli scacchi, danno spazio alla creatività e all\'espressività favorendo altresì la socializzazione.',
        ing: 'The Duca degli Abruzzi state high school is a high school present in Treviso. It counts the addresses: scientific, applied sciences, humanities, linguistic and social economics.It is one of the most prestigious schools in the city that allows you to make any university choice.It offers students the opportunity to experiment in the disciplines of their greatest interest, bringing many prizes and awards to the school.Numerous workshops allow students to measure themselves with what they have learned and extracurricular activities, such as theater, music, chess, give space to creativity and expressiveness, also favoring socialization.'
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
        ita: 'Ideatori e programmatori del sito: Ivan si è occupato della parte grafica del sito, mentre Tommaso delle animazioni del modello 3d.',
        ing: 'Creators and programmers of the site: Ivan took care of the graphic part of the site, while Tommaso of the animations of the 3d model.'
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

const data = [
    {
        position: {
            x: 325,
            y: 610,
            z: -600
        },
        to: {
            x: -1.749715823672447,
            y: 16.60824317257341,
            z: 3.230244597549133
        },
        title: "La nascita",
        subtitle: "Storie della Vergine",
        IT: {
            text: "La dedica della cappella alla Vergine della Carità spiega la presenza del ciclo di storie mariane che, sommate a quelle dei genitori Gioacchino e Anna, costituiscono la più estesa rappresentazione fino ad allora dipinta in Italia.\nLe Storie di Maria, dalla nascita allo sposalizio, si ispirano alla Leggenda Aurea di Jacopo da Varazze.\nLa leggenda Aurea è un santorale, organizzato secondo l&#39;anno liturgico, dove l’autore racconta le vite di più di centocinquanta santi, privilegiando i santi antichi, ma senza trascurare la sua epoca.Le vite dei santi sono intercalate da una trentina di capitoli dedicati alle principali feste cristologiche, mariane e liturgiche, più alcuni racconti legati alla Leggenda della Vera Croce.\nAmbientata nella stessa identica abitazione di sant&#39;Anna che appare nell&#39;Annuncio, la scena mostra l&#39;anziana donna che sdraiata nel proprio letto ha appena partorito e riceve la figlia fasciata da una levatrice. Nello stesso momento una seconda levatrice le sta per porgere qualcosa da mangiare.\nLa scena mostra inoltre altri due episodi:\n- in basso due aiutanti hanno appena fatto il primo bagnetto alla neonata e l&#39;hanno fasciata;\n- all&#39;ingresso dell&#39;abitazione un&#39;altra fantesca riceve da una donna vestita di bianco un pacchetto di panni.\nLe figure hanno un carattere scultoreo, ispirato forse ai pulpiti di Giovanni Pisano, con allungamenti ed eleganze derivate dal gotico francese.\nPer accentuare maggiormente la profondità prospettica, Giotto dipinse il sostegno delle cortine che circondano il letto con stanghe che formano un rettangolo, appropriatamente scorciato.\nInoltre, si crede che la donna che porge la bambina, dall&#39;elegante vestito azzurro con bordature dorate, possa essere la moglie di Enrico degli Scrovegni.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "Nativity of Maria<br>The dedication of the chapel to the Virgin of Charity explains the presence of the cycle of Marian stories which, added to those of the parents Joachim and Anna, constitute the largest representation so far painted in Italy.<br>The Stories of Mary, from birth to marriage, are inspired by the Golden Legend of Jacopo da Varazze.<br>The Aurea legend is a santorale, organized according to the liturgical year, where the author recounts the lives of more than one hundred and fifty saints, privileging the ancient saints, but without neglecting his age. The lives of the saints are interspersed with about thirty chapters dedicated to the main Christological, Marian and liturgical feasts, plus some stories related to the Legend of the True Cross.<br>Set in the exact same house as Saint Anne that appears in the Announcement, the scene shows the elderly woman lying in her bed who has just given birth and receives her daughter swaddled by a midwife. At the same time a second midwife is about to offer her something to eat. The scene also shows two more episodes:<br>&#9679; below, two helpers have just given the baby the first bath and swaddled her;<br>&#9679; at the entrance to the house another maid receives a package of clothes from a woman dressed in white.<br>The figures have a sculptural character, perhaps inspired by the pulpits of Giovanni Pisano, with extensions and elegance derived from French Gothic.<br>To further accentuate the perspective depth, Giotto painted the support of the curtains surrounding the bed with poles that form a rectangle, appropriately shortened.<br>Furthermore, it is believed that the woman who gives the child, in an elegant blue dress with golden borders, may be the wife of Enrico degli Scrovegni.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 610,
            z: -375
        },
        to: {
            x: -2.026269597868586,
            y: 16.07215431797782,
            z: 2.3380033821560606
        },
        title: "Presentazione al Tempio",
        subtitle: "Storie della Vergine",
        IT: {
            text: "La Presentazione di Maria al Tempio è un affresco (200x185 cm) di Giotto, databile al 1303-1305 circa.\nÈ compresa nelle Storie di Maria situate nel registro più alto della parete sinistra, guardando verso l&#39;altare. Un tocco di quotidianità è offerto dai passanti, come quelli di schiena a destra che osservano indicando e chiacchierando tra di loro.\nLa scena ha un suo fulcro evidenziato anche dall&#39;architettura, evitando le rigidità della simmetria, con una semplificazione delle superfici di grande efficacia, con un rapporto calibrato tra architettura e figure che la popolano. \nLa gestualità è lenta e calcolata, i colori sono chiari, intrisi di luce, la plasticità delle figure è accentuata dal chiaroscuro e dal disegno robusto.",
            textAuthor: "Scritto da Simone Brunello",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The Presentation of Mary in the Temple is a fresco (200x185 cm) by Giotto, datable to around 1303-1305. It is included in the Stories of Mary located in the upper register of the left wall, looking towards the altar.<br>A touch of everyday life is offered by passers-by, such as those from the back to the right who observe pointing and chatting among themselves. The scene has its fulcrum also highlighted by the architecture, avoiding the rigidity of symmetry, with a highly effective simplification of the surfaces, with a calibrated relationship between architecture and the figures that populate it. The gestures are slow and calculated, the colors are clear, imbued with light, the plasticity of the figures is accentuated by the chiaroscuro and the robust design.",
            textAuthor: "Written by Simone Brunello",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 610,
            z: -125
        },
        to: {
            x: -2.2574888505706165,
            y: 15.623944689663112,
            z: 0.8682649425271601
        },
        title: "Consegna dell Verghe",
        subtitle: "Storie della Vergine",
        IT: {
            text: "La Consegna delle verghe, insieme alla Preghiera per la fioritura delle verghe e allo Sposalizio della vergine sono ambientante davanti allo stesso nicchione cassettonato sopra un altare, che con l’architettura che lo contiene, sta a simboleggiare la navata di una chiesa.\nSebbene alcuni personaggi sono contornati dall’azzurro del cielo, secondo le convenzioni artistiche medioevali è inteso che in realtà la cerimonia fu svolta interamente alla basilica composta da tre navate. \nMaria, in età da matrimonio, si trova reclusa all’interno del Tempio di Gerusalemme nel quale vive come monaca. \nPrima di farla sposa, un annuncio divino fa presente che solo chi avrà la fortuna di vedere una verga fiorita, che porterà poi con se al tempio, potrà maritare la fanciulla. Così osserviamo i pretendenti di Maria in fila, con la loro verga in mano che aspettano di essere ricevuti dal sacerdote posto dietro l’altare. \nTra questi troviamo anche l’anziano Giuseppe, che ultimo alla fila, è l’unico con l’aureola dorata. Dio sceglie lui come marito della fanciulla a causa dalla sua età avanzata e della sua santità, in modo da mantenere la castità della sposa. \nI colori sono chiari, la plasticità delle figure è accentuata dal chiaroscuro e la gestualità è lenta e calcolata.",
            textAuthor: "Scritto da Irene Buttari",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The <i>Consegna delle verghe</i>, together with the <i>Preghiera per la fioritura delle verghe</i> of the rods and the <i>Sposalizio della vergine</i> are set in front of the same coffered niche above an altar, which with the architecture that contains it, symbolizes the nave of a church. Although some characters are surrounded by the blue of the sky, according to medieval artistic conventions it is understood that in reality the ceremony was carried out entirely in the basilica consisting of three naves.<br>Maria, at the age of marriage, finds herself confined inside the Temple of Jerusalem where she lives as a nun. Before marrying her, a divine announcement points out that only those who have the good fortune to see a flowering rod, which she will then take with them to the temple, will be able to marry the girl. Thus we observe Maria's suitors in line, with their rod in hand, waiting to be received by the priest behind the altar. Among these we also find the elderly Giuseppe, who last in line, is the only one with the golden halo. God chooses him as the husband of the girl because of his advanced age and her holiness, in order to maintain the chastity of the bride.<br>The colors are clear, the plasticity of the figures is accentuated by the chiaroscuro and the gestures are slow and calculated.",
            textAuthor: "Written by Irene Buttari",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 610,
            z: 140
        },
        to: {
            x: -2.248879166470853,
            y: 15.640634231148807,
            z: -0.9687479486335986
        },
        title: "La preghiera per la fioritura delle vigne",
        subtitle: "Storie della Vergine",
        IT: {
            text: "Giotto \n1303-1305 \n200x185 cm \nCappella Degli Scrovegni Padova \nAffresco a muro \nL’affresco raffigura il racconto della verga ovvero la scelta dello sposo per Maria che fino a quel momento era rimasta casta nel tempio di Gerusalemme. \nUn indovino aveva predetto che solo chi avrebbe visto fiorire una verga al tempio avrebbe potuto sposare Maria. I pretendenti tra cui Giuseppe (l’unico raffigurato con l’aureola) si presentano con le verge, ma solo quella di Giuseppe fiorirà, tramite intervento divini. Venne scelto un uomo anziano per mantenere la castità della sposa.\nL’affresco è ricco di colori chiari con lo sfondo blu intenso caratteristico dell’epoca e il centro dell’opera è appunto l’altare dove tutti gli sguardi sono rivolti.",
            textAuthor: "Scritto da Filippo Conte",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The fresco tells the story of the rod and the choice of the husband for Maria that until then had remained chaste in the temple of Jerusalem.<br>A soothsayer had predicted that only thoose who saw a rod blossom in the temple cold marry Maria.<br>The suitors including Giuseppe show up with the verge; but only Giuseppe’s one will flourish through divine intervention because he is elderly so he can mantain the chastity of the bride.<br>The fresco is rich in light colors with the intense blue background characteristic of the time. The center of the work is the altar where the eyes of all the characters are turned.",
            textAuthor: "Written by Filippo Conte",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 610,
            z: 400
        },
        to: {
            x: -1.9964214617362295,
            y: 16.130013781865156,
            z: -2.457134106752282
        },
        title: "Lo sposalizio",
        subtitle: "Storie della Vergine",
        IT: {
            text: "È un affresco realizzato tra il 1303 e il 1305 da Giotto, si trova nelle “Storie di Maria” della Cappella degli Scrovegni a Padova.\nLe Storie di Maria, dalla nascita allo sposalizio, si ispirano alla Legenda Aurea e in questo caso diffuse un episodio contenuto nel Libro di Giovanni, uno dei Vangeli apocrifi.\nLo Sposalizio della Vergine è ambientato davanti al medesimo nicchione cassettonato sopra un altare, che simboleggia, la navata di una chiesa. Sebbene alcuni personaggi si trovino all&#39;esterno, sullo sfondo del cielo, secondo le convenzioni dell&#39;arte medievale le scene sono da intendersi come avvenute dentro l&#39;edificio, in questo caso una basilica.\nDio ha scelto come sposo di Maria l&#39;anziano e Giuseppe, facendo miracolosamente fiorire una verga da lui portata al Tempio di Gerusalemme, in modo da mantenere la castità della sposa. Il sacerdote sta celebrando il matrimonio tenendo le mani degli sposi mentre Giuseppe mette l&#39;anello alla sposa, vicino a lui sta l&#39;inserviente del Tempio vestito di verde. \nI colori sono chiari, pieni di luce, la plasticità delle figure è accentuata dal chiaroscuro e dal disegno robusto.",
            textAuthor: "Scritto da Lorenzo Dariol",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "It is a fresco painted between 1303 and 1305 by Giotto, found in the “Stories of Maria” in the Scrovegni Chapel in Padova.<br>The Stories of Maria, from birth to marriage, are inspired by the Golden Legend and in this case spread an episode contained in the Book of John, one of the apocryphal Gospels.<br>The Marriage of the Virgin is set in front of the same coffered niche above an altar, which symbolizes the nave of a church. Although some characters are outside, against the background of the sky, according to the conventions of medieval art the scenes are to be understood as having taken place inside the building, in this case a basilica.<br>God chose the elder and Giuseppe as the husband of Maria, miraculously making a rod that he brought to the Temple of Jerusalem blossom, in order to maintain the chastity of the bride. The priest is celebrating the wedding holding the hands of the spouses while Giuseppe puts the ring on the bride, next to him is the attendant of the Temple dressed in green.<br>The colors are clear, full of light, the plasticity of the figures is accentuated by the chiaroscuro and the robust design.",
            textAuthor: "Written by Lorenzo Dariol",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 610,
            z: 650
        },
        to: {
            x: -1.6895717140616973,
            y: 16.724830215818866,
            z: -3.379143428123393
        },
        title: "Il corteo nuziale",
        subtitle: "Storie della Vergine",
        IT: {
            text: "Il Corteo nuziale di Maria è un affresco (200x185 cm) di Giotto, databile al 1303-1305 circa e facente parte del ciclo della Cappella degli Scrovegni a Padova. È compreso nelle Storie di Maria situate nel registro più alto della parete sinistra, guardando verso l&#39;altare. \nL&#39;opera è di controversa interpretazione; secondo alcuni critici si tratterebbe infatti del ritorno della Vergine alla casa paterna. Nell’affresco, Maria sta per recarsi nella casa di Nazareth e non a Betlemme. Infatti, in alto a destra si scorge una parte della abitazione in cui, nell’affresco successivo sarà ambientata l’Annunciazione dell’angelo Gabriele a Maria. La scena mostra Maria al centro con un lungo abito bianco, seguita da sette fanciulle con vesti molto colorate e preceduta da due figure maschili che guidano la processione. Ben visibile risulta essere la flessuosa eleganza di Maria e delle fanciulle al seguito. All&#39;estrema destra tre musici l’accolgono suonando.\nDal balcone della casa si protende un rigoglioso ramo verde, identificato con il maio, come simbolo nuziale e segno di buon augurio. \nCiò che si denota nell’opera è la mancanza, nella scena giottesca, della rappresentazione della figura di Giuseppe.",
            textAuthor: "Scritto da Alessandro Delazzari",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "<i>The Wedding Procession of Mary</i> is a fresco (200x185 cm) by Giotto, datable to around 1303-1305 and part of the cycle in the Scrovegni Chapel in Padua. It is contained in the Stories of Mary located in the highest register of the left wall, looking towards the altar.<br>The work is of controversial interpretation; according to some critics it depicts the Virgin's return to her father's house. In the fresco, Mary is on her way to the house of Nazareth and not to Bethlehem. Indeed, in the top right-hand corner, one can see a part of the house in which, in the following fresco, the Annunciation of the angel Gabriel to Mary will take place. The scene shows Mary in the centre wearing a long white dress, followed by seven young girls in very colourful dresses and preceded by two male figures leading the procession. The supple elegance of Mary and the girls in tow is clearly visible. On the far right, three musicians welcome her with music.<br>From the balcony of the house a luxuriant green branch, identified as the maio, extends as a nuptial symbol and sign of good luck. <br>What is noticeable in the work is the lack of representation of the figure of Joseph in Giotto's scene.",
            textAuthor: "Written by Alessandro Delazzari",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 410,
            z: -600
        },
        to: {
            x: -2.0147509518800417,
            y: 17.334329509820254,
            z: 3.719540218855462
        },
        title: "Disputa coi dottori",
        subtitle: "Storie di Gesù",
        IT: {
            text: "La disputa di Gesù con i dottori è un affresco di Giotto con dimensioni 200x185 cm, che risale al 1303-1305 circa. È compresa nelle Storie di Gesù del registro centrale superiore, nella parete sinistra guardando verso l'altare. \nLa scena, in condizioni di conservazione mediocri, è ambientata all'interno del Tempio di Gerusalemme dove Gesù dodicenne viene smarrito dai genitori, che lo ritrovano a discutere di religione e filosofia con dei dottori. Ambientato in un ambiente al chiuso, con navate coperte da volte a crociera, nicchie, soffitto a cassettoni e festoni vegetali, ha una prospettiva intuitiva verso destra, per assecondare lo sguardo dello spettatore. \nLa scena si trova infatti nell'angolo della parete a sinistra, accanto al Giudizio Universale della parete di fondo.\nSu un sedile il giovane Gesù, vestito di rosso, sta discutendo con dieci sapienti, raffigurati con la barba, come i filosofi, e avvolti in mantelli con cappucci. A sinistra Giuseppe e Maria accorrono. La Vergine distende le braccia dimostrando, con un gesto preso dalla quotidianità, la sua apprensione dovuta allo smarrimento del fanciullo. Anche Giuseppe solleva una mano, colto dallo stupore della situazione. \nInoltre, la spazialità dell'ambiente è ampia e monumentale, a differenza di quelle più contratte degli episodi precedenti.",
            textAuthor: "Scritto da Andrea Mestriner",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The dispute of Jesus with the doctors is a fresco by Giotto with dimensions of 200x185 cm, which dates back to about 1303-1305. It is included in the Stories of Jesus in the upper central register, on the left wall looking towards the altar.<br>The scene, in poor conservation conditions, is set inside the Temple of Jerusalem where twelve-year-old Jesus is lost by his parents, who find him discussing religion and philosophy with doctors. Set in an indoor environment, with aisles covered by cross vaults, niches, coffered ceiling and plant festoons, it has an intuitive perspective to the right, to favor the viewer's gaze. The scene is in fact located in the corner of the wall on the left, next to the Last Judgment of the back wall.<br>On a seat the young Jesus, dressed in red, is arguing with ten wise men, depicted with beards, like philosophers, and wrapped in cloaks with hoods. On the left, Joseph and Mary run. The Virgin extends her arms demonstrating, with a gesture taken from everyday life, her apprehension due to the loss of the child. Joseph also raises a hand, caught by the astonishment of the situation.<br>Furthermore, the spatiality of the environment is large and monumental, unlike the more contracted ones of the previous episodes.",
            textAuthor: "Written by Andrea Mestriner",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 410,
            z: -375
        },
        to: {
            x: -2.4747946591371757,
            y: 16.725656297141583,
            z: 2.8555322990044334
        },
        title: "Battesimo",
        subtitle: "Storie di Gesù",
        IT: {
            text: "Il Battesimo di Cristo è un affresco (200x185 cm) di Giotto, databile al 1303-1305 circa e facente parte del ciclo della Cappella degli Scrovegni a Padova. È compreso nelle Storie di Gesù del registro centrale superiore, nella parete sinistra guardando verso l&#39;altare.\nAl centro della scena Gesù, immerso fino a metà del busto nel Giordano, riceve il battesimo da Giovanni Battista che si sporge in avanti da una rupe. Dietro di esso sta un santo anziano e un giovane senza aureola, in attesa di essere battezzati. Dall&#39;altra parte quattro angeli tengono i vestiti di Cristo e stanno pronti a ricoprirlo facendosi leggermente avanti. In alto, in un&#39;esplosione luminosa, Dio Padre, con un libro in braccio, si sporge a benedire Cristo con un efficace scorcio, il primo del genere.\nAnche le rocce dello sfondo, divergenti a forma di &quot;V&quot; contribuiscono a rivolgere l&#39;attenzione dello spettatore verso il fulcro centrale della scena. \nAltissima è la qualità del volto di Cristo, così come quello del Battista e dei due discepoli dietro di lui. Resta un&#39;evidente concessione alla tradizione iconografica medievale nell&#39;irrazionale livello delle acque che copre Cristo ma lascia asciutti gli altri presenti, dovuta al metodo tradizionale di rappresentare la scena, in modo da non mostrare il Cristo completamente nudo.",
            textAuthor: "Scritto da Christian Mestriner",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The Baptism of Christ is a fresco (200x185 cm) by Giotto, datable to around 1303-1305 and part of the cycle of the Scrovegni Chapel in Padua.  It is included in the Stories of Jesus in the upper central register, on the left wall looking towards the altar.<br> At the center of the scene, Jesus, half-buried in the Jordan, receives baptism from John the Baptist who leans forward from a cliff.  Behind it stands an elderly saint and a young man without a halo, waiting to be baptized.  On the other side, four angels hold Christ's clothes and are ready to cover him by coming forward slightly.  Above, in a luminous explosion, God the Father, with a book in his arms, reaches out to bless Christ with an effective glimpse, the first of its kind.<br> Even the rocks in the background, diverging in the shape of a “V”, help to direct the viewer's attention towards the central fulcrum of the scene.<br> The quality of Christ's face is very high, as is that of the Baptist and the two disciples behind him.  There remains an evident concession to the medieval iconographic tradition in the irrational level of the water that covers Christ but leaves the others present dry, due to the traditional method of representing the scene, so as not to show Christ completely naked.",
            textAuthor: "Written by Christian Mestriner",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 400,
            z: -125
        },
        to: {
            x: -2.9785193227432614,
            y: 16.150836567531783,
            z: 1.1455843549012543
        },
        title: "Le nozze di Cana",
        subtitle: "Storie di Gesù",
        IT: {
            text: "Le Nozze di Cana è un dipinto di Paolo Caliari (detto il Veronese) del 1563, grande 666x990cm, olio su tela, custodito al Louvre di Parigi.\nTema del dipinto è l’episodio evangelico di le nozze di Cana, durante il quale avvenne il famoso miracolo della tramutazione dell’acqua in vino da parte di Gesù.\nLa scena è ricca di particolari e mostra nella sua ambientazione una commistione di dettagli antichi e contemporanei, sorprende la presenza di ben 133 personaggi, dipinti con una straordinaria dovizia: aristocratici, servi, soldati, cani, giullari. Tra questi si riconoscono, in primo piano, un gruppo di musicisti, tra cui il pittore stesso, con una tunica bianca e Tiziano Vecellio, intento a suonare il contrabbasso.\nL’architettura presenta tratti tipicamente classici: le colonne, perfetti esempi degli ordini dorico e corinzio, il cortile centrale, racchiuso da una balaustra decorata e lo sfondo, un cielo azzurro macchiato da alcune nuvole bianche, nel quale si scorge una torre anch’essa in stile classico. Esemplare è anche la presenza di elementi caratteristici del periodo rinascimentale, che si conciliano armoniosamente con lo stile classico.\nLe vesti dei personaggi sono sontuose ed eleganti, dai colori brillanti e motivi ricercati.\nIl personaggio principale è Gesù; nessun personaggio sembra prestare attenzione al Cristo, il quale siede accanto a Maria e ai discepoli e viene dipinto con un’aureola sul capo.\nDietro ad esso, sulla balaustra, appaiono i servitori.\nLa coppia di sposi seduti al lato sinistro del tavolo sono una forte metafora di quanto il prestigio sociale sia inutile di fronte al prestigio spirituale: nonostante siano gli effettivi protagonisti della festa, non siedono al centro, dove invece sono collocati Gesù, la Vergine e gli apostoli. Un ulteriore oggetto che segna la distinzione tra divino e terreno è la clessidra, posta in primo piano sul tavolo a simboleggiare la fugacità della vita.",
            textAuthor: "Scritto da Anna Piovesan",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The Nozze di Cana is a fresco by Giotto (200x185 cm), dating back to about 1303-1305. It is included in the Stories of Jesus of the upper central register, in the left wall looking towards the altar.<br>The protagonists of the work are Jesus and Mary, placed one to the left of the representation and the other on the right; they are, together with St. Pietro, the only characters portrayed with the halo. On the right the attention is definitely captured by the master fat, intent on tasting the new wine. Precisely this character testifies to the fact that Giotto renews the way of portraying human figures by often proposing real snapshots of the life of his time. The side of the table facing the viewer has in the centre the bride, dressed in a red dress embroidered with finesse, sitting next to the Madonna, also blessing, and a girl with a crown of flowers on her head. Two attendants are on the other side of the table.<br>Following the Gospel of John, the moment is shown when Jesus, sitting on the left next to the groom and near an apostle, blesses with a gesture the water poured into the large jars on the other side of the room and transforming it into wine.<br>The scene is set in a room open to the sky: striped red drapes cover the walls, a frieze runs up and up there are openwork wooden gratings supported by shelves, on which there are vases and decorative elements.<br>Pastel shades accentuate with chiaroscuro the plastic volumes of the figures. Considerable care is taken in the description of the objects, from the white tablecloth that creates bands of different colours, to the finely grooved jars, up to the dishes on the table. The canteen master and the boy behind him are so well characterised that they suggested that they are portraits of characters that really existed.",
            textAuthor: "Written by Anna Piovesan",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 400,
            z: 140
        },
        to: {
            x: -2.9588278500390315,
            y: 16.17628400918033,
            z: -1.274571996939891
        },
        title: "Resurrezione di Lazzaro",
        subtitle: "Storie di Gesù",
        IT: {
            text: "La resurrezione di Lazzaro (dal 1303-1305), dell’artista Giotto di Bondone, narra un miracolo di Gesù raccontato dal Vangelo secondo Giovanni. Lo stesso episodio lo possiamo anche trovare nella Cappella della Maddalena nella basilica inferiore di Assisi, sempre realizzato da Giotto.\nI colori utilizzati sono molto luminosi e creano contrasto con il blu scuro dello sfondo, il quale è anche caratterizzato dalla roccia nuda e scheggiata che ci permette di distinguere cinque gruppi di personaggi; il primo da sinistra è quello composto dagli apostoli con l’aureola, tra i quali emerge Gesù, che incede e leva il braccio nell’atto di benedire Lazzaro; il secondo sono le due donne, Maria e Maddalena, che si prostrano ai piedi di Cristo; alla loro destra il terzo gruppo, due garzoni trascinano il coperchio marmoreo della tomba riprodotto con virtuosismo in tutte le sue venature. \nIl quarto gruppo di personaggi è quello situato al centro della raffigurazione e ci sono persone agitate, altre sconcertate e meravigliate dal miracolo compiuto da Gesù. \nInfine l’ultimo, il più importante, è quello sulla destra con Lazzaro avvolto nelle bende bianche, già fuoriuscito dalla tomba, che viene aiutato da San Pietro a sbendarsi, dietro di loro un apostolo si copre naso e bocca con un lembo dell’abito per non sentire i cattivi odori di putrefazione e lo stesso fa anche l’uomo con l’abito azzurro dietro di lui.",
            textAuthor: "Scritto da Francesca Scabello",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The resurrection of Lazarus (from 1303-1305), by the artist Giotto of Bondone, narrates a<br>miracle of Jesus told by the Gospel according to John. We can also find the same episode in<br>the Chapel of the Magdalene in the lower basilica of Assisi, also made by Giotto.<br>The colors used are very bright and they create contrast with the dark blue of the background,<br>which is also characterized by the bare and chipped rock that allows us to distinguish five<br>groups of characters; the first from the left is the one composed of the apostles with the halo,<br>among which Jesus emerges, who steps forward and raises his arm in the act of blessing<br>Lazarus; the second are the two women, Mary and Magdalene, who prostrate themselves at<br>Christ&#39;s feet; to their right the third group, two boys drag the marble lid of the tomb reproduced<br>with virtuosity in all its veins. The fourth group of characters is the one located in the center of<br>the representation and there are agitated people, others bewildered and amazed by the<br>miracle performed by Jesus. Finally, the last, the most important, is the one on the right with<br>Lazarus wrapped in white bandages, already out of the tomb, who is helped by St. Peter to<br>disband himself, behind them an apostle covers his nose and mouth with a hem of his garment<br>so as not to smell the bad odors of putrefaction and so does the man in the blue garment<br>behind him.",
            textAuthor: "Written by Francesca Scabello",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 410,
            z: 375
        },
        to: {
            x: -2.474794659137176,
            y: 16.725656297141583,
            z: -2.855532299004433
        },
        title: "Ingresso a Gerusalemme",
        subtitle: "Storie di Gesù",
        IT: {
            text: "L’ ingresso a Gerusalemme è un affresco (200x185 cm) di Giotto, databile al 1303-1305. È compresa nelle Storie di Gesù del registro centrale superiore. \nL’opera racconta dell’ultima pasqua di Gesù nella quale si recò nella città di Gerusalemme dove fu accolto come messia da tutta la folla che lo acclamò. \nGiotto decise di evidenziare la figura di Cristo che avanza verso la Porta della città. La sua figura si eleva tra le altre. Il suo volto di profilo è regale, come nel caso delle &quot;teste&quot; delle monete. Lo sguardo è fermo: Gesù e consapevole del suo destino, che una volta varcata la porta, lo condurrà alla sua cattura, umiliazione e crocifissione. \nGesù avanza da sinistra, cavalcando un asino, verso le porte di Gerusalemme, seguito dagli Apostoli. \nDalla parte opposta c&#39;è la folla dove vediamo l’atteggiamento dei singoli personaggi: c’è chi si prostra, chi accorre a vedere e chi è sorpreso. Qui possiamo notare il realismo che dà Giotto, in questa opera infatti possiamo notare molti episodi di vita quotidiana tra cui spicca quello della persona che si copre la testa col mantello, forse nell&#39;intento di togliersi il medesimo all&#39;arrivo del Salvatore. \nBellissimi anche i due fanciulli che salgono sugli alberi con il duplice intento di staccare i rami d&#39;ulivo per il Salvatore e di vedere meglio, da una posizione privilegiata. \nLa scena è una delle più vivaci e naturali di tutte quelle che sono state realizzate nella cappella degli Scrovegni.",
            textAuthor: "Scritto da Nicola Depoli",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The entrance into Jerusalem is a fresco (200x185 cm) by Giotto, datable to 1303-1305. It is included in the Stories of Jesus in the upper central register. The work tells of the last Passover of Jesus in which he went to the city of Jerusalem where he was welcomed as messiah by the whole crowd who cheered him. Giotto decided to highlight the figure of Christ advancing towards the city gate. His figure stands out among others. His face in profile is regal, as in the case of the “heads” of the coins. The gaze is steady: Jesus is aware of his destiny, which, once he crosses the door, will lead him to his capture, humiliation and crucifixion. Jesus advances from the left, riding a donkey, towards the gates of Jerusalem, followed by the Apostles. On the opposite side there is the crowd where we see the attitude of the individual characters: there are those who prostrate themselves, those who rush to see and those who are surprised. Here we can see the realism that Giotto gives, in this work we can in fact notice many episodes of daily life among which that of the person covering his head with a cloak, perhaps with the intention of taking off the same when the Savior arrives. Also beautiful are the two children who climb the trees with the dual intent of detaching the olive branches for the Savior and to see better, from a privileged position. The scene is one of the most lively and natural of all those that have been made in the Scrovegni chapel.",
            textAuthor: "Written by Nicola Depoli",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 410,
            z: 630
        },
        to: {
            x: -1.959930647979294,
            y: 17.406860988827397,
            z: -3.79925017915986
        },
        title: "Cacciata dei mercanti dal Tempio",
        subtitle: "Storie di Gesù",
        IT: {
            text: "La Cacciata dei mercanti dal Tempio è un affresco di Giotto, databile al 1303-1305 circa. Fa parte del ciclo della Cappella degli Scrovegni a Padova ed è compreso nelle Storie di Gesù del registro centrale superiore, nella parete sinistra guardando verso l&#39;altare.\nLa scena viene ritratta davanti al Tempio di Gerusalemme mentre Gesù si scaglia contro dei mercanti che infestano il luogo sacro. Nel mentre gli stessi apostoli rimangono stupiti da questo momento di collera del loro maestro; Pietro ci fa capire la sua confusione mentre alza le braccia e guarda intorno a sé smarrito.\n Gesù, col volto fisso, esprime la sua determinazione, alza il pugno stringendo una corda con la quale scaccia due mercanti. Le gabbie di animali dei due commercianti stanno a terra assieme a un tavolo ribaltato; un caprone fugge spaventato saltando via, mentre, poco dietro, due sacerdoti si scambiano uno sguardo perplesso. A sinistra si notano altri animali che scappano, anche oltre il bordo della scena, mentre due bambini si rifugiano tra le vesti degli apostoli, con espressioni particolarmente naturali. \nSullo sfondo viene dipinto un tempio, con un loggiato a tre arcate sormontate da cuspidi triangolari con medaglioni a forma di fiore. Statue di leoni e cavalli sormontano i pilastri, delle colonnine in marmo decorano il passaggio coperto, un pulpito sporge a destra e in alto si intravedono delle cupolette.",
            textAuthor: "Scritto da Emma Vanin",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The Expulsion of the Merchants from the Temple is a fresco by Giotto, datable to about 1303-1305. It is part of the cycle of the Scrovegni Chapel in Padua and is included in the Stories of Jesus in the upper central register, on the left wall looking towards the altar.<br>The scene is portrayed in front of the Temple of Jerusalem as Jesus lashes out at merchants who haunt the sacred place. Meanwhile the apostles themselves are amazed by this moment of anger of their master; Peter makes us understand his confusion as he raises his arms and looks around if lost. Jesus, with a fixed face, expresses his determination, raises his fist clutching a rope with which he drives away two merchants. Whose cages of animals of the two traders are on the ground together with an overturned table; a goat runs away frightened by jumping away, while, just behind, two priests exchange a puzzled look. On the left you can see other animals running away, even beyond the edge of the scene, while two children take refuge in the robes of the apostles, with particularly natural expressions.<br>In the background a temple is painted, with a loggia with three arches surmounted by triangular cusps with flower-shaped medallions. Statues of lions and horses surmount the pillars, marble columns decorate the covered passage, a pulpit protrudes to the right and domes can be glimpsed at the top.",
            textAuthor: "Written by Emma Vanin",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 250,
            z: -600
        },
        to: {
            x: -2.2143712316863167,
            y: 18.160368515214444,
            z: 4.088069966190123
        },
        title: "Andata al Calvario",
        subtitle: "Storie di Gesù",
        IT: {
            text: "L&#39;Andata al Calvario è un affresco di Giotto, databile al 1303-1305 circa. Fa parte del ciclo della Cappella degli Scrovegni a Padova ed è compreso nelle Storie della Passione di Gesù del registro centrale inferiore, nella parete sinistra guardando verso l&#39;altare. \nLa scena, anche se in cattivo stato di conservazione, mostra Gesù mentre regge la croce in spalla. Il figlio di dio sta uscendo dalla porta di Gerusalemme spintonato da armigeri che stanno davanti ai sommi sacerdoti Anna e Caifa. \nPiù indietro viene ritratta la Madonna che geme drammaticamente, forse la figura più riuscita dell&#39;intera scena. Dietro a Gesù si può notare una folla di persona, probabilmente discepoli e gente del posto. \nNello sfondo della parte sinistra dell’affresco si trova una struttura, probabilmente lo stesso tempio che viene descritto in altre scene del ciclo di affreschi.",
            textAuthor: "Scritto da Emma Vanin",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The Going to Calvary is a fresco by Giotto, datable to around 1303-1305. It is part of the cycle of the Scrovegni Chapel in Padua and is included in the Stories of the Passion of Jesus in the lower central register, on the left wall looking towards the altar. The scene, although in a bad state of preservation, shows Jesus holding the cross on his shoulder. The son of god is coming out of the Jerusalem gate pushed by armigers who stand in front of the high priests Anna and Caiaphas. Further back, the Madonna is portrayed dramatically moaning, perhaps the most successful figure in the whole scene. Behind Jesus, a crowd of people can be seen, probably disciples and locals. In the background of the left part of the fresco there is a structure, probably the same temple that is described in other scenes of the fresco cycle.",
            textAuthor: "Written by Emma Vanin",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 250,
            z: -375
        },
        to: {
            x: -2.8764441161900143,
            y: 17.61033873424214,
            z: 3.3189739802192473
        },
        title: "Crocifissione",
        subtitle: "Storie di Gesù",
        IT: {
            text: "La crocifissione fa parte del ciclo delle storie di Gesù e della Vergine, ciclo che ha come tema la salvezza dell’umanità. \nI dipinti, come questo, avevano lo scopo di aiutare le persone a guardare la scena come se fossero state testimoni personali della Crocifissione stessa, al fine di sentire più intensamente la natura della sofferenza di Cristo.\nCristo non indossa una corona di spine.\nL’aspetto tragico lo esprimono coloro che lo circondano: gli angeli che volano intorno a lui piangendo, Maria Maddalena ai piedi della croce, sostenuta da Giovanni e un’altra donna.\nIl cielo è di color blu intenso: colore della fede.\nLa croce, posta al centro divide due gruppi di persone: nel gruppo a sinistra ci sono le donne che sostengono Maria svenente, mentre a destra, c’è un gruppo di soldati che si litigano le vesti di Gesù.\nL’artista presenta dei personaggi che hanno un peso, un volume, che hanno una viva presenza umana: mostra la naturalezza delle figure. La naturalezza dei personaggi compare anche nel contrasto che c’è tra i comportamenti dei due gruppi di persone ai lati della croce.\nIl corpo di cristo non appare più sinuosamente curvato verso sinistra, ma è diritto, smagrito, appesantito dalla morte, dal viso scuro e dai capelli in disordine. Anche le proporzioni del corpo e la muscolatura appaiono più realistiche rispetto ai modelli precedenti. \nLa stesura è di qualità altissima, con una minuziosa cura del dettaglio che sfocia a tratti nel virtuosismo, come nel perizoma semitrasparente di Cristo.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The crucifixion is part of the cycle of the stories of Jesus and the Virgin, a cycle whose theme is the salvation of humanity.<br>Paintings, like this one, were intended to help people look at the scene as if they were personal witnesses of the Crucifixion itself, in order to feel more intensely the nature of Christ's suffering.<br>Christ does not wear a crown of thorns.<br>The tragic aspect is expressed by those around him: the angels flying around him crying, Mary Magdalene at the foot of the cross, supported by John and another woman.<br>The sky is deep blue: the color of faith.<br>The cross, placed in the center, divides two groups of people: the group on the left is the group of women who support the fainting Mary, while on the right, there is a group of soldiers who are fighting over the garments of Jesus.<br>The artist presents characters that have a weight, a volume, that have a living human presence: it shows the naturalness of the figures. The naturalness of the characters also appears in the contrast that exists between the behavior of the two groups of people on either side of the cross.<br>Christ's body no longer appears sinuously curved to the left, but is straight, thin, weighted down by death, with a dark face and untidy hair. Body proportions and musculature also appear more realistic than previous models.<br>The drafting is of the highest quality, with meticulous attention to detail that sometimes results in virtuosity, as in Christ's semitransparent thong.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 225,
            z: -125
        },
        to: {
            x: -3.8166682174236928,
            y: 17.122819343788294,
            z: 1.4679493143937279
        },
        title: "Compianto sul Cristo morto",
        subtitle: "Storie di Gesù",
        IT: {
            text: "Affresco realizzato da Giotto tra il 1303 e il 1305, appartiene al ciclo di affreschi delle storie di Cristo e tra questi è l'opera dove Giotto esprime in maniera evidente la drammaticità infatti rappresenta il pieno dolore umano.\nIn esso viene rappresentato Gesù dopo la sua deposizione dalla croce, circondato da vari personaggi che ne piangono la morte. Tutte le figure sono presentate  da una grande forza espressiva, da corpi vigorosi, ognuna con una propria postura e un proprio gesto di cura o desolazione per il dolore. Il manto di ogni figura definisce la massa e il gesto che compie. \nGiotto utilizza intensamente la tecnica del chiaroscuro che conferisce una monumentalità intensa. Tutto questo insieme ci da un immagine drammatica e universale.\n<strong>Cristo morto </strong> \nA sinistra c'è la figura del Cristo morto nella quale vengono rivolti gli sguardi sofferenti di tutte le figure dell affresco. È presentata nuda e questa naturalezza viene richiamata nell'albero spoglio e nelle rocce.\n<strong>Maria</strong>\nAffianco c'è la vergine sofferente che sorregge Cristo, è presentata da Giotto con un'espressione di dolore che viene messa in evidenza dalla diagonale della roccia che ricade su di essa.\n<strong>Tre donne</strong>\nLe due donne velate, poste di spalle sorreggono il capo e il braccio destro di Gesù in un tentativo di risveglio come a non voler credere che sia morto. La loro posizione è un'invenzione giottesca e ci coinvolge all'interno del dipinto, come se anche noi stessimo assistendo alla scena. Poi c'è la Maddalena piangente che ne sorregge i piedi.\n<strong>San Giovanni</strong>\nSan Giovanni è una delle figure più drammatiche, si trova al centro è presentato con le braccia che si allargano all'indietro e che grida il suo dolore.\n<strong>Gli angeli</strong>\nGiotto unisce in questo affresco due mondi: in basso quello dell'uomo, quello finito, sofferente per la situazione ma che non riesce a conceprila del tutto. Nella parte superiore il mondo dell'al di là, infinito, di un azzurro intenso con gli angeli che manifestano la loro disperazione in modo differente (strappandosi i capelli, coprendosi il volto, allargando le braccia) che son più vicini al cristo in quanto più simili al divino. Inoltre la loro espressione Giotto l'ha rappresentata con grande realismo annullando quasi la loro vera e propria spiritualità e tralasciando la vecchia tradizione dove venivano presentati sempre con la stessa espressione e gli stessi lineamenti e con bellezza formale.\nC'è uno spazio tridimensionale e naturalistico tipico della tradizione classica. La composizione pittorica è divisa da una diagonale che divide lo spazio della scena del Compianto dallo spazio paesaggistico e collega il mondo mortale verso il cielo.",
            textAuthor: "Scritto da Sara Bandiera",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "A fresco made by Giotto between 1303 and 1305, it belongs to the cycle of frescoes of the stories of<br>Christ and among these is the work where Giotto clearly expresses the drama in fact represents the full<br>human pain. In it Jesus is represented after his deposition from the cross, surrounded by various<br>characters who mourn his death. All the figures are presented by a great expressive force, by vigorous<br>bodies, each with a prorpia posture and a prorpio gesture of care or desolation for pain. The mantle of<br>each figure defines the mass and the gesture it makes. Giotto uses intensely the chiaroscuro technique<br>that gives an intense monumentality. All this together gives us a dramatic and universal image.<br>Dead Christ - To the left is the figure of the dead Christ in which the suffering looks of all the figures in<br>the fresco are turned. It is presented naked and this naturalness is recalled in the bare tree and in the<br>rocks.<br>Maria - Next to it is the suffering virgin who sustains Christ, is presented by Giotto with an expression of<br>pain that is highlighted by the diagonal of the rock that falls on it.<br>Three women - The two veiled women, placed behind them, hold Jesus' head and right arm in an<br>attempt to awaken as if they did not want to believe he was dead. Their position is a Giotto invention and<br>involves us inside the painting, as if we were also witnessing the scene. Then there is the weeping<br>Magdalene holding her feet.<br>Saint Giovanni - Saint Giovanni is one of the most dramatic figures, is in the center is presented with<br>arms that widen backwards and that cries out his pain.<br>The angels - In this fresco Giotto unites two worlds: at the bottom that of man, the finite one, suffering<br>for the situation but unable to fully conceprila. In the upper part the world of the beyond, infinite, of an<br>intense blue with the angels who manifest their despair in a different way (pulling their hair, covering their<br>faces, widening their hair) that are closer to the Christ as more similar to the divine. Moreover, Giotto’s<br>expression represented it with great realism, almost nullifying their true spirituality and leaving aside the<br>old tradition where they were always presented with the same expression and the same features and<br>formal beauty.<br>There is a three-dimensional and naturalistic space typical of the classical tradition. The pictorial<br>composition is divided by a diagonal that divides the space of the Lamentation scene from the landscape<br>space and connects the mortal world to the sky.",
            textAuthor: "Written by Sara Bandiera",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 225,
            z: 130
        },
        to: {
            x: -3.8033163173191906,
            y: 17.13288462232861,
            z: -1.521326526927677
        },
        title: "Resurrezione",
        subtitle: "Storie di Gesù",
        IT: {
            text: "Giotto rappresenta il passo del vangelo di Giovanni in cui Maria Maddalena incontra, senza riconoscerlo, Gesù risorto accanto al sepolcro. \nLa donna è disperata perché non trova più il corpo di Gesù, allora egli si rivela ma chiede a Maria di non trattenerlo perché deve salire al Padre. \nL’affresco della resurrezione appartiene al ciclo pittorico delle storie della Passione di Gesù. \nLa scena rappresenta due episodi: a sinistra il sepolcro vuoto con gli angeli seduti e le guardie addormentate; a destra la Maddalena inginocchiata davanti all’apparizione di Cristo risorto. Maria Maddalena è in un primo momento straziata dal dolore, poco dopo è piena di speranza all’annuncio di Gesù, allunga le braccia verso di lui. Il sarcofago è in marmo rosa, gli angeli vegliano, Gesù ha vinto le tenebre della notte e dona la luce della vita. \nCristo in piedi allunga un braccio per chiedere a Maria Maddalena di non toccarlo e di non trattenerlo perché deve salire al Padre.\nGli angeli seduti sul bordo del sarcofago annunciano la resurrezione di Cristo e sembrano dare a Maria la risposta che cerca: l’uomo in piedi accanto a lei è proprio il risorto. \nGli alberi sono secchi a sinistra idealmente prima della resurrezione mentre a destra sono rigogliosi. \nI soldati distesi in primo piano, addormentati e quasi sfiniti, hanno espressioni buffe e reali e dormono tranquillamente appoggiati ai loro scudi; non si accorgono né della presenza di Maria né del miracolo della risurrezione. Le vesti e le armature dei soldati sono dipinte con cura e precisione nei dettagli.",
            textAuthor: "Scritto da Irene Buttari",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "Giotto represents the passage from the Gospel of Giovanni in which Maria Maddalena meets, without recognizing him, the risen Jesus next to the tomb. The woman is desperate because she no longer finds the body of Jesus, so he reveals himself but asks Maria not to hold him back because she has to go up to the Father. The fresco of the resurrection belongs to the pictorial cycle of the stories of the Passion of Jesus. The scene represents two episodes: on the left the empty tomb with seated angels and sleeping guards; on the right the Maddalena kneeling before the apparition of the risen Christ. Maria Maddalena is at first tormented by her pain, shortly after she is full of hope at the announcement of Jesus, she stretches her arms towards him. The sarcophagus is in pink marble, the angels are watching, Jesus has conquered the darkness of the night and gives the light of life. Standing Christ stretches out his arm to ask Maria Maddalena not to touch him and not to hold him back because she has to go up to the Father. The angels seated on the edge of the sarcophagus announce the resurrection of Christ and seem to give Mary the answer of her who is looking for her: the man standing next to her is precisely her risen one. The trees are dry on the left ideally before the resurrection while on the right they are lush. The soldiers lying in the foreground, asleep and almost exhausted, have funny and real expressions and sleep peacefully leaning on their shields; they do not notice the presence of Maria or the miracle of the resurrection. The robes and armor of the soldiers are painted with care and precision in detail.",
            textAuthor: "Written by Irene Buttari",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 225,
            z: 400
        },
        to: {
            x: -2.8475923927292937,
            y: 17.853353427019456,
            z: -3.5047290987437454
        },
        title: "Ascensione",
        subtitle: "Storie di Gesù",
        IT: {
            text: "Artista: Giotto\nPeriodo: Pittura italiana del Rinascimento\nData di creazione: 1303 - 1305\nGenere: Arte cristiana\nUbicazione: Cappella degli Scrovegni, Padova\nL’ affresco Ascensione di Gesù al cielo databile al 1303-1305 è compreso nelle Storie della Passione di Gesù del registro centrale inferiore, nella parete sinistra guardando verso l&#39;altare, della meravigliosa Cappella di Scrovegni di Padova.\nLa scena mostra Cristo che si eleva in cielo con le mani alzate mentre due angeli immediatamente sotto di lui spiegano a chi assiste cosa sta accadendo. In basso, con gli sguardi tesi, gli apostoli sono dipinti in ginocchio, divisi in due gruppi insieme a Maria che, un po’ separata dal gruppo di sinistra, emerge in tutta la sua figura con il volto orante e insieme rapito da quello che uno degli angeli le dicono, indicando la figura di Gesù, che, come su una nuvola, con le braccia alzate e le mani protese verso l’alto quasi fuoriesce dal quadro visivo. Ai lati di Cristo completano la scena due cerchie angeliche e di santi simmetriche, tutti con le mani levate, che fanno eco al gesto ascendente di Cristo. Questi angeli risultano come trepidanti, in movimento ordinato, ma nel contempo ondulatorio.\nGiotto non costruisce i piani delle sfere celesti, come ci potremmo aspettare in una composizione gotica, ma si limita a farci comprendere che il luogo verso cui Gesù sta ascendendo è “fuori”, oltre la dimensione del quadro. Straordinarie sono infatti le mani del Cristo che Giotto non termina andando a chiudere la scena con la cornice dell’opera stessa: sono mani che continuano e anelano al Cielo, a Dio verso cui Gesù sta facendo ritorno.\nCuratissimi sono i dettagli, soprattutto le applicazioni dorate nelle vesti degli apostoli, degli angeli e di Gesù stesso, quest’ultima risulta una figura possente, molto fisica e descritta con una meticolosità tale da far intravedere perfino i denti.",
            textAuthor: "Scritto da Alessandro Delazzari",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The fresco <i>Ascension of Jesus into Heaven</i>, datable to 1303-1305, is included in the Stories of the Passion of Jesus in the lower central register, on the left wall looking towards the altar, of the beautiful Scrovegni Chapel in Padua.<br>The scene shows Christ rising to heaven with his hands raised while two angels immediately below him explain to onlookers what is happening. At the bottom, with their gazes tense, the apostles are painted kneeling, divided into two groups together with Mary.  She is a little separated from the group on the left and she emerges in all her figure with her face praying and at the same time raptured by what one of the angels is telling her, pointing to the figure of Jesus, who, as if on a cloud, with his arms raised and his hands stretched upwards almost comes out of the picture. At Christ's sides, two symmetrical circles of angels and saints complete the scene, all with their hands raised, echoing Christ's upward gesture. These angels appear to be trembling, in orderly but at the same time undulating movement.<br>Giotto does not construct the levels of the celestial spheres, as we might expect in a Gothic composition, but limits himself to making us understand that the place towards which Jesus is ascending is “outside”, beyond the dimension of the painting. The hands of Christ are extraordinary, and Giotto does not end the scene by closing the frame of the work itself: they are hands that continue and yearn for Heaven, for God to whom Jesus is returning.<br>The details have been carefully worked out, especially the gold applications on the robes of the apostles, angels and Jesus himself, who is a powerful, very physical figure described with such meticulousness that even his teeth could be seen.",
            textAuthor: "Written by Alessandro Delazzari",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 225,
            z: 630
        },
        to: {
            x: -2.166570376789649,
            y: 18.36673925442011,
            z: -4.199813345776855
        },
        title: "Pentecoste",
        subtitle: "Storie di Gesù",
        IT: {
            text: "“Mentre stava compiendosi il giorno della Pentecoste, si trovavano tutti insieme nello stesso luogo. Venne all’improvviso dal cielo un fragore, quasi un vento che si abbatté impetuoso, e riempì tutta la casa dove stavano. Apparvero loro lingue come di fuoco, che si dividevano, e si posarono su ciascuno di loro, e tutti furono colmati di Spirito Santo e cominciarono a parlare in altre lingue nel modo in cui lo spirito dava loro il potere di esprimersi.” \nCon queste parole “Il giorno della Pentecoste” viene descritto nelle sacre scritture.\nQuesta scena chiude le Storie della Passione di Gesù, collocate nel registro centrale inferiore della parete a sinistra dell’ingresso.\nLa scena è ambientata in una stanza descritta come una loggia traforata da archi a sesto acuto trilobati. \nAll&#39;interno su panche di legno stanno seduti undici apostoli. Ne manca uno, Giuda, nel frattempo morto. In linea con la tradizione iconografica più antica, non viene raffigurata la Madonna che invece, nei racconti biblici, era presente con altre donne nel momento in cui soffiò il vento dello Spirito sui seguaci di Cristo.\nL&#39;edificio è posto in scorcio verso sinistra, per assecondare la visione da parte dello spettatore idealmente al centro della cappella, un accorgimento usato anche in altre scene d&#39;angolo. Le lingue di fuoco che discendono su ciascuno dei presenti, Giotto le immagina simili a raggi di luce, di una luce rossa che irradia dall’alto, quindi da Dio Padre. \nRitenuta soprattutto opera di aiuti, la scena mostra tonalità delicate e una cura del dettaglio soprattutto nelle vesti e nei volti dei partecipanti.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "While the day of Pentecost was coming to an end, they were all together in the same place. Suddenly a roar came from heaven, almost a rushing wind, and filled the whole house where they were staying. Tongues like fire appeared to them, they split, and settled on each of them, and all were filled with the Holy Spirit and began to speak in other tongues in the way that the spirit gave them the power to express themselves. With these words “The day of Pentecost” is described in the holy scriptures.<br>This scene closes the Stories of the Passion of Jesus, located in the lower central register of the wall to the left of the entrance.<br>The scene is set in a room described as a loggia pierced by pointed trefoil arches.<br>Inside, eleven apostles are seated on wooden benches. One is missing, Judas, who has died in the meantime. In line with the most ancient iconographic tradition, the Madonna is not depicted who instead, in the biblical stories, was present with other women when she blew the wind of the Spirit on the followers of Christ.<br>The building is foreshortened to the left, ideally in the center of the chapel to support the viewer's vision, a device also used in other corner scenes. The tongues of fire that descend on each of those present, Giotto imagines them similar to rays of light, of a red light that radiates from above, therefore from God the Father. <br>Considered above all a work of aid, the scene shows delicate tones and an attention to detail especially in the clothes and faces of the participants.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 85,
            z: -745
        },
        to: {
            x: -1.9827765472168313,
            y: 19.3594106539761,
            z: 4.545133931312429
        },
        title: "Disperazione",
        subtitle: "Allegorie delle Virtù e dei Vizi",
        IT: {
            text: "Stato di abbattimento, di sconforto, provocato dall’incapacità di reagire di fronte alle avversità.\nS’impicca come l’idolo dell’infedeltà prefigura. Nell’angolo in alto a sinistra, un sinistro diavolone arpiona il capo per trascinarla nel fuoco dell’inferni del grande Giudizio Universale. \nVolto devastato, pugni contratti: questa è la tragica conseguenza del male liberamente scelto.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "State of dejection, despondency, caused by the inability to react in the face of adversity.<br>He hangs himself as the idol of infidelity foreshadowed. In the upper left corner, a sinister devil harpoons her head to drag her into the hellfire of the great Last Judgment. Devastated face, contracted fists: this is the tragic consequence of the liberally chosen evil.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 75,
            z: -510
        },
        to: {
            x: -2.6544988684926114,
            y: 19.224069561517545,
            z: 4.165521301326867
        },
        title: "Invidia",
        subtitle: "Allegorie delle Virtù e dei Vizi",
        IT: {
            text: "Desiderio di poter godere dello stesso bene che gli altri possiedono.\nÈ il vizio più diabolico e schifoso. Arsa dalla bramosia di possesso, tiene ben stretto con la sinistra il sacchetto dei propri averi, mentre la destra si protende bramosa, un po&#39; zampa artigliata un po&#39; bocca spalancata di velenosa serpe.\n Quella diabolica serpe che le scodinzola sulla nuca, le spunta da sotto il turbante, le esce dalla bocca e le entra negli occhi, avvelenandole lo sguardo. \nInvidia significa anche cecità: non vedere, o vedere tutto di malocchio, mentre il grande orecchio origlia maligno.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The desire to be able to enjoy the same good that others have.<br>It is the most diabolical and disgusting vice. Burned by the lust for possession, she holds the bag of her possessions tightly in her left hand, while her right reaches out eagerly, a bit clawed paw, a bit wide-open mouth of a poisonous snake. That diabolical snake that wags its tail on her neck, pokes out from under her turban, comes out of her mouth and enters her eyes, poisoning her gaze. Envy means blindness: not seeing, or seeing everything with the evil eye, while the big ear is malignant.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 75,
            z: -250
        },
        to: {
            x: -3.8608487379982286,
            y: 18.871444215046672,
            z: 2.969883644614022
        },
        title: "Infedeltà (Idolatria)",
        subtitle: "Allegorie delle Virtù e dei Vizi",
        IT: {
            text: "Violazione, inosservanza di un obbligo di fedeltà, atto o comportamento che ne è la dimostrazione concreta. \nHa lo sguardo bieco; zoppica, a motivo di una deformazione della gamba sinistra. Confida nell’idolo, retto con la destra, cioè in quella statuetta che l’ammalia offrendole con la destra un arboscello in fiore, mentre con la sinistra stringe una cordicella, la quale finisce con un nodo scorsoio al collo dell’adoratrice. \nQuesta, strozzata, precipiterà di lì a poco nel rosso fuoco infernale, trascinata dall’idolo.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "Violation, failure to comply with an obligation of fidelity, act or behavior which is the concrete demonstration thereof.<br>He has a sinister look; limps, due to a deformation of the left leg. He trusts in the idol, straight with his right hand, that is, in that statuette that charms her by offering her a flowering sapling with his right, while with his left he tightens a cord, which ends with a slip knot around the worshiper's neck. This, strangled, will soon fall into the infernal fire red, dragged by the idol.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 75,
            z: 0
        },
        to: {
            x: -4.799172228377261,
            y: 18.597165040935877,
            z: 2.9386454540195414e-16
        },
        title: "Ingiustizia",
        subtitle: "Allegorie delle Virtù e dei Vizi",
        IT: {
            text: "Violazione del diritto o delle legittime aspirazioni altrui. \nÈ un tiranno dal mento prominente e dalle mani artigliate come Lucifero; troneggia, armato di spada e di lancia uncinata, di fronte a una porta di città che sta venendo giù a pezzi. \nInselvatichita è la natura che gli sta di fronte, mentre la strada è infestata da predoni che uccidono, rubano, compiono ogni tipo di violenza.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "Violation of the right or legitimate aspirations of others.<br>He is a tyrant with a prominent chin and clawed hands like Lucifer; he is enthroned, armed with a sword and a hooked spear, in front of a city gate that is falling apart. Inselvatichita is the nature that is in front of him, while the road is infested with marauders who kill, steal, commit all kinds of violence.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 75,
            z: 260
        },
        to: {
            x: -3.8064453316841598,
            y: 18.887346749200013,
            z: -3.0451562653473285
        },
        title: "Ira",
        subtitle: "Allegorie delle Virtù e dei Vizi",
        IT: {
            text: "Odio come motivo di acceso risentimento o come causa di discordia.\nSi strappa le vesti, come il sommo sacerdote Caifa, in collera per le parole di Gesù, e come l’angioletto sotto il braccio sinistro di Gesù crocifisso, per l’incontentabile dolore. \nL’ira è espressa da: smorfia della bocca, naso troppo piccolo e quegli occhi che sembrano due lame.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "I hate it as a source of heated resentment or as a cause of discord.<br>She tears off her garments, like the high priest Caiaphas, in anger at the words of Jesus, and like the angel under the left arm of the crucified Jesus, for the insatiable pain. Look at the grimace of the mouth, the too small nose, and those eyes that look like two blades.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 75,
            z: 520
        },
        to: {
            x: -2.6187545896038746,
            y: 19.234517889192713,
            z: -4.190007343366198
        },
        title: "Incostanza",
        subtitle: "Allegorie delle Virtù e dei Vizi",
        IT: {
            text: "Mutabilità di comportamento; mancanza di fermezza o di perseveranza.\nIn precario equilibrio su una ruota che corre verso il basso, sta cadendo all’indietro, come suggerisce anche il mantello svolazzante: appena viene indotta in tentazione, ci cade.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "Behavioral mutability; lack of firmness or perseverance.<br>Precariously balanced on a wheel that runs downwards, she is falling backwards, as the fluttering cloak also suggests: as soon as she is tempted into temptation, she falls into it.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 325,
            y: 75,
            z: 650
        },
        to: {
            x: -2.2172036010749148,
            y: 19.35189433199349,
            z: -4.434407202149828
        },
        title: "Stoltezza",
        subtitle: "Allegorie delle Virtù e dei Vizi",
        IT: {
            text: "Mancanza di intelligenza e senso pratico o addirittura ottusità mentale.\nUn individuo fisicamente pesante ma interiormente “leggero”, inconsistente con la testa fra le nuvole. \nLe penne del capo, quelle che gli rivestono il corpo e la mano sinistra che mima una testa di struzzo: tutto in lui evoca gli uccelli. \nE di cosa va a caccia con quella clava? Forse di altri volatili suoi simili?",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "Lack of intelligence and practical sense or even mental dullness.<br>A physically heavy individual but inwardly “light”, inconsistent with his head in the clouds. The feathers on his head, those that cover his body, and his left hand mimics an ostrich's head: everything about him evokes birds. And what is he hunting with that club? Perhaps other birds similar to him?",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 240,
            y: 390,
            z: 775
        },
        to: {
            x: -1.3200968656614067,
            y: 17.744834521161764,
            z: -4.262812795364962
        },
        title: "Tradimento di Giuda",
        subtitle: "Storie di Gesù",
        IT: {
            text: "Questo affresco rappresenta l’incontro di Giuda con i sommi sacerdoti del tempio, riprendendo il Vangelo di Luca (22, 1-6):\n“ Si avvicina la festa degli Azzimi, chiamata Pasqua, e i sommi sacerdoti e gli scribi cercavano come toglierlo di mezzo, poiché temevano il popolo. Allora Satana entrò in Giuda, detto Iscariota, che era nel numero dei Dodici. Ed egli andò a discutere con i sommi sacerdoti e i capi delle guardie sul modo di consegnarlo nelle loro mani. Essi si rallegrarono e si accordarono di dargli del denaro. Egli fu d’accordo e cercava l’occasione propizia per consegnarlo loro di nascosto dalla folla.”\nA lato del Tempio di Gerusalemme, simboleggiato da un protiro retto da colonnine marmoree, i sommi sacerdoti, dopo aver assistito perplessi alla Cacciata dei mercanti dal Tempio da parte di Gesù, che prendono accordi con Giuda Iscariota per essere aiutati, da lui, a catturare il Cristo. \nL’apostolo traditore è raffigurato con alle spalle la sagoma del diavolo, che lo spinge letteralmente a commettere un atto empio. Allo stesso tempo , questo motivo pittorico viene percepito visivamente come una sorta di grottesca ripetizione, la brutta eco del profilo dello stesso Giuda Iscariota. \nGiuda rappresentato con lo sguardo attento e il profilo aguzzo, dotato di baffi e barbetta. \nIl mantello giallo, che Giotto gli fa indossare, faciliterà la sua individuazione nelle scene successive, come quella del Bacio di Giuda. \nSebbene già posseduto dal demonio Giuda venne raffigurato comunque con l&#39;aureola: se ne vedono tracce nell&#39;intonaco sciupato per l&#39;umidità.\nNell’interpretazione di questo evento evangelico, Giotto non si discosta dal suo modo preferito di comunicare a tutto ciò che sta accadendo in una visione di massima chiarezza e credibilità.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "This fresco represents the meeting of Judas with the high priests of the temple, taking up the Gospel of Luke (22, 1-6):<br>“The feast of Unleavened bread, called Passover, is approaching, and the high priests and scribes were looking for how to get it out of the way, because they feared the people. Then Satan entered into Judas, called Iscariot, who was of the number of the twelve.<br>And he went to discuss with the high priests and the chiefs of the guard how to deliver him into their hands. They rejoiced and agreed to give him money. He agreed and was looking for the right opportunity to deliver it to them secretly from the crowd.<br>At the side of the Temple of Jerusalem, symbolized by a porch supported by marble columns, the high priests, after having witnessed, perplexed, the Expulsion of the merchants from the Temple by Jesus, who make arrangements with Judas Iscariot to be helped by him to capture the Christ.<br>The traitorous apostle is depicted with the silhouette of the devil behind him, which literally pushes him to commit an impious act. At the same time, this pictorial motif is visually perceived as a kind of grotesque repetition, the ugly echo of the profile of Giuda Iscariota himself.<br>Judas represented with an attentive gaze and a sharp profile, equipped with a mustache and beard.<br>The yellow cloak, which Giotto makes him wear, will facilitate the identification of him in the following scenes, such as that of the Kiss of Judas.<br>Although already possessed by the devil, Judas was still depicted with a halo: traces of it can be seen in the plaster damaged by humidity.<br>In interpreting this evangelical event, Giotto does not deviate from his preferred way of communicating to everything that is happening in a vision of maximum clarity and credibility.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -240,
            y: 390,
            z: 775
        },
        to: {
            x: 1.3200968656614067,
            y: 17.744834521161764,
            z: -4.262812795364962
        },
        title: "Visitazione",
        subtitle: "Storie di Gesù",
        IT: {
            text: "La Visitazione è un affresco di Giotto, databile al 1306 circa e facente parte del ciclo della Cappella degli Scrovegni a Padova. È idealmente la cerniera tra le Storie di Maria e quelle di Cristo, posta all&#39;inizio di queste ultime nel registro centrale superiore sulla parete dell&#39;arcone. \nL&#39;incontro tra Maria ed Elisabetta avviene al di fuori di un edificio con un porticato retto da eleganti e sottili colonne in marmo screziato, con un fregio di girali all&#39;antica e mensole dello stesso materiale. Elisabetta, rappresentata più anziana, si piega verso Maria abbracciandola e rendendole omaggio. Due donne sono dietro Maria, elegantemente longilinee, una delle quali tiene un telo che le ricade dalla spalla, forse un&#39;allusione ai nascituri che andranno fasciati. La donna dietro Elisabetta invece, che indossa una cuffia, poggia una mano sul grembo, gesto tipico delle donne incinte, a simboleggiare lo stato delle due protagoniste. \nI profili affilati ed eleganti delle figure femminili hanno fatto pensare alle coeve sculture del gotico francese. \nLa gestualità è lenta e calcolata, i colori sono chiari, intrisi di luce, la plasticità delle figure è accentuata dal chiaroscuro e dal disegno robusto, con pieghe profonde nei mantelli (&quot;a cannula&quot;), esenti da schematismi. \nLa scena risale al termine del ciclo, come il Tradimento di Giuda sul lato opposto, quando venne ridimensionata la parete per modifiche strutturali alla zona absidale.",
            textAuthor: "Scritto da Tommaso Fiorotto",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The Visitation is a fresco by Giotto, datable to around 1306 and part of the cycle of the Scrovegni Chapel in Padua. It is ideally the hinge between the Stories of Mary and those of Christ, placed at the beginning of the latter in the upper central register on the wall of the arch.<br>The meeting between Mary and Elizabeth takes place outside a building with a small portico supported by elegant and thin columns in mottled marble, with a frieze of old-fashioned spirals and corbels of the same material. Elisabetta, represented older, bends towards Mary, embracing her and paying her homage. Two women are behind Maria, elegantly slender, one of whom holds a cloth that falls from her shoulder, perhaps an allusion to the unborn children who will be swaddled. The woman behind Elisabetta, on the other hand, wearing a cap, rests a hand on her lap, a typical gesture of pregnant women, to symbolize the state of the two protagonists.<br>The sharp and elegant profiles of the female figures made us think of contemporary French Gothic sculptures.<br>The gestures are slow and calculated, the colors are clear, imbued with light, the plasticity of the figures is accentuated by the chiaroscuro and the robust design, with deep folds in the cloaks (“cannula”), free from schematisms.<br>The scene dates back to the end of the cycle, like the Betrayal of Judas on the opposite side, when the wall was resized for structural changes to the apse area.",
            textAuthor: "Written by Tommaso Fiorotto",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 0,
            y: 600,
            z: 600
        },
        to: {
            x: 4.2582281263301025e-16,
            y: 16.406989291167044,
            z: -3.4771071375802776
        },
        title: "La missione dell'annuncio a Maria",
        subtitle: "Storie della Vergine",
        IT: {
            text: "Dio Invia l’arcangelo Gabriele. \nDall&#39;alto del suo trono Dio comanda all&#39;arcangelo Gabriele la sua missione da compiere con l&#39;Annunciazione. Due gruppi vari e movimentati di angeli si trovano a destra e a sinistra e rappresentano le legioni angeliche. Il raro prologo in cielo della frequentemente rappresentata scena dell’annunciazione mostra la formazione della decisione divina, che più in basso ha la sua attuazione terrena. \nSebbene in precario stato conservativo la scena spicca per la scioltezza con cui si dispongono i gruppi di angeli, occupando uno spazio astratto come lo sfondo celeste, ma reso reale più che mai dal loro disporsi in profondità. Essi sono liberi di muoversi, parlare tra loro, tenersi per mano, suonare e cantare, anticipando di più di un secolo gli idilliaci paradisi del Beato Angelico. Tra di essi, alle estremità, si vedono due gruppetti di angioletti musicanti.\nA differenza della maggior parte delle altre scene del ciclo, la lunetta e la sottostante Annunciazione sono impostate su uno schema simmetrico, forse per la loro particolare collocazione al centro della cappella, sull&#39;arco trionfale.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "From the height of his throne, God commands the archangel Gabriel his mission to accomplish with the Annunciation. The steps of the throne, so solemn in its centrality, recall the vault of the Doctors of the Church in Assisi. Two varied and moving groups of angels are found to the right and left and represent the angelic legions. The rare prologue in heaven of the frequently represented scene of the Annunciation shows the formation of the divine decision, which further down has its earthly implementation.<br>Although in a precarious state of conservation, the scene stands out for the ease with which the groups of angels are arranged, occupying an abstract space like the celestial background, but made real more than ever by their arrangement in depth. They are free to move, talk to each other, hold hands, play and sing, anticipating the idyllic paradises of Beato Angelico by more than a century. Between them, at the ends, two small groups of musician angels can be seen. Unlike most of the other scenes in the cycle, the lunette and the underlying Annunciation are set in a symmetrical pattern, perhaps due to their particular location in the center of the chapel, on the triumphal arch.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -240,
            y: 540,
            z: 775
        },
        to: {
            x: 1.2172708232538314,
            y: 17.159701412407724,
            z: -3.930770366757166
        },
        title: "Vergine annunciata",
        subtitle: "Storie della Vergine",
        IT: {
            text: "L&#39;Annunciazione è un doppio affresco di Giotto, databile al 1303-1305 circa, l’ opera è divisa nei due scomparti dell&#39;Angelo annunciante e della Vergine annunciata e fa parte del ciclo della Cappella degli Scrovegni a Padova. Si trova sull&#39;arco di trionfo presso l&#39;altare, al di sotto della lunetta con Dio avvia la Riconciliazione inviando l&#39;arcangelo Gabriele, che è la prima scena del programma teologico della Cappella. \nLa realizzazione terrena di quanto deciso da Dio nella lunetta soprastante, avviene in due finte architetture speculari. La prospettiva delle architetture tende verso l&#39;esterno e converge, idealmente, al centro della cappella. L&#39;architettura è al contempo elegante e sobria, con un&#39;attenta cura dei dettagli: i cassettoni, gli archetti trilobati, le cornici colorate, le mensole ornate. Alcune discordanze, anche rispetto alla scena soprastante, sono probabilmente dovute al ripensamento dell&#39;architettura nella zona absidale, legata alle proteste degli eremitani nel 1305. La cromia calda e densa è infatti la più matura del ciclo e preannuncia già gli affreschi della Cappella della Maddalena nella basilica inferiore di Assisi. \nL&#39;angelo (a sinistra) e Maria (a destra) sono entrambi inginocchiati e, nonostante la distanza fisica, sembrano rivolgersi un intenso sguardo; c&#39;è anche chi ha ipotizzato che le due architetture siano convenzionalmente da intendersi l&#39;una di fronte all&#39;altra. \nLo sfondo scuro delle stanze, illuminato dalla luce rossa dell&#39;amore divino, fa imporre l&#39;Annunciazione immediatamente allo spettatore che entra nella cappella. I gesti sono lenti e calibrati, di una lentezza solenne. La figura di Maria, che nelle scene precedenti era una fanciulla esile e timorosa, qui è trattata come personalità forte e drammatica, di notevole potenza espressiva, come avverrà poi negli episodi seguenti. Le sue braccia incrociate sono in un suggestivo scorcio. \nLa piena padronanza del profilo, recuperato dall&#39;arte antica e dall&#39;osservazione quotidiana, fece sorgere in Giotto anche il dubbio su come rappresentare le aureole, come si deduce bene in questa scena. Esse, a differenza di scene più tarde, dovevano essere considerate dischetti dorati apposti sul retro del capo e non auree luminose sferiche che ha rappresentato comprimendole in forme ovali, rappresentando quindi i primi scorci del genere, ben prima delle sperimentazioni prospettiche di Piero della Francesca.",
            textAuthor: "Scritto da Nicolò Diotallevi",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The Annunciation is a double fresco by Giotto, datable to about 1303-1305, the work is divided into the two compartments of the Announcing Angel and the Announced Virgin and is part of the cycle of the Scrovegni Chapel in Padua. It is located on the triumphal arch at the altar, below the lunette with God initiates the Reconciliation by sending the archangel Gabriel, which is the first scene of the theological program of the Chapel.<br>The earthly realization of what God decided in the lunette above, takes place in two false mirror architectures. The perspective of the architecture tends towards the outside and ideally converges at the center of the chapel. The architecture is both elegant and sober, with careful attention to detail: the drawers, the trefoil arches, the colored frames, the ornate shelves. Some discrepancies, also with respect to the scene above, are probably due to the rethinking of the architecture in the apse area, linked to the protests of the hermits in 1305. The warm and dense color is in fact the most mature of the cycle and already heralds the frescoes of the Maddalena Chapel in the lower basilica of Assisi.<br>The angel (left) and Mary (right) are both kneeling and, despite the physical distance, they seem to be looking at each other intensely; there are also those who have hypothesized that the two architectures are conventionally to be understood as facing each other.<br>The dark background of the rooms, illuminated by the red light of divine love, makes the Annunciation immediately impose on the spectator who enters the chapel. The gestures are slow and calibrated, with a solemn slowness. The figure of Mary, who in the previous scenes was a slender and fearful girl, is treated here as a strong and dramatic personality, of considerable expressive power, as will happen later in the following episodes. Her crossed arms are in a suggestive glimpse.<br>The full mastery of her profile, recovered from ancient art and daily observation, also raised in Giotto the doubt about how to represent the halos, as can be clearly deduced in this scene. They, unlike later scenes, had to be considered golden discs affixed to the back of the head and not spherical luminous auras that he represented by compressing them into oval shapes, thus representing the first glimpses of the genre, well before the perspective experiments of Piero della Francesca.",
            textAuthor: "Written by Nicolò Diotallevi",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 5,
            y: 300,
            z: -600
        },
        to: {
            x: -0.03676371206706406,
            y: 17.6471224277079,
            z: 4.411645448047687
        },
        title: "Giudizio Universale",
        subtitle: "",
        IT: {
            text: "La grande parete sopra la porta di ingresso, in cui si apre una trifora (tipo di finestra divisa in verticale da tre aperture), contiene un&#39;ampia rappresentazione del Giudizio universale svolto in maniera tradizionale, anche se non mancano innovazioni. \nInnanzitutto, Giotto cercò di unificare in un&#39;unica scena l&#39;intera rappresentazione del Giudizio, del Paradiso e dell&#39;Inferno, abolendo le suddivisioni e coinvolgendo tutte le figure in un unico spazio. \nAl centro campeggia, dentro una mandorla iridata retta da angeli, un grande Cristo giudice che domina un unico grande scenario. Cristo non siede su un vero e proprio trono, ma su una sorta di nube iridata, sotto la quale si trovano alcune rappresentazioni simboliche, già interpretate come i simboli degli evangelisti. Uno studio più recente vi ha invece riconosciuto qualcosa di più complesso: vi si vedono un angelo, un uomo con testa leonina, un centauro, simbolo secondo i bestiari medievali della doppia natura di Cristo, umana e divina, e un orso con un pesce , simbolo della pesca delle anime oppure, al contrario, del sacrificio di Cristo (il pesce) per redimere la bestialità della razza umana. \nGesù rappresenta il fulcro dell&#39;intera scena, che genera l&#39;inferno con la sinistra dell&#39;aura e rivolge lo sguardo e la mano destra agli eletti, in processione alla sua destra. Verso di lui tendono a orientarsi tutti i nuclei delle figure. Tutto di lui è aperto verso gli eletti, alla sua destra: lo sguardo, la piaga, il costato, mentre la sinistra è chiusa sui reprobi dell&#39;inferno. Intorno alla mandorla stanno i serafini. In trono disposti a semicerchio, intorno a Gesù, ci sono i dodici apostoli. \nLa trifora non è solo un&#39;apertura luminosa, ma è il trono dal quale Dio scende e giudica. I due fiorellini, posti nella trifora, di sei petali ciascuno, corrispondono numerologicamente ai due gruppi di sei apostoli scesi con Lui. \nIn alto si trovano nove affollate schiere angeliche, divise in due gruppi simmetrici e in file che scalano in profondità; la diversa inclinazione delle teste cerca di sfuggire all&#39;appiattimento della visione frontale, mentre al centro si allineano su troni gli apostoli. \nAi lati della mandorla angeli suonano le trombe dell&#39;Apocalisse risvegliando i morti, che si levano dai crepacci della terra in basso a sinistra. Poco oltre si trova la rappresentazione di Enrico degli Scrovegni e di un altro personaggio che offrono un modello della cappella a Maria accompagnata da san Giovanni e santa Caterina d&#39;Alessandria. \nMaria è mediatrice tra la fragilità umana e la misericordiosa giustizia divina. \nLa forma dell&#39;edificio è fedele a quella esistente, anche se l&#39;abside mostra un ampio giro di cappelle mai realizzato. Secondo la tradizione, con tale offerta Enrico lava il peccato di usura della sua famiglia, così noto che anche Dante Alighieri aveva indicato suo padre (Rinaldo degli Scrovegni) tra i peccatori nel girone degli usurai dell&#39;Inferno. \nLa fisionomia di Enrico è giovanile e riproduce fedelmente le fattezze che, invecchiate, si vedono anche nella sua tomba marmorea presente nella cappella. \nNella parte più alta dell&#39;affresco si trovano gli astri del sole e della luna, mossi da due arcangeli che mossi dalla curiosità si affacciano da nubi &quot;staccando&quot; e arrotolando il cielo come se fosse una pesante carta da parati. Essi rivelano alle loro spalle le mura dorate e tempestate di gemme della Gerusalemme celeste.\nLa prima schiera degli eletti è in cattivo stato di conservazione. Preceduta da due angeli, contiene una Vergine Maria giovane e bruna, che sembra accompagnare per mano verso Cristo il primo della fila, forse Giovanni Battista. Tra le figure si riconoscono dubitativamente alcuni santi come san Giuseppe, Gioacchino, san Simeone.\nNelle fasce inferiori, divise dalla croce retta da due angeli, sono messi in scena il paradiso, a sinistra, e l&#39;inferno, a destra. \nIl paradiso mostra una serie ordinata di angeli, santi e beati, mentre nel secondo i dannati vengono tormentati dai diavoli e avvolti dalle fiamme che si sprigionano dalla mandorla di Cristo. Dalla mandorla sgorgano quattro fiumi infernali che trascinano nell&#39;abisso gruppi di dannati spinti da plumbei demoni. Il primo fiume travolge gli usurai, caratterizzati dal bianco sacchetto di sporco denaro legato al collo. Più in basso, impiccato e sventrato, sta Giuda Iscariota. \nA sinistra di Cristo Giudice, in basso, sta Lucifero con artigli bestiali e due bocche ed un serpente che gli esce dalle orecchie mentre sta straziando alcune anime e siede sul trono del biblico Leviatan, emblema del male di questo mondo. \nLo schema delle pene e dei gironi si rifà a tradizioni diverse dall&#39;Inferno di Dante. \nDi proporzioni piccolissime, i dannati formicolano tra le angherie a cui i diavoli scimmieschi li sottopongono, esposti al ludibrio e alla berlina, denudati, violati, appesi per i capelli o per i genitali, scherniti e torturati. \nAl caos dell&#39;Inferno, per contrapposizione, a destra stanno gli eletti. Dal basso all&#39;alto si nota una schiera tripartita: anime che escono stupite ed oranti dalla terra; la grande processione degli eletti, sopra, guidati da Maria, gli antichi santi dell&#39;Antico Testamento e della Chiesa primitiva.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The large wall above the entrance door, in which a three-light window opens (a type of window divided vertically by three openings), contains a large representation of the Last Judgment carried out in a traditional way, although there is no lack of innovations.<br>First of all, Giotto tried to unify the entire representation of Judgment, Heaven and Hell in a single scene, abolishing the subdivisions and involving all the figures in a single space.<br>In the center, inside an iridescent almond supported by angels, stands a great Christ the judge who dominates a single large scenario. Christ does not sit on a real throne, but on a sort of rainbow cloud, under which there are some symbolic representations, already interpreted as the symbols of the evangelists. A more recent study has instead recognized something more complex: it shows an angel, a man with a lion's head, a centaur, symbol according to the medieval bestiaries of the double nature of Christ, human and divine, and a bear with a fish, symbol of fishing for souls or, on the contrary, of the sacrifice of Christ (the fish) to redeem the bestiality of the human race.<br>Jesus represents the fulcrum of the whole scene, which generates hell with the left of the aura and turns his gaze and right hand to the elect, in procession to his right. All the nuclei of the figures tend to orient themselves towards him. Everything about him is open to the elect, to the right of him: the gaze, the wound, the side, while the left is closed on the reprobate of hell. Around the almond are the seraphs. The twelve apostles are enthroned in a semicircle around Jesus.<br>The trifora is not only a luminous opening, but it is the throne from which God descends and judges. The two small flowers, placed in the trifora, of six petals each, correspond numerologically to the two groups of six apostles who went down with him.<br>At the top are nine crowded angelic hosts, divided into two symmetrical groups and in rows that scale in depth; the different inclination of the heads tries to escape the flattening of the frontal vision, while in the center the apostles are aligned on thrones.<br>On the sides of the almond, angels sound the trumpets of the Apocalypse, awakening the dead, who rise from the crevices of the earth in the lower left. A little further on is the representation of Enrico degli Scrovegni and another character who offer a model of the chapel to Mary accompanied by St. John and St. Catherine of Alexandria.<br>Mary is the mediator between human frailty and merciful divine justice.<br>The shape of the building is faithful to the existing one, even if the apse shows a large circle of chapels never built. According to tradition, with this offer Enrico washes the sin of usury of his family, so well known that Dante Alighieri had also indicated his father (Rinaldo degli Scrovegni) among the sinners in the circle of usurers of Hell.<br>Enrico's physiognomy is youthful and faithfully reproduces the features that, aged, can also be seen in his marble tomb in the chapel.<br>In the highest part of the fresco there are the stars of the sun and the moon, moved by two archangels who, moved by curiosity, look out from clouds “detaching” and rolling up the sky as if it were a heavy wallpaper. They reveal behind them the golden, gem-studded walls of the heavenly Jerusalem.<br>The first group of the elect is in a bad state of conservation. Preceded by two angels, it contains a young and dark Virgin Mary, who seems to lead the first in line, perhaps John the Baptist, by the hand towards Christ. Among the figures we doubtfully recognize some saints such as Saint Joseph, Joachim, Saint Simeon.<br>In the lower bands, divided by the cross held up by two angels, heaven on the left and hell on the right are staged.<br>Heaven shows an ordered series of angels, saints and blessed, while in the second the damned are tormented by devils and enveloped by the flames that emanate from the almond of Christ. From the almond gush four infernal rivers that drag groups of the damned into the abyss pushed by leaden demons. The first river overwhelms the usurers, characterized by the white bag of dirty money tied around the neck. Lower down, hanged and gutted, stands Judas Iscariot.<br>To the left of Christ the Judge, below, stands Lucifer with bestial claws and two mouths and a snake coming out of his ears while he is tearing up some souls and sitting on the throne of the biblical Leviathan, emblem of the evil of this world.<br>The pattern of penalties and rounds refers to traditions other than Dante's Inferno.<br>Of very small proportions, the damned swarm among the oppressions to which the ape-like devils subject them, exposed to mockery and derision, stripped naked, violated, hung by the hair or genitals, mocked and tortured.<br>To the chaos of Hell, by contrast, are the e's on the right beds. From bottom to top, a tripartite group can be seen: souls who come out of the earth amazed and praying; the great procession of the elect, above, led by Mary, the ancient saints of the Old Testament and of the primitive Church.<br>A tradition indicates in the fourth person in the foreground in the ranks of the blessed, with a white cap on his head, a self-portrait of Giotto.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 88,
            z: -750
        },
        to: {
            x: 1.9709077576861795,
            y: 19.345052191291977,
            z: 4.548248671583491
        },
        title: "Speranza",
        subtitle: "Allegorie delle Virtù e dei Vizi",
        IT: {
            text: "Attesa fiduciosa, più o meno giustificata, di un evento gradito o favorevole.\nCon volto pacificato spicca il volo, le mani protese verso la corona della gloria, verso il paradiso del Giudizio universale. \nIl corpo, il capo, le braccia: ogni dettaglio propone il Cristo dell’Ascensione.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "Confident expectation, more or less justified, of a welcome or favorable event.<br>With a pacified face he takes flight, his hands stretched out towards the crown of glory, towards the paradise of the Last Judgment. The body, the head, the arms: every detail proposes the Christ of the Ascension.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 75,
            z: -505
        },
        to: {
            x: 2.6726576039120125,
            y: 19.218761623471874,
            z: 4.152898738386358
        },
        title: "Carità",
        subtitle: "Allegorie delle Virtù e dei Vizi",
        IT: {
            text: "L’amore che unisce gli uomini con Dio, e tra loro attraverso Dio.\nIl capo aureolato, coronato di fiori, lo sguardo intensamente rivolto a Gesù, a cui con una mano offre il cuore, mentre con l’altra mano offre al prossimo una canestra piena di fiori, frutti e spighe. \nLa carità fiorisce come gratitudine per il fatto di essere amorevolmente amati e preferiti da Gesù. Donare al prossimo e calpestare l’idolo dell’avere viene come conseguenza. \nÈ la virtù più bella.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The love that unites men with God, and with each other through God.<br>The haloed head, crowned with flowers, the gaze turned intensely to Jesus, to whom she offers her heart with one hand, while with the other hand she offers the neighbor a basket full of flowers, fruits and ears. Charity flourishes as gratitude for the fact of being lovingly loved and preferred by Jesus. Giving one's neighbor and trampling on the idol of having comes as a consequence. It is the most beautiful virtue.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 75,
            z: -250
        },
        to: {
            x: 3.8608487379982286,
            y: 18.871444215046672,
            z: 2.969883644614022
        },
        title: "Fede",
        subtitle: "Allegorie delle Virtù e dei Vizi",
        IT: {
            text: "Complesso dei principi seguiti nella vita morale, il fatto di credere con assoluta convinzione nella verità e giustezza di un assunto.\nForte e sicura, ti guarda dritto negli occhi. \nDal mantello le spunta la chiave, il segno del Papa che ha il dovere di custodire la fede. Con la sinistra regge un cartiglio su cui sta scritto il credo; con la destra una croce ad asta che, giù a terra, sta frantumando l’idolo; sotto i piedi calpesta gli oroscopi. \nScismi ed eresie hanno aperto dolorosi strappi nel mantello e nella tunica di lei, ma non ne hanno rovinato il volto.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "Complex of the principles followed in the moral life, the fact of believing with absolute conviction in the truth and correctness of an assumption.<br>Strong and confident, she looks you straight in the eye. The key appears from her cloak, the sign of the Pope who has the duty to keep the faith intact. With her left hand she holds a scroll on which the creed is written; with the right a pole cross that, down on the ground, is shattering the idol; under her feet he tramples the horoscopes. Schisms and heresies have opened painful tears in her cloak and in her tunic, but they have not ruined her face.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 75,
            z: 5
        },
        to: {
            x: 4.798649072303501,
            y: 18.597317963480513,
            z: -0.07382537034313162
        },
        title: "Giustizia",
        subtitle: "Allegorie delle Virtù e dei Vizi",
        IT: {
            text: "Volontà di riconoscere e rispettare il diritto di ognuno mediante l’attribuzione di quanto gli è dovuto secondo la ragione e la legge. \nSiede, regale, su un trono prezioso, di fronte alla porta della città. Regge una bilancia con cui pesa ogni cosa con grande equilibrio, com’è scritto sotto. Con la destra regge un piatto sul quale sta un angelo che incorona per bene, mentre sta giustiziando il male.\n Nella predella ai suoi piedi, quattro cavalieri procedono sicuri, dirigendosi verso un villaggio in festa, dove si suona e si danza.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "You will want to recognize and respect the right of everyone by attributing what is due to them according to reason and law.<br>She sits royally on a precious throne opposite the city gate. She holds a scale with which she weighs everything with great balance, as it is written below. With her right hand she holds a plate on which stands an angel whom she crowns for good, while she is executing evil. In the dais at her feet, four horsemen proceed safely, heading towards a festive village, where she plays and dances.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 75,
            z: 260
        },
        to: {
            x: 3.8064453316841598,
            y: 18.887346749200013,
            z: -3.0451562653473285
        },
        title: "Temperanza",
        subtitle: "Allegorie delle Virtù e dei Vizi",
        IT: {
            text: "Capacità di controllare e mantenere nei giusti limiti il soddisfacimento degli appetiti naturali.\nHa la spada fasciata con una lunga cintura di cuoio, e la bocca tenuta a freno da una briglia come si fa coi cavalli, perché “uccide più la lingua che la spada”.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "Ability to control and keep the satisfaction of natural appetites within the right limits.<br>She has her sword bandaged with a long leather belt, and her mouth held in check by a bridle as is done with horses, because she “kills more the tongue than the sword”.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 75,
            z: 520
        },
        to: {
            x: 2.6187545896038746,
            y: 19.234517889192713,
            z: -4.190007343366198
        },
        title: "Fortezza",
        subtitle: "Allegorie delle Virtù e dei Vizi",
        IT: {
            text: "Accentuata capacità di azione, reazione e resistenza. \nEretta, decisa, con la destra brandisce una mazza, con la sinistra sorregge una grande scudo e un leone rampante. \nUna pelle di leone le fa da mantello: la testa della fiera come elmo, le zampe anteriori annodate al collo, quelle posteriori in vita. Forte come un leone, vigile come una sentinella nella notte.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "Emphasized capacity for action, reaction and resistance.<br>She erect, determined, with the right she wields a club, with the left she holds a large shield and a rampant lion. A lion's skin acts as a cloak: the fair's head as a helmet, her front legs knotted around her neck, her hind legs at the waist. Strong as a lion, alert as a sentry in the night.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -280,
            y: 65,
            z: 650
        },
        to: {
            x: 1.9640057467293035,
            y: 19.40378396974289,
            z: -4.559299054907314
        },
        title: "Prudenza",
        subtitle: "Allegorie delle Virtù e dei Vizi",
        IT: {
            text: "Atteggiamento cauto ed equilibrato di chi, intuendo la presenza di una pericolo o prevedendo le conseguenze dei suoi atti, si comporta in modo da non correre inutili rischi e da evitare a sé e ad altri qualsiasi possibile danno.\nEvoca le vergini prudenti del vangelo, opposte alle vergini stolte; è la virtù dell’insegnante. \nSiede in cattedra, davanti a un libro. In una mano ha il compasso e nell’altra uno specchio: si guarda prudentemente alle spalle, imparando dalla tradizione. Ma quello specchio è anche un invito alla riflessione.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "A cautious and balanced attitude of those who, sensing the presence of a danger or foreseeing the consequences of their actions, behave in such a way as not to run unnecessary risks and to avoid any possible damage to themselves and others.<br>It evokes the prudent virgins of the gospel, opposed to the foolish virgins; it is the virtue of the teacher. He sits in the chair, in front of a book. In one hand he has a compass and in the other a mirror: he carefully looks over his shoulder, learning from tradition. But that mirror is also an invitation to reflection.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 610,
            z: -600
        },
        to: {
            x: 1.749715823672447,
            y: 16.60824317257341,
            z: 3.230244597549133
        },
        title: "Incontro alla Porta Aurea",
        subtitle: "Storie di San Gioacchino e di Sant'Anna",
        IT: {
            text: "Gioacchino viene cacciato dal  Tempio di Gerusalemme a causa della sua sterilità. Infatti, a quei tempi si pensava che se un uomo era sterile non era benedetto da Dio. \nGioacchino, quindi, si rifugiò in ritiro presso i pastori delle montagne. \nIntanto Anna, convinta di essere rimasta vedova, riceve un miracoloso annuncio da un angelo che le aveva rivelato che presto avrebbe avuto un bambino. \nPure Gioacchino riceve in sogno la visita di un angelo, che lo conforta dicendogli come Dio avesse ascoltato le sue preghiere e dovesse tornare a casa dalla moglie. \nLa scena mostrata dall’affresco in questione, dunque, rappresenta il toccante incontro tra i due, che secondo lo Pseudo Matteo (3,5), avvenne davanti alla Porta d&#39;Oro o Porta Aurea di Gerusalemme, dopo che entrambi erano stati avvisati da messaggeri divini. Da sinistra proviene infatti Gioacchino, seguito da un pastore, e da destra Anna, seguita da un gruppo di donne diversificate per classe sociale, studiate accuratamente nelle acconciature e negli abiti. I due consorti vanno incontro l&#39;uno all&#39;altro e, subito fuori dalla porta, su un ponticello, si scambiano un affettuoso bacio, che allude alla procreazione: infatti Anna rimase subito dopo incinta.\nL&#39;architettura della porta ricorda l&#39;arco di Augusto di Rimini. Celebre è la naturalezza della scena, col pastore che incede per metà tagliato fuori dalla scena o col bacio e l&#39;abbraccio reciproco della coppia, sicuramente il più realistico dipinto fino ad allora e che rimarrà tale per quasi due secoli. \nLa coppia come una &quot;piramide plastica&quot; dalla grande forza espressiva. \nEmblematica è la figura vestita di nero, colore raro in Giotto, che si copre metà del volto col mantello: forse un&#39;allusione allo stato di vedovanza tenuto fino ad allora da Anna.\nLa luce ha un ruolo chiave nella composizione, definendo il volume delle figure e anche la profondità spaziale, come mostrano i pilastri posteriori delle altane nelle torri, dipinti in ombra. \nPrevalgono le tinte pastello e molto curati sono i dettagli, soprattutto nel gruppo delle ricche donne. \nBilanciato con sapienza è il rapporto tra figure e architettura, che non è un semplice sfondo, ma il vero palcoscenico dell&#39;azione, abitato dai personaggi.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "Joachim after being expelled from the Temple of Jerusalem to be deemed sterile. In those days it was thought that if a man was barren he was not blessed by God.<br>Joachim, therefore, took refuge in retreat with the shepherds of the mountains.<br>Meanwhile, Anna, convinced that she was a widow, she receives a miraculous announcement from an angel who had revealed to her that she would soon have a baby.<br>Joachim also receives in a dream the visit of an angel, who comforted him by telling him how God had listened to his prayers and had to go home to his wife.<br>The scene shown by the fresco in question, therefore, represents the touching meeting between the two, which according to Pseudo Matthew (3,5), took place in front of the Golden Gate or Golden Gate of Jerusalem, after both had been warned by divine messengers. From the left comes Joachim, followed by a shepherd, and from the right Anna, followed by a group of women diversified by social class, carefully studied in hairstyles and dresses. The two spouses go to meet each other and, immediately outside the door, on a small bridge, they exchange an affectionate kiss, which alludes to procreation: in fact Anna was immediately pregnant afterwards.<br>The architecture of the door recalls the Arch of Augustus of Rimini. Famous is the naturalness of the scene, with the shepherd who walks halfway cut out of the scene or with the kiss and the mutual embrace of the couple, certainly the most realistic painting until then and which will remain so for almost two centuries. The couple like a “plastic pyramid” with great expressive power.<br>Emblematic is the figure dressed in black, a rare color in Giotto, who covers half of his face with a cloak: perhaps an allusion to the state of widowhood held up to then by Anna.<br>Light plays a key role in the composition, defining the volume of the figures and also the spatial depth, as shown by the rear pillars of the roof terraces in the towers, painted in shadow.<br>Pastel shades prevail and details are well cared for, especially in the group of rich women.<br>Balanced with wisdom is the relationship between figures and architecture, which is not a simple background, but the real stage of the action, inhabited by the characters.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 610,
            z: -375
        },
        to: {
            x: 2.026269597868586,
            y: 16.07215431797782,
            z: 2.3380033821560606
        },
        title: "Il sogno",
        subtitle: "Storie di San Gioacchino e di Sant'Anna",
        IT: {
            text: "Il Sogno di Gioacchino è un affresco (200x185 cm) di Giotto, databile al 1303-1305 circa e situato nel registro più alto della parete destra, guardando verso l&#39;altare. \nL&#39;ambientazione della scena è la stessa di quella del Ritiro di Gioacchino tra i pastori. L&#39;uomo anziano si è addormentato davanti alla capanna delle greggi e un angelo gli appare in sogno annunciandogli la prossima nascita di Maria, sua figlia. L&#39;angelo tiene in mano un bastone impugnato come uno scettro, dal quale fuoriescono in cima tre foglioline, simbolo della Trinità. \nLa figura di Gioacchino accovacciato e dormiente è una massa plastica piramidale di stampo scultoreo, col panneggio trattato in modo da rendere visibile il corpo sottostante, amplificato nella massa, e lo stringersi del tessuto per avvolgere il corpo. La figura è stata messa in relazione con una analoga di Giovanni Pisano (da alcuni attribuita ad Arnolfo di Cambio) nel pulpito del Duomo di Siena.\nAssistono due pastori ritratti con cura dei dettagli (dall&#39;abito e il cappello alle calzature, fino al bastone al quale uno si appoggia impigliando una parte della veste) e vicini al gregge, che riposa o bruca, e al cane. Attenta è anche la rappresentazione degli arbusti dell&#39;aspro paesaggio montano, curati con precisione da miniatore.\nBen studiata appare la composizione, con la linea di forza del crinale roccioso parallela all&#39;andamento dell&#39;angelo e che culmina verso la figura di Gioacchino, dirigendosi senza esitazioni allo sguardo dello spettatore. \nBilanciato con sapienza è il rapporto tra figure e paesaggio, che non è un semplice sfondo, ma il vero palcoscenico dell&#39;azione, abitato dai personaggi. La stesura è morbida con un uso intenso dei colori e un sapiente uso delle luci e delle ombre per evidenziare la plasticità delle figure.",
            textAuthor: "Scritto da Aurora Bozzo",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "“Il Sogno di Gioacchino” is a fresco (200x185 cm) by Giotto, dating to about 1303-1305 and located in the highest register of the right wall, looking towards the altar.<br>The setting of the scene is the same as that of Joachim’s Retreat among the shepherds. The old man fell asleep in front of the sheep hut and an angel appears to him in a dream announcing the next birth of Mary, his daughter. The angel holds in his hand a stick held like a sceptre, from which emerge on top three leaflets, symbol of the Trinity. The figure of Joachim crouching and sleeping is a pyramidal plastic mass of sculptural mould, with the drapery treated in such a way as to make visible the underlying body, amplified in the mass, and the tightening of the fabric to wrap the body. The figure was related to a similar one by Giovanni Pisano (attributed by some to Arnolfo di Cambio) in the pulpit of the Cathedral of Siena.<br>They assist two shepherds portrayed with care of details (from the dress and the hat to the shoes, up to the stick to which one leans entangling a part of the garment) and close to the flock, which rests or burns, and to the dog. Careful is also the representation of the shrubs of the rugged mountain landscape, cured with precision as a illuminator.<br>The composition appears well studied, with the line of force of the rocky ridge parallel to the course of the angel and that culminates towards the figure of Joachim, directing without hesitation the gaze of the spectator. Balanced with wisdom is the relationship between figures and landscape, which is not a simple background, but the real stage of the action, inhabited by the characters. The coat is soft with an intense use of colors and a wise use of lights and shadows to highlight the plasticity of the figures.",
            textAuthor: "Written by Aurora Bozzo",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 610,
            z: -125
        },
        to: {
            x: 2.2574888505706165,
            y: 15.623944689663112,
            z: 0.8682649425271601
        },
        title: "Il sacrificio",
        subtitle: "Storie di San Gioacchino e di Sant'Anna",
        IT: {
            text: "Questo affresco è stato realizzato da Giotto di Bondone tra il 1303 e il 1305 circa, ha un’altezza complessiva di circa 208 cm ed è largo 220cm.\nCi troviamo tra le montagne, come è possibile osservare dallo sfondo dell’opera, ambiente rappresentato da due spuntoni rocciosi.\nBilanciato è il rapporto tra figure e paesaggio, che è il vero palcoscenico dell&#39;azione, abitato dai personaggi. \nQui è raffigurata la scena in cui San Gioacchino sacrifica un agnello a Dio su un altare. È possibile intuire l’avvenimento di questo sacrificio poiché in cima all’altare si trova il piccolo scheletro di un agnello morto. Dall&#39;offerta sacrificale si leva una piccola figura di frate, un&#39;apparizione simbolica in parte aggiunta a secco e oggi quasi-scomparsa. \nAlla presenza di un pastore che prega, con vicino una parte del gregge, l&#39;anziano si sporge verso l&#39;altare per soffiare sul fuoco e cuocere l&#39;agnello. Tale offerta è stata fatta per chiedere la grazia di un figlio a Dio, il quale sembra aver accettato e ad indicarlo è la presenza di una mano tesa versa l’anziano, che simboleggia la mano di Dio pronto ad aiutarlo.\nQuesto antico sacrificio fatto da Gioacchino è icona di quello che in futuro sarà il sacrificio eucaristico.\nBen studiata è la composizione, con linee di forza sull&#39;altare del sacrificio e la figura di Gioacchino molto convincente pur in una posizione insolita. \nIl pastore è rappresentato con un cappello e calzature pesanti, mentre le pecore sono colte in atteggiamenti studiati , infatti i due maschi si sfidano a cornate, altri stanno sdraiati in tranquillità, altri brucano gli arbusti.",
            textAuthor: "Scritto da Greta Beraldo",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "This fresco was made by Giotto di Bondone between about 1303 and 1305, has a total height of about 208 cm and is 220cm wide.<br>We are located in the mountains, as you can observe from the background of the work, an environment represented by two rocky spikes.<br> Balanced is the relationship between figures and landscape, which is the real stage of the action, inhabited by the characters.<br>Here is depicted the scene in which Saint Joachim sacrifices a lamb to God on an altar.<br>It is possible to guess the event of this sacrifice since at the top of the altar is the small skeleton of a dead lamb.<br>From the sacrificial offer, rises a small figure of friar, a symbolic apparition partly added dry and now semi-disappeared.<br>In the presence of a shepherd praying, with a part of the flock nearby, the elder leans towards the altar to blow on the fire and cook the lamb.<br>This offer was made to ask for the grace of a son to God, who seems to have accepted and to indicate it is the presence of an outstretched hand pours the elder, symbolizing the hand of God ready to help him.<br>Well studied is the composition, with lines of strength on the altar of sacrifice and the figure of Joachim very convincing even in an unusual position.<br>The shepherd is represented with a hat and heavy footwear, while the sheep are caught in studied attitudes , in fact the two males compete with horns, others are lying in peace, others graze the shrubs.",
            textAuthor: "Written by Greta Beraldo",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 610,
            z: 140
        },
        to: {
            x: 2.248879166470853,
            y: 15.640634231148807,
            z: -0.9687479486335986
        },
        title: "Annuncio a Sant'Anna",
        subtitle: "Storie di San Gioacchino e di Sant'Anna",
        IT: {
            text: "L&#39;Annuncio a sant&#39;Anna è un affresco di Giotto che risiede nella Cappella degli Scrovegni, databile al 1303-1305 circa, fa parte delle Storie di Gioacchino e Anna. \nLa scena raffigura sant&#39;Anna, mentre prega nella sua stanza e un angelo le porta l&#39;annuncio della sua maternità, l’angelo annunziante compare da una piccola finestra in alto, mentre Sant’Anna è inginocchiata all’interno verso di lui con le mani giunte. \nQuesto affresco si ispira alla classica scena dell’annunciazione ma è ambientato in un contesto domestico descritto con cura. \nLa stanza ha una decorazione di tipo classicheggiante, con fregi scolpiti, tetto a spioventi e timpani. Per realizzare la costruzione architettonica Giotto si è affidato alla chiarezza della forma geometrica.",
            textAuthor: "Scritto da Leonardo Bardi",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The Announcement to St. Anne is a fresco by Giotto that resides in the Scrovegni Chapel, dating from about 1303-1305, is part of the Stories of Joachim and Anne. <br>The scene depicts St. Anne as she prays in her room and an angel brings her the announcement of her motherhood, the announcing angel appears from a small window above, while St. Anne is kneeling inside towards him with her hands clasped. <br> This fresco is inspired by the classical scene of the Annunciation but is set in a carefully described domestic context. <br> The room has a decoration of classical type, with carved friezes, roof to spioventi and timpani. <br> To achieve the architectural construction Giotto relied on the clarity of geometric form.",
            textAuthor: "Written by Leonardo Bardi",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 610,
            z: 400
        },
        to: {
            x: 1.9964214617362295,
            y: 16.130013781865156,
            z: -2.457134106752282
        },
        title: "Ritiro fra i pastori",
        subtitle: "Storie di San Gioacchino e di Sant'Anna",
        IT: {
            text: "Affresco realizzato da Giotto tra il 1303 e il 1305 appartenente al registro più alto della parete destra quindi alle storie di Gioacchino e Anna. \nIn esso viene rappresentata la scena in cui, dopo la cacciata dal tempio, Gioacchino si ritira in penitenza tra i pastori in montagna cercando la solitudine. \nEgli è rappresentato a testa bassa, mesto e raccolto, trasmettendo così la sua mortificazione; ai suoi piedi c'è un cagnolino che è rappresentato, contrariamente a lui, in un atteggiamento festoso e felice; esso è simbolo di fedeltà, quella che lui ha nei confronti di Dio e che il creatore ha per lui. Davanti a Gioacchino ci sono due pastori pensierosi affiancati da una capanna da cui escono le  pecore: entrambi sono simboli di quella che sarà la futura chiesa di Cristo, con i suoi sacerdoti che condurranno i fedeli (rappresentati dalle pecorelle) al sicuro. Alberelli spuntano qua e là stagliandosi sullo sfondo. \nL'affresco è caratterizzato da una stesura morbida, un uso intenso di colori e di chiaroscuro che evidenzia la plasticità delle figure; c'è un grande rapporto tra sfondo e figure che ci trasmette un complesso unitario.",
            textAuthor: "Scritto da Sara Bandiera",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "Fresco made by Giotto between 1303 and 1305 belonging to the highest register of the right wall then to<br>the stories of Joachim and Anna. In it is represented the scene in which, after the expulsion from the<br>temple, Joachim retreats into penance among the shepherds in the mountains seeking solitude.<br>He is represented with a low head, sad and collected, thus transmitting his mortification; The fresco is<br>characterized by a soft texture, an intense color and chiaroscuro that highlights the plasticity of the<br><br>figures; There is a great relationship between background and figures that gives us a unitary complex.<br>The fresco is characterized by a soft surface, an intense color and chiaroscuro that highlights the<br>plasticity of the figures; there is a great relationship between background and figures that gives us a<br>unitary complex.",
            textAuthor: "Written by Sara Bandiera",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 610,
            z: 650
        },
        to: {
            x: 1.6895717140616973,
            y: 16.724830215818866,
            z: -3.379143428123393
        },
        title: "Cacciata dal Tempio",
        subtitle: "Storie di San Gioacchino e di Sant'Anna",
        IT: {
            text: "La Cacciata dei mercanti dal Tempio è un affresco di Giotto, situato nella Cappella degli Scrovegni di Padova; quest’opera è stata realizzata intorno al 1303 e misura 200x185 cm. \nLa scena raffigurata si colloca davanti al Tempio di Gerusalemme, e presenta il personaggio di Gesù Cristo, dotato da un volto fisso e ricco della propria determinazione, alza il proprio pugno, impugna una corda e si scaraventa contro dei mercanti che stanno infestando questo luogo sacro, e le cui gabbie di animali stanno a terra insieme ad un tavolino ribaltato; un caprone sta fuggendo e, spaventato, salta via, mentre dietro i sacerdoti hanno uno sguardo perplesso e gli apostoli sono stupiti (Pietro in particolare). \nA sinistra se ne vanno altri animali oltre il bordo della scena, mentre due bambini si rifugiano tra le vesti degli apostoli, con espressioni particolarmente naturali, sia quello sotto Pietro che quello vestito di rosso che si stringe all&#39;apostolo in primo piano, che si curva per proteggerlo. \nIl motivo della gabbia dovette piacere, infatti si decise a affresco completato di aggiungerne una seconda in mano all&#39;uomo al centro della scena, oggi parzialmente scomparsa.",
            textAuthor: "Scritto da Alberto Baldasso",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The “Cacciata dei mercanti dal tempio” is a fresco by Giotto, located in “Cappella degli Scrovegni” in Padua; this work was made around 1303 and measures 200x185 cm. The depicted scene is placed in front of the Temple of Jerusalem, and presents the character of Jesus Christ, endowed with a fixed face and rich in his own determination, raises his fist, He holds a rope, and hurls himself against the merchants who are haunting this holy place, whose cages of animals are on the ground with a table overturned; A goat is fleeing and, frightened, jumps away, while behind the priests have a perplexed look and the apostles are amazed (Peter in particular). On the left, other animals go beyond the edge of the scene, while two children take refuge in the robes of the apostles, with particularly natural expressions, both the one under Peter and the one dressed in red that holds the apostle in the foreground, He’s bent over to protect him. The reason for the cage had to be pleased, in fact it was decided to complete the fresco to add a second in the hands of the man in the center of the scene, now partially disappeared.",
            textAuthor: "Written by Alberto Baldasso",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 420,
            z: -550
        },
        to: {
            x: 2.0948567838756746,
            y: 17.163886200291394,
            z: 3.5451422496357576
        },
        title: "Strage degli innocenti",
        subtitle: "Storie di Gesù",
        IT: {
            text: "La Strage degli innocenti è un affresco (200x185 cm) di Giotto, databile al 1303- 1305 circa che fa parte del ciclo della Cappella degli Scrovegni a Padova. Situata nella parete destra guardando verso l&#39;altare, è compresa nelle Storie di Gesù del registro centrale superiore. \nLa scena, di crudo realismo, è una delle più drammatiche del ciclo; racconta di un episodio biblico, la strage degli innocenti, ordinata da Re Erode per tentare l’omicidio di Gesù.\nCome in altre scene del ciclo, l&#39;architettura dello sfondo aiuta a definire i gruppi di figure e facilita la lettura della scena. \nIn alto a sinistra, da un balcone coperto, Erode, stendendo il braccio, impartisce il comando di uccidere tutti i fanciulli nati negli ultimi mesi. Si rivolge alle madri disperate, raggruppate dietro un edificio a pianta centrale, che si vedono strappare i figli dai soldati, che vengono ritratti armati, in pose drammatiche e con colori cupi.\nIn basso stanno già i corpi ammassati di numerosi fanciulli, che sembrano quasi passare oltre la cornice dell&#39;affresco per concentrare l’attenzione altrove. A sinistra infine alcuni spettatori mostrano tutto il loro turbamento abbassando la testa e facendo espressioni rassegnate.\nI bambini sono più grandi del normale, probabilmente per farne protagonisti della scena. Le madri hanno espressioni profondamente angosciate, (sentimento che prevale) con la bocca dischiusa in un lamento comune e le guance rigate dalle lacrime, come riemerso con l&#39;ultimo restauro.\nCome in altre scene su questo lato della parete (l&#39;azzurro di lapislazzuli, steso probabilmente a secco) è in più punti danneggiato da graffi e cadute di colore, nel cielo come nella veste della donna a destra.",
            textAuthor: "Scritto da Benedetta Martinelli",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The Massacre of the Innocents is a fresco (200x185 cm) by Giotto, datable to around 1303-1305 which is part of the cycle of the Scrovegni Chapel in Padua. Located on the right wall looking towards the altar, it is included in the Stories of Jesus in the upper central register.<br>The scene, of raw realism, is one of the most dramatic of the cycle; tells of a biblical episode, the massacre of the innocents, ordered by King Herod to attempt the murder of Jesus.<br>As in other scenes in the cycle, the architecture of the background helps to define the groups of figures and facilitates the reading of the scene.<br>Above left, from a covered balcony, Herod, extending his arm, gives the command to kill all the children born in the last months. It is addressed to desperate mothers, grouped behind a building with a central plan, who are seen snatching their children from soldiers, who are portrayed armed, in dramatic poses and in dark colors.<br>Below are already the massed bodies of numerous children, who almost seem to pass beyond the frame of the fresco to concentrate attention elsewhere. Finally, on the left, some spectators show all their disturbance by lowering their heads and making resigned expressions.<br>The children are bigger than normal, probably to make them the protagonists of the scene. The mothers have deeply distressed expressions, (feeling that prevails) with the mouth parted in a common lament and the cheeks streaked with tears, as re-emerged with the last restoration.<br>As in other scenes on this side of the wall (the blue of lapis lazuli, probably dry laid) it is damaged in several places by scratches and drops of color, in the sky as in the dress of the woman on the right.",
            textAuthor: "Written by Benedetta Martinelli",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 420,
            z: -270
        },
        to: {
            x: 2.663844940869425,
            y: 16.393563772361393,
            z: 2.2130404124145993
        },
        title: "Fuga in Egitto",
        subtitle: "Storie di Gesù",
        IT: {
            text: "La Fuga in Egitto è un affresco (200x185 cm) di Giotto, databile al 1303- 1305 circa e facente parte del ciclo della Cappella degli Scrovegni a Padova. È compresa nelle Storie di Gesù del registro centrale superiore, nella parete destra guardando verso l&#39;altare. \nUn angelo appare in cielo e con gesto eloquente invita la Sacra Famiglia alla fuga, per scampare alla futura strage degli innocenti. La scena mostra Maria al centro seduta su un asino e reggente il figlio in grembo grazie a una sciarpa rigata annodata al collo. Indossa la veste rossa e un manto che, originariamente, era blu oltremare, di cui restano solo poche tracce. Un inserviente, munito di borraccia alla cintura, guida l&#39;animale conversando amorevolmente con Giuseppe, che regge un cesto o una sorta di fiasco e porta un bastone in spalla. Chiudono il corteo tre aiutanti di Maria, che conversano con naturalezza tra di loro. \nLa scena è racchiusa da una piramide evidenziata dallo sperone roccioso sullo sfondo, punteggiato qua e là da alberelli che simboleggiano le &quot;lande desolate e aride&quot; di cui parlano i testi apocrifi. \nDelicate sono le tonalità dei colori, che spiccano sull&#39;azzurro del cielo, armonizzandosi con le altre scene della cappella. Le figure appaiono come scolpite per blocchi di colore dai contorni taglienti.",
            textAuthor: "Scritto da Davide Grigoletto",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The Flight into Egypt is a fresco (200x185 cm) by Giotto, datable to around 1303-1305 and part of the cycle of the Scrovegni Chapel in Padua. It is included in the Stories of Jesus in the upper central register, on the right wall looking towards the altar.<br>An angel appears in heaven and with an eloquent gesture invites the Holy Family to flee, to escape the future massacre of the innocents. The scene shows Mary in the center sitting on a donkey and holding her child in her lap thanks to a striped scarf tied around her neck. He wears the red robe and a cloak that was originally ultramarine blue, of which only a few traces remain. An attendant, equipped with a canteen on his belt, guides the animal by lovingly conversing with Joseph, who holds a basket or some sort of flask and carries a stick on his shoulder. The procession is closed by three assistants of Mary, who converse naturally among themselves.<br>The scene is enclosed by a pyramid highlighted by the rocky spur in the background, dotted here and there by small trees that symbolize the “desolate and arid lands” of which the apocryphal texts speak.<br>Delicate are the shades of colors, which stand out against the blue of the sky, harmonizing with the other scenes of the chapel. The figures appear as carved in sharply outlined blocks of color.",
            textAuthor: "Written by Davide Grigoletto",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 420,
            z: 0
        },
        to: {
            x: 2.970670116730335,
            y: 15.978169688118932,
            z: 1.8190108248882493e-16
        },
        title: "Presentazione al Tempio",
        subtitle: "Storie di Gesù",
        IT: {
            text: "La Presentazione di Gesù al Tempio è un affresco di Giotto, risalente al 1305 circa e facente parte del ciclo della Cappella degli Scrovegni a Padova. \nIl Tempio di Gerusalemme è richiamato dal ciborio con colonnine tortili ovvero che si avvolgono a spirale. Secondo la tradizione ebraica dopo la nascita di un figlio le donne dovevano presentarsi al tempio della città per fare dei bagni rituali di purificazione. \nIn ambito cristiano la scena è vista come una sorta di rito di accettazione del bambino nella comunità, spesso associato al rito della circoncisione, che era accompagnato dall&#39;offerta di due colombe, come infatti porta Giuseppe in mano. Gesù è affidato a Simeone, il sacerdote con l&#39;aureola, figura di forte intensità espressiva. Una donna si trova vicino a Giuseppe, semplice spettatrice, mentre dall&#39;altro lato fa la sua comparsa la Profetessa Anna, con in mano un cartiglio, che è scossa dalla sua profezia che riconosce il Bambino nel &quot;redentore di Gerusalemme&quot;. Un angelo, impugnante un bastone dorato col trifoglio in cima, simbolo della Trinità, compare poi in cielo a testimoniare la soprannaturalità dell&#39;evento. \nLeggere sono le tonalità dei colori, che spiccano sull&#39;azzurro del cielo ( un po&#39; danneggiato), in perfetta armonia con le altre scene della cappella.",
            textAuthor: "Scritto da Simone Brunello",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The Presentation of Jesus in the Temple is a fresco by Giotto, dating from about 1305 and part of the cycle of the Scrovegni Chapel in Padua.<br>The Temple of Jerusalem is called from the ciborium with twisted columns.<br>According to Jewish tradition, after the birth of a child, women had to go to the temple of the city to take ritual baths of purification. In the Christian sphere, the scene is seen as a sort of rite of acceptance of the child into the community, often associated with the rite of circumcision, which was accompanied by the offering of two doves, as in fact he carries Joseph in his hand. Jesus is entrusted to Simeon, the priest with the halo, a figure of strong expressive intensity.A woman is close to Joseph, a simple spectator, while on the other side the Prophetess Anna appears, holding a scroll, who is shocked by her prophecy that she recognizes the Child in the “redeemer of Jerusalem”. An angel, holding a golden stick with a clover on top, symbol of the Trinity, appears in heaven to witness the supernaturality of the event.The shades of the colours, which stand out from the blue of the sky ( a little damaged), are light, in perfect harmony with the other scenes of the chapel.",
            textAuthor: "Written by Simone Brunello",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 420,
            z: 270
        },
        to: {
            x: 2.6638449408694247,
            y: 16.393563772361393,
            z: -2.2130404124145997
        },
        title: "L'Epifania",
        subtitle: "Storie di Gesù",
        IT: {
            text: "La scena si svolge sotto un&#39;impalcatura di legno su uno sfondo roccioso. \nMaria, con addosso una veste rosso intenso con bordature d&#39;oro e un mantello blu, tiene il Figlio in fasce e coperto da una mantellina verde all&#39;adorazione dei Re Magi, accorsi seguendo la Stella Cometa che si vede in alto. Ciascuno ha calzature rosse, simbolo di regalità. \nIl primo re, quello anziano, è già inginocchiato ed ha deposto la sua corona in terra, mentre il suo regalo è probabilmente l&#39;oro, tenuto dall&#39;angelo a destra. Il secondo re, di età matura, porta un corno pieno di incenso, mentre quello più giovane una coppa di cui solleva il coperchio per mostrare l&#39;unguento di mirra. I tre doni simboleggiano rispettivamente la regalità del nascituro, la sua santità e il presagio della sua morte (la mirra si usava infatti per profumare i cadaveri). \nDietro i Magi stanno due alti cammelli, bordati di finiture rosse, raffigurati con spiccato naturalismo e tenuti da due inservienti di cui solo quello in primo piano è visibile. Dietro Maria assiste Giuseppe e i due angeli, di cui uno, con estremo naturalismo, si trova in corrispondenza della trave della capanna ed ha quindi il viso coperto. \nUn muto dialogo si svolge tra i volti dei presenti, che intrecciano gli sguardi con grande naturalezza, evitando qualsiasi fissità di matrice bizantina. \nAlcuni dettagli sono legati alla quotidianità del Trecento, come la struttura &quot;moderna&quot; della capanna o la foggia degli abiti, come quello dell&#39;angelo che ha la manica stretta ai polsi e larga ai gomiti. \nLa cometa che si vede sul dipinto è forse stata ispirata dalla Cometa di Halley, di cui il pittore poteva essere stato testimone nel 1301.",
            textAuthor: "Scritto da Nicolò Giomo",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The scene takes place under a wooden scaffolding against a rocky background. Mary, wearing an intense red robe with gold edging and a blue cloak, holds her Son in swaddling clothes and covered with a green cape to the adoration of the Magi, who hastened following the Comet that can be seen above. Each has red shoes, a symbol of royalty. The first king, the elderly one, is already on his knees and has placed his crown on the ground, while his gift is probably gold, held by the angel on the right. The second king, of mature age, carries a horn full of incense, while the younger one a bowl of which he raises the lid to display the myrrh ointment. The three gifts respectively symbolize the royalty of the unborn child, his holiness and the omen of his death (myrrh was in fact used to perfume corpses). Behind the Magi stand two tall camels, edged with red finishes, depicted with marked naturalism and held by two attendants of which only the one in the foreground is visible. Behind Mary assists Joseph and the two angels, one of whom, with extreme naturalism, is located in correspondence with the beam of the hut and therefore has his face covered. A silent dialogue takes place between the faces of those present, who intertwine their gazes with great naturalness, avoiding any fixity of a Byzantine matrix. Some details are linked to the daily life of the fourteenth century, such as the “modern” structure of the hut or the shape of the clothes, such as that of the angel who has a sleeve tight at the wrists and wide at the elbows. The comet seen on the painting was perhaps inspired by Halley's Comet, which the painter may have witnessed in 1301.",
            textAuthor: "Written by Nicolò Giomo",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 420,
            z: 550
        },
        to: {
            x: 2.0948567838756755,
            y: 17.163886200291394,
            z: -3.545142249635757
        },
        title: "Natività e annuncio dei pastori",
        subtitle: "Storie di Gesù",
        IT: {
            text: "La “Natività di Gesù” di Giotto è un affresco appartenente al ciclo della Cappella degli Scrovegni a Padova, datato tra il 1303-1305; compreso nelle Storie di Gesù, ovvero una serie di episodi aventi Gesù come protagonista. Si colloca sulla parete destra, guardando verso l&#39;altare, nel registro centrale superiore. Misura circa 203 centimetri in altezza e 200 in larghezza. La “Natività di Gesù” si può considerare una delle Natività più conosciute e popolari. \nCome basi storiche storiche delle scene Giotto utilizzò più fonti, tra cui i Vangeli, il Protovangelo di Giacomo e anche la Leggenda Aurea di Jacopo da Varazze. \nA fare da sfondo alla scena c’è un paesaggio roccioso in cui spicca un piccola struttura in legno dove si trovano Maria e Gesù. \nMaria è distesa ed ha appena partorito Gesù e lo sta mettendo dolcemente, già fasciato, nella mangiatoia. Maria viene aiutata da un inserviente, che tradizionalmente non è mai presente in questo episodio, davanti alla quale spuntano il bue e l&#39;asinello. \nGiuseppe sta accovacciato, in basso a sinistra, dormiente; come tipico dell&#39;iconografia, con una veste marrone chiaro. Giuseppe non è vicino alla moglie ma in una sezione a parte, questo sta a sottolineare la subordinazione rispetto al Padre Divino di Gesù. Il manto di Maria, un tempo azzurro lapislazzuli, è in parte logorato e ha lasciato scoperto il rosso della sottoveste. \nA destra si svolge l&#39;annuncio ai pastori. Due pastori vengono raffigurati di spalle di fianco al proprio gregge, mentre dall&#39;alto un angelo li informa approposito l&#39;evento miracoloso appena accaduto. Altri quattro angeli volano sopra la capanna, pregando e vegliando sul bambino nato.",
            textAuthor: "Scritto da Francesca Frassetto",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "Giotto's “Nativity of Jesus” is a fresco belonging to the cycle of the Scrovegni Chapel in Padova, Italy, dated between 1303-1305; included in the Stories of Jesus, a series of episodes with Jesus as the protagonist. It is placed on the right wall, looking towards the altar, in the upper central register. It measures approximately 203 cm in height and 200 in width. The “Nativity of Jesus” can be considered one of the best known and most popular nativities. <br>As historical bases of the scenes, Giotto used several sources, including the Gospels, the Protoevangelium of James, and the Golden Legend of Jacopo da Varazze. <br>In the scene background, there is a rocky landscape in which a small wooden structure stands out where Mary and Jesus are found. Mary is lying down and has just given birth to Jesus and is putting him delicately, already swaddled, into the manger. Maria is helped by an attendant, who is traditionally never present in this episode, in front of which the ox and the donkey appear. Giuseppe is crouched, lower left, sleeping; as typical of iconography, with a light brown robe. Joseph is not close to his wife but in a separate section, this underlines the subordination to the Divine Father of Jesus. Mary's cloak, once lapis lazuli blue, is partly worn and has left the red of the petticoat uncovered. <br>On the right the announcement to the shepherds. Two shepherds are depicted from behind next to their flock, while from above an angel informs them of the miraculous event that has just happened. Four other angels fly over the hut, praying and watching over the baby born.",
            textAuthor: "Written by Francesca Frassetto",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 255,
            z: -550
        },
        to: {
            x: 2.3363767527411654,
            y: 18.023065824603627,
            z: 3.9538683507927415
        },
        title: "Flagellazione",
        subtitle: "Storie di Gesù",
        IT: {
            text: "Cristo deriso è un affresco (200x185 cm) di Giotto, databile al 1303-1305 circa e situato nel registro centrale inferiore, nella parete destra guardando verso l&#39;altare. \nDopo essere stato arrestato e giudicato, Gesù è incoronato di spine, deriso e flagellato dagli sgherri dei sommi sacerdoti. Nel dipinto si vede Cristo seduto a sinistra che sopporta, con sofferenza ma anche rassegnazione, le offese che gli vengono fatte, tirandogli i capelli e la barba, colpendolo con le mani e con bastoni, deridendolo. Nonostante questo, Cristo è raffigurato in tutta la sua regalità, coperto da un mantello ricamato d&#39;oro. \nLa scena si svolge in un cortile entro il palazzo. Eleganti colonne sorreggono la trabeazione con una decorazione a palmette e a leoncini di gusto classicheggiante, secondo i modelli romani. \nIl volto di Pilato e quello a destra, forse di un soldato, sono dipinti con una volumetria e una resa naturalistica tanto forte da sembrare veri e propri ritratti. \nIn questa scena la sperimentazione delle forme per masse colorate immerse nella luce raggiunge uno degli esiti più compiuti di tutto il ciclo pittorico.",
            textAuthor: "Scritto da Aurora Bozzo",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "“Cristo deriso” is a fresco (200x185 cm) by Giotto, dating from about 1303-1305 and located in the lower central register, on the right wall looking towards the altar.<br>After being arrested and judged, Jesus is crowned with thorns, mocked and scourged by the thugs of the high priests. In the painting we see Christ sitting on the left who bears, with suffering but also resignation, the offenses that are done to him, pulling his hair and beard, hitting him with his hands and with sticks, deriding him. Despite this, Christ is depicted in all his royalty, covered with a golden embroidered cloak. <br>The scene takes place in a courtyard within the palace. Elegant columns support the entablature with a decoration in palmettes and lions of classical taste, according to Roman models. The face of Pilate and the one on the right, perhaps that of a soldier, are painted with a volume and a naturalistic rendering so strong as to seem real portraits. In this scene the experimentation of forms for colored masses immersed in light reaches one of the most accomplished outcomes of the entire pictorial cycle.",
            textAuthor: "Written by Aurora Bozzo",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 250,
            z: -270
        },
        to: {
            x: 3.240776910034154,
            y: 17.307662259356242,
            z: 2.6923377406437585
        },
        title: "Presentazione di Caifa",
        subtitle: "Storie di Gesù",
        IT: {
            text: "Cristo davanti a Caifa è un affresco (200x185 cm) di Giotto, databile al 1303-1305 circa che fa parte del ciclo della Cappella degli Scrovegni a Padova. È compreso nelle Storie della Passione di Gesù del registro centrale inferiore, nella parete destra guardando verso l&#39;altare. \nLa scena racconta che, dopo essere stato arrestato, Gesù viene portato dai sommi sacerdoti, Anna e poi Caifa, seduti in uno scranno, per essere interrogato. È accusato di blasfemia, un reato punibile con la morte. \nCaifa si strappa la veste dal petto perché vorrebbe condannare Gesù a morte ma non può farlo poiché non ne ha l&#39;autorità. Tra gli armigeri uno leva una mano per colpire Gesù, legato e strattonato al centro: proprio in casa di Caifa ebbe inizio la persecuzione di Cristo che nell&#39;iconografia viene di solito indicata come la scena del Cristo deriso. \nI volti sono arcigni e molto marcati. Il gesto di Caifa, caratterizzato da forte realismo, parla più delle parole, come pure il volto di Cristo, intenso nello sguardo, ma sofferente nel lieve inarcarsi delle spalle. \nOriginale è l&#39;inventiva di Giotto rispetto all&#39;iconografia tradizionale, che accentua la drammaticità degli avvenimenti, ma colpisce anche l&#39;efficacia della costruzione prospettica dell&#39;architettura, soprattutto nel soffitto.",
            textAuthor: "Scritto da Benedetta Martinelli",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "Christ in front of Caifa is a fresco (200x185 cm) by Giotto, datable to about 1303-1305 which is part of the cycle of the Scrovegni Chapel in Padua. It is included in the Stories of the Passion of Jesus in the lower central register, on the right wall looking towards the altar.<br>The scene tells that, after being arrested, Jesus is carried by the high priests, Anna and then Caiaphas, seated in a chair, to be questioned. He is accused of blasphemy, a crime punishable by death.<br>Caiaphas tears the robe from his chest because he would like to condemn Jesus to death but cannot do so since he does not have the authority. Among the warriors one raises a hand to strike Jesus, tied and pulled in the center: the persecution of Christ began in the house of Caiaphas, which in iconography is usually indicated as the scene of Christ mocked.<br>The faces are grim and very marked. The gesture of Caiaphas, characterized by strong realism, speaks louder than words, as does the face of Christ, intense in the gaze, but suffering in the slight arch of the shoulders.",
            textAuthor: "Written by Benedetta Martinelli",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 250,
            z: 0
        },
        to: {
            x: 3.845951865259752,
            y: 16.804901527322667,
            z: 2.354966320732574e-16
        },
        title: "Bacio di Giuda",
        subtitle: "Storie di Gesù",
        IT: {
            text: "La sua iconografia prevede normalmente una scena tumultuosa, con le figure di Cristo in atteggiamento di tranquilla o angosciata accettazione, di Giuda che lo bacia o si appresta a baciarlo, dei soldati del sinedrio che si affollano per catturare il Cristo, degli altri apostoli che tentano di diffonderlo, di Pietro che impugna la spada e taglia un orecchio a un soldato. \nLa scena, una delle più note dell&#39;intero ciclo, è ambientata all&#39;aperto. Nonostante la cospicua partecipazione di personaggi, il nucleo centrale è perfettamente individuabile grazie all&#39;uso delle linee di forza (come la linea dei tre bracci che attraversa la scena orizzontalmente, convergente al centro dove Caifa indica) e dell&#39;ampia campitura di colore giallo della veste di Giuda, che si sporge in avanti, al centro, per baciare Gesù in modo da permettere alle guardie di riconoscerlo e catturarlo. \nIl volto di Giuda, giovane e pacato nelle scene precedenti, è qui ormai trasfigurato in una maschera bestiale, ed ha perso definitivamente l&#39;aureola. All&#39;immoto e intenso contatto visivo tra Gesù e il suo traditore si contrappone l&#39;agitazione delle turbe di armati tutto intorno, generando un effetto di violenta drammaticità. \nSolo osservando un secondo momento ci si accorge delle altre scene di corredo, come quella di Pietro che taglia l&#39;orecchio a Malco, un servitore del Sommo Sacerdote, con un coltello, afferrato per il mantello da un uomo curvo e di spalle, col capo coperto da un mantello grigio. Ben orchestrati sono i gruppi di armigeri, composti affastellando le teste (un tempo con colori metallici negli elmi, oggi anneriti) e soprattutto intuibili dal numero di lance, alabarde, bastoni e fiaccole che si levano in aria. Un po&#39; più scandite sono le figure del gruppo di destra, tra cui si vede un uomo che suona il corno. \nSebbene l&#39;iconografia risulti tradizionale, in questa scena Giotto ne rinnovò profondamente il contenuto, immettendo una straordinaria tensione psicologica e drammatica.",
            textAuthor: "Scritto da Ginevra Taddei",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "His iconography normally includes a tumultuous scene, with the figures of Christ in an attitude of calm or anguished acceptance, of Judas kissing him or preparing to kiss him, of the Sanhedrin soldiers who crowd to capture Christ, of the other apostles who try to spread it, of Peter holding a sword and cutting off a soldier's ear.<br>The scene, one of the best known of the entire cycle, is set outdoors. Despite the conspicuous participation of characters, the central nucleus is perfectly identifiable thanks to the use of lines of force (such as the line of the three arms that crosses the scene horizontally, converging at the center where Caifa indicates) and the wide yellow background of the dress of Judas, who leans forward, in the center, to kiss Jesus in order to allow the guards to recognize him and capture him. The face of Judas, young and calm in the previous scenes, is here by now transfigured into a bestial mask, and has definitively lost the halo. The motionless and intense visual contact between Jesus and his traitor is contrasted by the agitation of the crowds of armed men all around, generating an effect of violent drama.<br>Only by observing a second moment does one become aware of the other scenes of the trousseau, such as that of Peter cutting off the ear of Malco, a servant of the High Priest, with a knife, grabbed by the cloak by a man hunched over and from behind, with his head covered with a gray cloak. Well orchestrated are the groups of armigers, composed by bundling the heads (once with metallic colors in the helmets, now blackened) and above all guessed by the number of spears, halberds, sticks and torches that rise in the air. A little more articulated are the figures of the group on the right, among which we see a man playing the horn.<br>Although the iconography is traditional, in this scene Giotto profoundly renewed its content, introducing an extraordinary psychological and dramatic tension.",
            textAuthor: "Written by Ginevra Taddei",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 240,
            z: 270
        },
        to: {
            x: 3.2754841387681117,
            y: 17.37961268898551,
            z: -2.721171438361201
        },
        title: "Lavanda dei piedi",
        subtitle: "Storie di Gesù",
        IT: {
            text: "La Lavanda dei piedi è un affresco di Giotto, databile al 1303-1305 circa. Fa parte del ciclo della Cappella degli Scrovegni a Padova ed è compresa nelle Storie della Passione di Gesù del registro centrale inferiore, nella parete destra guardando verso l&#39;altare. \nNella stessa stanza della scena precedente, l&#39;Ultima Cena, Gesù si appresta a compiere un atto di umiltà lavando i piedi degli apostoli, iniziando da Pietro. Un altro apostolo sta slacciando i sandali in primo piano a sinistra, mentre Giovanni sta in piedi dietro Gesù reggendo un contenitore con l&#39;acqua. \nLe aureole risultano annerite, però non a causa del pittore ma a seguito di reazioni chimiche. Originariamente le aureole dei vari personaggi presentavano una differenziazione gerarchica: infatti quella di Cristo è a rilievo, dorata con oro fino e con la croce accennata in rosso; mentre sono di colore imitante l&#39;oro e con raggi quelle degli apostoli. \nGiuda si intravede col mento appuntito, la barbetta tra gli apostoli seduti a sinistra e la sua aureola è priva di raggi. \nCuratissimi sono i dettagli, dal manto con ricami dorati dell&#39;apostolo al centro, ai mosaici che ornano il coronamento della stanza, sul cui tetto si possono notare due uccelli: sono statue in posizione identica, nella scena precedente dell&#39;Ultima Cena. \nA differenza della scena precedente, qui si sono in parte conservati i decori a secco delle pareti. \nLe vesti degli apostoli creano un colorato insieme di tinte pastello, con un uso della luce che amplifica il senso di plasticità e aiuta a comprendere la scansione spaziale dell&#39;ambiente.",
            textAuthor: "Scritto da Emma Vanin",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The Washing of the Feet is a fresco by Giotto, datable to around 1303-1305. It is part of the cycle of the Scrovegni Chapel in Padua and is included in the Stories of the Passion of Jesus in the lower central register, on the right wall looking towards the altar.<br>In the same room as the previous scene, the Last Supper, Jesus is preparing to perform an act of humility by washing the feet of the apostles, starting with Peter. Another apostle is undoing his sandals in the foreground on the left, while John stands behind Jesus holding a container with water. The halos are blackened, but not due to the painter as a result of chemical reactions. Originally the halos of the various characters presented a hierarchical differentiation: in fact that of Christ is in relief, gilded with fine gold and with the cross outlined in red; while they are of a color imitating gold and with rays those of the apostles. Judas can be glimpsed with a pointed chin, his beard among the apostles seated on the left and his halo is devoid of rays.<br> The details are meticulously cared for, from the mantle with golden embroidery of the apostle in the center, to the mosaics that adorn the crowning of the room, on whose roof you can see two birds: they are statues in identical positions, in the previous scene of the Last Supper. Unlike the previous scene, the dry decorations of the walls have been partially preserved here. The robes of the apostles create a colorful set of pastel shades, with a use of light that amplifies the sense of plasticity and helps to understand the spatial scanning of the environment.",
            textAuthor: "Written by Emma Vanin",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -325,
            y: 255,
            z: 550
        },
        to: {
            x: 2.3363767527411663,
            y: 18.023065824603627,
            z: -3.953868350792741
        },
        title: "Ultima Cena",
        subtitle: "Storie di Gesù",
        IT: {
            text: "L&#39;ultima cena è un’opera appartenente al ciclo degli affreschi della Cappella Degli Scrovegni a Padova, risale al 1303-1305 circa ed è compresa nella “storie di passione di Gesù” nel registro centrale inferiore del ciclo. \nLa scena rappresenta un passo del vangelo di Giovanni molto famoso: “In verità, in verità vi dico: uno di voi mi tradirà” in cui i discepoli si guardarono l’un l&#39;altro, non sapendo di chi Gesù stia parlando. \nSi tratta del momento seguito dall&#39;iconografia bizantina, mentre la tradizione romana preferiva rappresentare quello dello spezzare il pane da parte di Gesù. \nLa scena è ambientata in una stanza priva di due pareti, in modo che le persone possano vedere al suo interno, e qui Giotto dipinge Cristo con i 12 apostoli che si guardano dubbiosi, e Giuda che intinge la mano nello stesso piatto di Gesù, mentre Giovanni si addormenta appoggiato a Cristo. \nLe aureole sono non più bianche, bensì nere, ma questo cambiamento non è volontario, ma causato da delle reazioni chimiche avvenute con il tempo; queste aureole in realtà presentavano un sistema gerarchico: quella di Gesù Cristo dorata con oro fino e con la croce accennata in rosso, quella degli apostoli era di un colore simile all’oro e con dei raggi, mentre quella di Giuda era senza raggi, per rappresentare appunto il colpevole; infine per gli apostoli di spalle sembra quasi che l’aureola stia fluttuando davanti ai loro volti. \nLa parete interna era un tempo decorata da motivi a secco, che però oggi sono perduti; i vestiti degli apostoli sono di tinta pastello, con l’utilizzo della luce che amplifica il senso di plasticità e aiuta a comprendere lo spazio. Infine i dettagli sono molto curati, si guarda ad esempio il manto con ricami dorati dell’apostolo al centro di spalle, oppure i mosaici; inoltre sul tetto vi sono due uccelli che stanno ad indicare la scena seguente: la Lavanda dei piedi.",
            textAuthor: "Scritto da Alberto Baldasso",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The Last Supper is a work belonging to the cycle of frescoes of the Cappella Degli Scrovegni in Padua, dates back to about 1303-1305 and is included in the “stories of the Passion of Jesus” in the lower central register of the cycle. The scene represents a very famous passage from the Gospel of John: “Verily, verily, I say to you, one of you shall betray me” in which the disciples look at one another, not knowing of whom Jesus is speaking; This is the moment followed by Byzantine iconography, while the Roman tradition preferred to represent that of breaking bread by Jesus. The scene is set in a room without two walls, so that people can see inside, and here Giotto paints Christ with the 12 apostles looking at themselves in doubt, and Judas dipping his hand in the same plate as Jesus, while John falls asleep leaning on Christ. The halos are no longer white, but black, but this change is not voluntary, but caused by chemical reactions occurred over time; these halos actually presented a hierarchical system: that of Jesus Christ golden with fine gold and with the cross hinted in red, The colour of the apostles was similar to gold and with rays, while that of Judas was without rays, to represent precisely the culprit; finally, for the apostles from behind it seems as if the halo was floating before their faces. The inner wall was once decorated with dry motifs, but today they are lost; the clothes of the apostles are pastel, with the use of light that amplifies the sense of plasticity and helps to understand the space. Finally, the details are very accurate, for example the mantle with golden embroidery of the apostle in the center of the back, or the mosaics; also on the roof there are two birds that indicate the following scene: the Lavender of the feet.",
            textAuthor: "Written by Alberto Baldasso",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 240,
            y: 540,
            z: 775
        },
        to: {
            x: -1.2172708232538314,
            y: 17.159701412407724,
            z: -3.930770366757166
        },
        title: "L'angelo nuziante",
        subtitle: "Storie della Vergine",
        IT: {
            text: "L’angelo nunziante fa parte del doppio affresco di Giotto databile tra il 1303 e il 1305, chiamato l’Annunciazione e situato sull’arco di trionfo presso l’altare al di sotto della lunetta. \nIn questo doppio dipinto, diviso in due finte architetture speculari, si vede realizzato quanto deciso da Dio al di sopra della lunetta. \nL’affresco dell’Annunciazione presenta due stanze con balconcini aggettanti nella parte superiore, e presenta inoltre un’attenta cura dei dettagli quali i cassettoni, le cornici colorate, le mensole ornate. \nL’angelo, che si trova nella parte sinistra dell’affresco, è inginocchiato e sembra che nonostante la distanza fisica che li separa, quest’ultimo e Maria, situata nella parte destra, si stiano scambiando un intenso sguardo. Lo sfondo scuro è illuminato dalla luce rossa dell’amore divino, che impone immediatamente l’Annunciazione agli spettatori che entrano nella cappella. \nL’Angelo è rappresentato compiere gesti lenti e calibrati, di una lentezza quasi solenne, rappresentati dal suo braccio destro leggermente alzato. L’aureola, come quella di Maria nella parte destra dell’affresco, viene rappresentata da Giotto come un dischetto dorato posto sul retro del capo del personaggio, in rappresentanza della sua piena padronanza del profilo, recuperata dall’arte antica.",
            textAuthor: "Scritto da Emma De Longhi",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The angel nunziante is part of Giotto's double fresco dating from 1303 to 1305, called the Annunciation and located on the triumphal arch at the altar below the lunette. In this double painting, divided into two false mirrored architectures, we see the realization of what God decided above the lunette.<br>The Annunciation fresco has two rooms with protruding balconies at the top, and also features careful attention to detail such as the coffers, the colored frames, the ornate shelves. The angel, located on the left side of the fresco, is kneeling and it seems that despite the physical distance that separates them, the latter and Mary, located on the right side, are exchanging an intense gaze.<br>The dark background is illuminated by the red light of divine love, which immediately imposes the Annunciation on the spectators who enter the chapel. The Angel is represented making slow and calibrated gestures, of an almost solemn slowness, represented by his slightly raised right arm. The halo, like that of Mary on the right side of the fresco, is represented by Giotto as a golden disk placed on the back of the character's head, representing his full mastery of the profile, recovered from ancient art.",
            textAuthor: "Written by Emma De Longhi",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: -230,
            y: 240,
            z: 775
        },
        to: {
            x: 1.354230417716142,
            y: 18.46913083214697,
            z: -4.56316771186961
        },
        title: "Coretto di destra",
        subtitle: "Coretti",
        IT: {
            text: "Giotto decise di dipingere due ambienti voltati a crociera ed in prospettiva, posti ai lati dell’arco trionfale, sulla parete orientale della cappella, subito sopra lo zoccolo perimetrale, essi vengono comunemente chiamati corretti. \nQuesti due ambienti sono delle immagini illusionistiche che ingannano l’occhio e creano degli ambienti virtuali che in realtà non esistono ma nello specifico simulano la presenza del transetto. \nL’immagine presenta appunto due voltati a crociera raffigurati in prospettiva dove al centro delle volte pendono delle lampade. \nI due corretti rappresentano alla perfezione la prospettiva medievale.",
            textAuthor: "Scritto da Leonardo Bardi",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "Giotto decided to paint two vaulted cross-vaulted rooms in perspective, placed at the sides of the triumphal arch, on the eastern wall of the chapel, immediately above the perimeter plinth, they are commonly called corrected. <br> These two environments are illusionistic images that deceive the eye and create virtual environments that do not actually exist, but specifically simulate the presence of the transept. <br> The image presents two vaulted cross vaults in perspective where lamps hang from the center of the vaults. <br> The two correct represent perfectly the medieval perspective.",
            textAuthor: "Written by Leonardo Bardi",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 230,
            y: 240,
            z: 775
        },
        to: {
            x: -1.354230417716142,
            y: 18.46913083214697,
            z: -4.56316771186961
        },
        title: "Coretto di sinistra",
        subtitle: "Coretti",
        IT: {
            text: "I due cosiddetti &quot;coretti&quot; servono a ricordare la funzione funeraria della Cappella. \nLe due rappresentazioni sono celebri nella storia della rappresentazione pittorica della prospettiva per lo studio che ne fece Roberto Longhi (1952), seguito da Gioseffi, Gnudi e altri. Esse hanno infatti un andamento opposto (ottenuto ribaltando un medesimo cartone, sebbene con qualche differenziazione) e simulano con ottima approssimazione la veduta di due ambienti illusori, tra i più vicini alla realtà nella fase pre-brunelleschiana. Sebbene disegnati a mano libera essi rimandano a un punto di vista comune, situato al centro della cappella. \nLa loro funzione, scartate le ipotesi che le volevano raffigurazioni simboliche o pura decorazione, è forse da mettere in relazione con l&#39;architettura generale della cappella, quasi a fingere quel transetto mai realizzato che venne però raffigurato nella scena del &quot;dono&quot; all&#39;interno del Giudizio Universale.",
            textAuthor: "Scritto da Simone Brunello",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The two so-called “coretti” serve to remember the funerary function of the chapel.<br>The two representations are famous in the history of the pictorial representation of perspective for the study made by Roberto Longhi (1952), followed by Gioseffi, Gnudi and others. In fact, they have an opposite trend (obtained by overturning the same cartoon, albeit with some differentiation) and simulate with excellent approximation the view of two illusory environments, among the closest to reality in the pre-Brunelleschi phase. Although drawn freehand, they refer to a common point of view, located in the center of the chapel.<br>Their function, discarding the hypotheses that they wanted symbolic representations or pure decoration, is perhaps to be put in relation with the general architecture of the chapel, as if to pretend that transept never built which was however depicted in the scene of the “gift” inside of the Last Judgment.",
            textAuthor: "Written by Simone Brunello",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 0,
            y: 600,
            z: 260
        },
        to: {
            x: 2.368017931076416e-16,
            y: 15.389028090857346,
            z: -1.9336333812533721
        },
        title: "Il Redentore",
        subtitle: "La volta",
        IT: {
            text: "Questo particolare costituisce la parte centrale dell’affresco del giudizio universale, sempre realizzato da Giotto tra il 1303 ed il 1305. \nRitrae Cristo Giudice che campeggia al centro, circondato da una mandorla iridata. \nEgli sta esponendo le piaghe della Passione, con l’esplicito gesto delle mani, più precisamente sta generando l&#39;inferno con la sinistra dell&#39;aura e rivolge lo sguardo e la mano destra agli eletti. \nNon è seduto su un trono ma su una sorta di nube, sotto la quale si trovano alcune rappresentazioni simboliche, già interpretate come i simboli degli evangelisti. \nDa uno studio più recente è stato invece riconosciuto qualcosa di più complesso: si vedono un angelo, un uomo con testa da leone, un centauro, simbolo della doppia natura di Cristo, umana e divina, e un orso con un pesce, simbolo della pesca delle anime oppure, del sacrificio di Cristo per redimere la bestialità della razza umana.. \nGesù rappresenta il fulcro dell&#39;intera scena, che genera l&#39;inferno con la sinistra dell&#39;aura e rivolge lo sguardo e la mano destra agli eletti, in processione alla sua destra. \nVerso di lui tendono a orientarsi tutti i nuclei delle figure. Tutto di lui è aperto verso gli eletti, alla sua destra: lo sguardo, la piaga, il costato, mentre la sinistra è chiusa sui reprobi dell&#39;inferno. Intorno alla mandorla stanno i serafini. In trono disposti a semicerchio, intorno a Gesù, ci sono i dodici apostoli.",
            textAuthor: "Scritto da Greta Beraldo",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "This detail is the central part of the fresco of the last judgment, always made by Giotto between 1303 and 1305.<br>It depicts Christ the Judge camping in the center, surrounded by an iridata almond.<br>He is exposing the wounds of the Passion, with the explicit gesture of the hands, more precisely he is generating hell with the left of the aura and turning his gaze and right hand to the elected.<br>He is not sitting on a throne but on a sort of cloud, under which there are some symbolic representations, already interpreted as the symbols of the evangelists. <br>From a more recent study, however, something more complex has been recognized: you see an angel, a man with a lion's head, a centaur, symbol of the dual nature of Christ, human and divine, and a bear with a fish, symbol of the fishing of souls or, of christ's sacrifice to redeem the bestiality of the human race.<br>Jesus represents the fulcrum of the entire scene, which generates hell with the left of the aura and turns his gaze and right hand to the elected, in procession to his right. Towards him tend to orient all the nuclei of the figures.<br> Everything about him is open to the chosen ones, to his right: the gaze, the plague, the side, while the left is closed on the reprobs of hell. <br>Around the almond are the serafini and on the throne arranged in a semicircle, around Jesus, there are the twelve apostles.",
            textAuthor: "Written by Greta Beraldo",
            audioAuthor: "Voice of Greta Beraldo"
        }
    },
    {
        position: {
            x: 5,
            y: 600,
            z: -255
        },
        to: {
            x: -0.03729059528958949,
            y: 15.375966184090906,
            z: 1.901820359769064
        },
        title: "Madonna col Bambino",
        subtitle: "La volta",
        IT: {
            text: "L’affresco è situato sulla volta a botte e misura circa un metro di diametro. e’ datato circa tra il 1303 e il 1305, dipinto da Giotto. Raffigura la Madonna che tiene in braccio Gesù Bambino. \nE’ dipinto entro un cerchio, contornato da oro e decorazioni varie, inserito nel cielo stellato. \nLa Madonna indossa una veste blu lapislazzuli con rifinimenti in oro, e una specie di tunica bianca, ha un velo di colore originario rosso, oggi andato in parte perso, e ha un’aureola d’oro. \nGesù Bambino indossa solo una veste bianca contornata d’oro e, come Maria, ha l’aureola d’oro. Maria ha i tratti somatici tipici e tradizionali: occhi grandi, naso abbastanza stretto e allungato e bocca piccola.",
            textAuthor: "Scritto da Francesca Frassetto",
            audioAuthor: "Voce di Ginevra Taddei"
        },
        EN: {
            text: "The fresco is located on the barrel vault and measures approximately one meter in diameter. It is dated approximately between 1303 and 1305, painted by Giotto. It represents Madonna holding Baby Jesus in her arms. It is painted within a circle, surrounded by gold and various decorations, inserted in the starry sky. The Madonna wears a blue lapis lazuli robe with gold trimmings, and a kind of white tunic, has an originally red veil, now partly lost, and has a gold halo. Baby Jesus wears only a white robe surrounded by gold and, like Mary, has a golden halo. Maria has the traditional facial features: large eyes, a fairly narrow and elongated nose and a small mouth.",
            textAuthor: "Written by Francesca Frassetto",
            audioAuthor: "Voice of Greta Beraldo"
        }
    }
]