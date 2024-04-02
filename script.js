//*SCRIPT APP

//variabili globali
let modale = document.querySelector('#Modale');
let arrayEnti = [];
let arraySetDedign = [];

//*funzione per tornare in alto
let scrollToTop = () => window.scroll(0, 0);

//*CLASSI
class Enti {
    constructor(id, nome, descrizione, immagine) {
        this.id = id++;
        this.nome = nome;
        this.descrizione = descrizione;
        this.immagine = immagine;
    }
}
class SetP {
    constructor(id, nome, descrizione, galleria) {
        galleria = new Galleria;
        this.id = id++;
        this.nome = nome;
        this.descrizione = descrizione;
        this.galleria = galleria;
    }
}

class Galleria {
    constructor(img1, img2, img3) {
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;
    }
}


//innesco init
window.addEventListener('load', init);


//!----------------------------------------------------------------------------
//Preparazione all' utente
function init() {
    // bioGen()
    eventHandler()
    // underConstruction();
}


function eventHandler() {
    console.log('in ascolto');

    //istanzio variabili
    let contatti = document.getElementById('contatti');
    let bio = document.getElementById('Bio');
    let services = document.querySelector('#Services');
    let scenografia = document.querySelector('#Scenografia');
    //gestione eventi
    contatti.addEventListener('click', modalShow);
    bio.addEventListener('click', bioGen);
    services.addEventListener('click', servicesGen);
    scenografia.addEventListener('click', scenografiaGen);
}

//*svoto la pool HTML principale
function resetPool() {
    scrollUp();
    let pool = document.querySelector('#Pool');
    pool.innerHTML = ''
}

function scrollUp() {
    window.scroll(0, 0);
}

function refreshPage() {
    location.reload();
}

//!----------------------------------------------------------------------------
//?funzioni che generano i contenuti

