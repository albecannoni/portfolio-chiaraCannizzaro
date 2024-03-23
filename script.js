//*SCRIPT APP

//variabili globali
let modale = document.querySelector('#Modale');
let arrayEnti = [];


//class collaboratori
class Enti {
    constructor(id, nome, descrizione, immagine) {

        caratteristiche = new Caratteristiche;
        this.id = id++;
        this.nome = nome;
        this.descrizione = descrizione;
        this.immagine = immagine;
    }
}


//innesco init
window.addEventListener('load', init);


//!----------------------------------------------------------------------------
//Preparazione all' utente
function init() {
    bioGen();
    // servicesGen();
    eventHandler()
    // underConstruction();
}


function eventHandler() {
    console.log('in ascolto');

    let contatti = document.getElementById('contatti');
    let bio = document.getElementById('Bio');
    let services = document.querySelector('#Services');
    let partner = document.querySelector('#Partner');

    contatti.addEventListener('click', modalShow);
    bio.addEventListener('click', bioGen);
    services.addEventListener('click', servicesGen);
    partner.addEventListener('click', partnerGen);


}

function resetPool() {
    let pool = document.querySelector('#Pool');
    pool.innerHTML = ''
}

//!----------------------------------------------------------------------------
//?funzioni che generano i contenuti

//generazione pagina bio
function bioGen() {
    console.log('click biografia');
    resetPool()

    let pool = document.querySelector('#Pool');
    pool.classList.add('d-flex', 'align-items-center', 'flex-column');
    let photo = document.createElement("div");
    photo.setAttribute('id', 'Photo');
    photo.classList.add('fototessera');
    pool.append(photo);
    let photoImg = document.createElement('img');
    photoImg.setAttribute('id', 'PhotoImg');
    photoImg.classList.add('w-100')
    photoImg.src = 'assets/images/fototessera.jpg'
    photo.appendChild(photoImg);


    let bioText = document.createElement("div");
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

    // let headLine = document.createElement("h4");
    // bandiBox.setAttribute('id', 'Servizio1');
    // headLine.classList.add('headLine', 'text-center', 'mt-2');
    // headLine.innerHTML = 'sviluppo bandi';
    // bandiBox.appendChild(headLine);
    // let servizio1 = document.querySelector('#Servizio1')
    // servizio1.addEventListener('click', () => { console.log('cliccato') })




    // let slideBox = document.createElement("div");
    // slideBox.setAttribute('id', 'slideBox');
    // slideBox.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'bg-pesca', 'py-2');
    // pool.appendChild(slideBox);
};

function servicesGen() {
    resetPool();

    //identifica target
    let pool = document.querySelector('#Pool');
    pool.classList.add('d-flex', 'align-items-center', 'flex-column');

    //generazione primo blocco
    let intro = document.createElement('div');
    intro.setAttribute('id', 'Intro');
    intro.classList.add('d-flex','flex-column','align-items-center', 'w-80', 'introServices');
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
                

                card.innerHTML=`<img src="${element.immagine}" alt="${element.nome}" width="" height="">  `

                
            });
        }
    }
    console.log('click partner');
};

//!----------------------------------------------------------------------------
//*FINESTRA MODALE
function modalShow() {
    let modale = document.getElementById('Modale');
    modale.classList.remove('hideMod');
    modale.classList.add('modale');
    console.log('apertura finestra modale');

}

function closeButton() {
    let button = document.getElementById('closeB');
    button.addEventListener('click', hideMod);
}

function hideMod() {
    let modale = document.getElementById('Modale');
    modale.classList.remove('modale');
    modale.classList.add('hideMod');
    console.log('chiusura finestra modale');
}

function fillForm() {
    let adrMail = document.querySelector('#formRichiesta');
    adrMail.setAttribute("action", 'mailto:info@tiburonyacht.com');
    form.setAttribute('href', 'mailto:info.@tiburonyacht.com');
    form.setAttribute("action", "mailto:info.@tiburonyacht.com");
}
function fillFormMod() {
    let adrMail = document.querySelector('#formModale');
    adrMail.setAttribute("action", 'mailto:info@tiburonyacht.com');
    form.setAttribute('href', 'mailto:info.@tiburonyacht.com');
    form.setAttribute("action", "mailto:info.@tiburonyacht.com");
}

function fillWapp() {
    btnHrefTel.setAttribute("href", "https://wa.me/393512537311");
    btnHrefTel2.setAttribute("href", "https://wa.me/393512537311");
}

//!----------------------------------------------------------------------------
//manutenzione
function underConstruction() {
    let body = document.querySelector('#Body');
    body.innerHTML = '';
    body.innerHTML = `<div id="contenitore">
 <h2>pagina in allestimento</h2>
 </div>`;
    console.log('pagina in allestimento');
}

