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
    scenografiaGen();
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
    let pool = document.querySelector('#Pool');
    pool.innerHTML = ''
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

    bioText.innerHTML = `<p>Chiara Leonida Cannizzaro è un'artista poliedrica con
     competenze nel management culturale, nata nel 1993 nella provincia di Varese.
      Cresciuta a Torino fin dalla sua infanzia, ha coltivato la passione per la
       musica dedicandosi allo studio del violino. Ha ottenuto qualifiche tecniche        
       come tecnico di costruzione e progettazione di scenografia teatrale presso 
       le Scuole Tecniche San Carlo di Torino e tecnico audio e luci presso l'Accademia
        Teatro alla Scala. Successivamente, si è specializzata nella tutela del Diritto
         d'Autore nell'ambito musicale e dell'intrattenimento presso l'Alta Scuola
          Federico Stella sulla Giustizia Penale dell'Università Cattolica del Sacro
           Cuore di Milano. Ha contribuito a importanti produzioni artistiche, tra cui
            il musical "Musica Ribelle e La Forza dell'Amore" di Eugenio Finardi e lo
             spettacolo "Orestea" per la Compagnia Anagoor, vincitore del Premio Ubu e 
             del Leone d'argento della Biennale Teatro di Venezia nel 2018. Ha anche partecipato
              a produzioni di registi di fama internazionale come Romeo Castellucci e Marco Balich.
               Inoltre, ha ricoperto ruoli di rilievo come Assistente alla Direzione Artistica
                presso la Fondazione Orchestra e Coro Sinfonico La Verdi di Milano e ha
                 collaborato con istituzioni culturali di prestigio, curando progetti artistici
                  per bandi ministeriali, europei e privati.</p>`
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
    intro.classList.add('d-flex', 'flex-column', 'align-items-center', 'w-80', 'introServices');
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
    services.classList.add('w-80', 'ulServices', 'd-flex', 'flex-column', 'align-items-center');
    pool.appendChild(services)
    console.log('click services');

    let headline = document.createElement('h4');
    headline.setAttribute('id', 'HeadLine');
    headline.classList.add('headline', 'text-center');
    headline.innerText = 'progettazione artistica e managment culturale';
    services.append(headline);

    //generazione lista
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'UlServizi');
    ul.classList.add('listaServizi');
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
            console.table(arrayEnti);
            //creazione blocco gallery
            let collabBox = document.createElement('div');
            collabBox.setAttribute('id', 'CollabBox');
            collabBox.classList.add('w-80');
            pool.appendChild(collabBox);

            let headline = document.createElement('h4');
            headline.setAttribute('id', 'collabHeadLine');
            headline.classList.add('headline', 'text-center', 'mt-4');
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
    intro.classList.add('w-80', 'h-auto', 'introPortfolio');
    pool.append(intro);

    //blocco testo introduzione
    let textIntro = document.createElement('p');
    textIntro.setAttribute('id', 'TextIntro');
    textIntro.classList.add('shortText')
    textIntro.innerText = 'Nei primi anni in cui mi dono avvicinata al mondo dello spettacolo mi sono occupata di progettazione e realizzazione scenografica collaborando a importanti spettacoli e eventi';
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
                cover.alt=`test`;
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
    element = new SetP;
    element.id = id;
    arrayLocale = [];
    arraySetDedign = [];
    arrayImg = [];
    let counter = 1;

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

                    //trasformo l'oggetto in array e poi lo itero
                    const galleria = Object.keys(ele.galleria);
                    console.log(galleria)
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
function fillForm() {
    let adrMail = document.querySelector('#formRichiesta');
    adrMail.setAttribute("action", 'mailto:info@tiburonyacht.com');
    form.setAttribute('href', 'mailto:info.@tiburonyacht.com');
    form.setAttribute("action", "mailto:info.@tiburonyacht.com");
}
//riempio parametri per invio messaggio tramte modale
function fillFormMod() {
    let adrMail = document.querySelector('#formModale');
    adrMail.setAttribute("action", 'mailto:info@tiburonyacht.com');
    form.setAttribute('href', 'mailto:info.@tiburonyacht.com');
    form.setAttribute("action", "mailto:info.@tiburonyacht.com");
}
//riempio parametri per invio messaggio telefonico
function fillWapp() {
    btnHrefTel.setAttribute("href", "https://wa.me/393512537311");
    btnHrefTel2.setAttribute("href", "https://wa.me/393512537311");
}

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