//*generazione pagina bio
function bioGen() {
    console.log('click biografia');
    resetPool()

    let pool = document.querySelector('#Pool');
    pool.classList.add('d-flex', 'align-items-center', 'flex-column');

    //creo primo blocco html
    let photo = document.createElement("div");
    photo.setAttribute('id', 'Photo');
    photo.classList.add('fototessera');
    pool.append(photo);

    //creo immagine interna
    let photoImg = document.createElement('img');
    photoImg.setAttribute('id', 'PhotoImg');
    photoImg.classList.add('w-100')
    photoImg.src = 'assets/images/fototessera.jpg'
    photo.appendChild(photoImg);

    //creo secondo blocco html
    let bioText = document.createElement("article");
    bioText.setAttribute('id', 'BioText');
    bioText.classList.add('shortText');
    pool.appendChild(bioText);

    bioText.innerHTML = `<p>Chiara Leonida Cannizzaro, nata nel 1993 nella provincia di Varese ma torinese di
    adozione, è un'artista poliedrica con competenze nel management culturale. Sin
    dall'infanzia, ha coltivato la passione per la musica studiando violino presso il Liceo
    Musicale V. Bellini. In contemporanea, ha frequentato il Primo Liceo Artistico di
    Torino e successivamente iniziando il percorso di studi in scenografia si è qualificata
    come tecnico di costruzione di scenografia presso le Scuole Tecniche San Carlo di
    Torino, oltre a ottenere la qualifica di tecnico audio-luci presso l'Accademia Teatro
    alla Scala. Appassionata di diritto fin da giovane, ha conseguito gli studi giuridici
    specializzandosi in materia di Diritto d'Autore nel settore della Music and
    Entertainment Law presso l'Alta Scuola Federico Stella sulla Giustizia Penale
    dell'Università Cattolica del Sacro Cuore di Milano.
    Le prime esperienze professionali risalgono al 2017, quando firma i contenuti della
    videoscenografia del musical Musica Ribelle e La Forza dell'Amore di Eugenio
    Finardi, con regia di Emanuele Gamba. Nel 2017 collabora con lo studio di
    scenografia e scenotecnica Plastikart di Cesena, partecipando alla realizzazione di
    opere scultoree e scenografie per committenti di rilievo. Tra i lavori più significativi, si
    annovera la cura della scenografia dello spettacolo Orestea della Compagnia
    Anagoor, vincitore del Premio Ubu 2018 e del Leone d'Argento alla 46ª edizione
    della Biennale Internazionale del Teatro di Venezia. Ha inoltre collaborato per il
    regista Romeo Castellucci, contribuendo alla creazione della scenografia dell'opera
    Salome di R. Strauss, rappresentata al Salzburger Festspiele del 2018, e per il
    regista Marco Balich, la realizzazione della scenografia dello spettacolo Giudizio
    Universale - Sistine Chapel Immersive Show nel 2018. Durante questo periodo ha
    anche esercitato l'attività di direzione di scena, applicando le sue competenze
    tecniche e musicali in palcoscenico.
    Nel 2020 ha firmato gli arrangiamenti e la produzione audio e video per la
    promozione dell’Orchestra Stabile del Teatro Comunale di Bologna, sezione
    archi, durante la chiusura dei teatri dovuta alla pandemia da COVID-19.
    Nel 2022 ha ricoperto ruoli di rilievo come Assistente alla Direzione Artistica
    presso la Fondazione Orchestra e Coro Sinfonico LaVerdi di Milano.
    Dal 2019 prosegue la sua attività di progettazione artistica collaborando con diverse
    realtà culturali e curando progetti per bandi ministeriali, europei e privati. Tra le
    istituzioni prestigiose con cui ha collaborato in questa veste si annoverano la Malta
    Philarmonic, l’Ópera di Tenerife, il Teatro della Cooperativa di Milano in
    collaborazione con la Fondazione Cariplo e il Politecnico di Milano, nonché
    associazioni di divulgazione storica come A.N.E.D, A.N.P.I, Casa della Memoria di
    Milano; ed associazioni musicali come NoMus, centro studi e ricerche sulla musica
    del '900 e contemporanea, in partnership la Fondazione Ugo e Olga Levi di
    Venezia e l'Archivio Storico Ricordi.</p>`
};
//*generazione pagina progetti
function servicesGen() {
    resetPool();

    //identifica target
    let pool = document.querySelector('#Pool');
    pool.classList.add('d-flex', 'align-items-center', 'flex-column');

    //generazione primo blocco
    let intro = document.createElement('div');
    intro.setAttribute('id', 'Intro');
    intro.classList.add('d-flex', 'flex-column', 'align-items-center', 'w-100', 'introServices');
    pool.append(intro)
    //generazione figli
    let photo = document.createElement("div");
    photo.setAttribute('id', 'Photo');
    photo.classList.add('fototessera');
    intro.append(photo);

    let photoImg = document.createElement('img');
    photoImg.setAttribute('id', 'PhotoImg');
    photoImg.classList.add('w-100')
    photoImg.src = 'assets/images/fototessera.jpg'
    photo.appendChild(photoImg);

    let textIntro = document.createElement('p');
    textIntro.setAttribute('id', 'TextIntro');
    textIntro.innerHTML = `Nel corso degli anni, ho accumulato una vasta esperienza nella progettazione, gestione e sviluppo di progetti artistici. Ho perfezionato le competenze essenziali per garantire una rendicontazione economica efficace, assicurando così l'accesso ai finanziamenti disponibili attraverso la partecipazione a bandi regionali, ministeriali ed europei, collaborando attivamente con le Direzioni Generali e Artistiche di enti culturali per garantire il successo e la sostenibilità delle iniziative.`;
    textIntro.classList.add('shortText');
    intro.appendChild(textIntro);

    //generazione secondo blocco
    let services = document.createElement('div');
    services.setAttribute('id', 'Services');
    services.classList.add('w-100', 'ulServices', 'd-flex', 'flex-column', 'align-items-center');
    pool.appendChild(services)
    console.log('click services');

    let headline = document.createElement('h4');
    headline.setAttribute('id', 'HeadLine');
    headline.classList.add('headline', 'text-center', 'upperText');
    headline.innerText = 'managment culturale';
    services.append(headline);

    //generazione lista
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'UlServizi');
    ul.classList.add('listaServizi', 'w-100');
    services.appendChild(ul);
    let li1 = document.createElement('li');
    ul.appendChild(li1)
    li1.innerText = 'Progetti artistici';
    let li2 = document.createElement('li');
    ul.appendChild(li2)
    li2.innerText = 'Sviluppo e gestione bandi';
    let li3 = document.createElement('li');
    ul.appendChild(li3)
    li3.innerText = `Management e gestione contrattuale - music and entertainment law`;
    let li4 = document.createElement('li');
    ul.appendChild(li4)
    li4.innerText = 'promozione e comunicazione';

    scrollUp();
    partnerGen();
};
//* generazione enti collaboratori
function partnerGen() {

    let pool = document.querySelector('#Pool');

    /*chiamata ajax*/
    let urlAPI = 'db/db.json'
    let xhr = new XMLHttpRequest();
    xhr.open('GET', urlAPI);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let arrayEnti = JSON.parse(xhr.responseText);
            // console.table(arrayEnti);
            //creazione blocco gallery
            let collabBox = document.createElement('div');
            collabBox.setAttribute('id', 'CollabBox');
            collabBox.classList.add('w-100');
            pool.appendChild(collabBox);

            let headline = document.createElement('h4');
            headline.setAttribute('id', 'collabHeadLine');
            headline.classList.add('headline', 'text-center', 'mt-4', 'upperText');
            headline.innerText = 'enti con i quali ho collaborato';
            collabBox.append(headline);

            let logoGrid = document.createElement('div');
            logoGrid.setAttribute('id', 'LogoGrid');
            logoGrid.classList.add('w-100');
            collabBox.appendChild(logoGrid);

            arrayEnti.forEach(element => {
                let card = document.createElement('div');
                card.classList.add('myCard', 'd-flex', 'flex-row');
                logoGrid.append(card);

                card.innerHTML = `<img src="${element.immagine}" alt="${element.nome}" width="" height="">  `;
            });
        }
    }
    console.log('click partner');
};
//* generazione pagina portfolio
function scenografiaGen() {
    resetPool()
    console.log('click scenografia')

    //identifico e stilizzo contenitore dove genero
    let pool = document.querySelector('#Pool');
    pool.classList.add('d-flex', 'align-items-center', 'flex-column');

    //blocco immagine più testo
    let intro = document.createElement('div');
    intro.setAttribute('id', 'Intro');
    intro.classList.add('w-90', 'h-auto', 'introPortfolio');
    pool.append(intro);

    //blocco testo introduzione
    let textIntro = document.createElement('p');
    textIntro.setAttribute('id', 'TextIntro');
    textIntro.classList.add('shortText', 'w-100')
    textIntro.innerText = 'Le mie prime esperienze nel mondo dello spettacolo dal vivo hanno avuto inizio con la progettazione e la realizzazione di scenografie e opere scultore per spettacoli ed eventi di rilievo.';
    intro.appendChild(textIntro);
    setDesignGen();
}
//* generazione pagina scenografia
function setDesignGen() {
    let pool = document.querySelector('#Pool');

    /*chiamata ajax*/
    let urlAPI = 'db/portfolio.json'
    let xhr = new XMLHttpRequest();
    xhr.open('GET', urlAPI);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let arraySetDedign = JSON.parse(xhr.responseText);

            //itero array per generare lista elementi
            arraySetDedign.forEach(element => {

                let setDesignBox = document.createElement('div');
                setDesignBox.classList.add('designBox');
                pool.appendChild(setDesignBox);

                let headline = document.createElement('h4');
                headline.classList.add('headline')
                headline.innerText = `${element.nome}`
                setDesignBox.appendChild(headline);

                let cover = document.createElement('img');
                cover.src = `assets/images/projectCover/${element.id}.png`;
                //aggiungo onclick portandomi l'id dell'elemento
                cover.setAttribute("onclick", `expandSet(${element.id});`);
                cover.alt = `${element.descrizione}`;
                cover.classList.add('imgCover')
                setDesignBox.appendChild(cover);

            });


        };
    }
};

