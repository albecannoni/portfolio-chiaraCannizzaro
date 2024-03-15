//*SCRIPT APP

//variabili globali
let modale = document.querySelector('#Modale');


//innesco init
window.addEventListener('load', init);


//!----------------------------------------------------------------------------
//Preparazione all' utente
function init() {
    bioGen()
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
//funzioni che generano i contenuti

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
    bioText.classList.add('testoBio');
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


    let bandiBox = document.createElement("div");
    bandiBox.setAttribute('id', 'BandiBox');
    bandiBox.classList.add('boxService');
    pool.appendChild(bandiBox);

    let headLine = document.createElement("h4");
    bandiBox.setAttribute('id', 'Servizio1');
    headLine.classList.add('headLine', 'text-center', 'mt-2');
    headLine.innerHTML = 'sviluppo bandi';
    bandiBox.appendChild(headLine);
    let servizio1 = document.querySelector('#Servizio1')
    servizio1.addEventListener('click', () => { console.log('cliccato') })




    // let slideBox = document.createElement("div");
    // slideBox.setAttribute('id', 'slideBox');
    // slideBox.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'bg-pesca', 'py-2');
    // pool.appendChild(slideBox);
};

function servicesGen() {
    console.log('click services');
};
function partnerGen() {
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