// funzione che espande immagine cliccata
function expandSet(id) {
    resetPool();
    let pool = document.querySelector('#Pool');
    //blocco testo introduzione

    element = new SetP;
    element.id = id;
    arrayLocale = [];
    arraySetDedign = [];
    arrayImg = [];
    let counter = 2;

    /*chiamata ajax a JSON interno*/
    let urlAPI = 'db/portfolio.json'
    let xhr = new XMLHttpRequest();
    xhr.open('GET', urlAPI);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let arraySetDedign = JSON.parse(xhr.responseText);

            //creo array per oggetto cliccato
            arraySetDedign.forEach(ele => {
                if (ele.id == id) {
                    arrayLocale.push(ele);
                    
                    //blocco testo introduzione
                    let textIntro = document.createElement('p');
                    textIntro.setAttribute('id', 'TextIntro');
                    textIntro.classList.add('shortText', 'w-90')
                    textIntro.innerText = `${ele.descrizione}`;
                    pool.append(textIntro);

                    //trasformo l'oggetto in array e poi lo itero
                    const galleria = Object.keys(ele.galleria);
                    // console.log(galleria)
                    galleria.forEach(element => {
                        let img = document.createElement('img');
                        img.classList.add('imgBox');
                        img.src = `assets/images/setProject${id}/${counter++}.png`;
                        pool.appendChild(img);
                    })
                }
            });
        };
    };
};

//!-------------------------MODAL---------------------------------------------------
//*FINESTRA MODALE
function modalShow() {
    let modale = document.getElementById('Modale');
    modale.classList.remove('hideMod');
    modale.classList.add('modale');
    console.log('apertura finestra modale');
}
//creazione bottone chiusura 
function closeButton() {
    let button = document.getElementById('closeB');
    button.addEventListener('click', hideMod);
}
// chiusura finestra modale
function hideMod() {
    let modale = document.getElementById('Modale');
    modale.classList.remove('modale');
    modale.classList.add('hideMod');
    console.log('chiusura finestra modale');
}
//riempio parametri per invio messaggio form
// function fillForm() {
//     let adrMail = document.querySelector('#formRichiesta');
//     adrMail.setAttribute("action", 'mailto:info@tiburonyacht.com');
//     form.setAttribute('href', 'mailto:info.@tiburonyacht.com');
//     form.setAttribute("action", "mailto:info.@tiburonyacht.com");
// }
//riempio parametri per invio messaggio tramte modale
function fillFormMod() {
    let adrMail = document.querySelector('#formModale');
    adrMail.setAttribute("action", 'mailto:chiaracannizzaro03@gmail.com');
    form.setAttribute('href', 'mailto:chiaracannizzaro03@gmail.com');
    form.setAttribute("action", "chiaracannizzaro03@gmail.com");

}
//riempio parametri per invio messaggio telefonico
// function fillWapp() {
//     btnHrefTel.setAttribute("href", "https://wa.me/393512537311");
//     btnHrefTel2.setAttribute("href", "https://wa.me/393512537311");
// }

//!------------------------MAINTENANCE----------------------------------------------------
//manutenzione
function underConstruction() {
    let body = document.querySelector('#Body');
    body.innerHTML = '';
    body.innerHTML = `<div id="contenitore">
 <h2>pagina in allestimento</h2>
 </div>`;
    console.log('pagina in allestimento');
}