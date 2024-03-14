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

    let bioText = document.createElement("div");
    bioText.setAttribute('id', 'BioText');
    bioText.classList.add('testoBio');
    pool.appendChild(bioText);
    bioText.innerHTML = `<p>Chiara Leonida Cannizzaro è nata nel 1993
     in provincia di Varese ed è una figura poliedrica. Fin dalla mia 
     infanzia, ha coltivato la passione per la <strong>musica</strong> dedicandosi allo
      studio del violino. Ha conseguito la qualifica di tecnico di costruzione
       di scenografia presso le Scuole Tecniche <strong>San Carlo di Torino</strong> e quella di
        tecnico audio-luci presso l'<strong>Accademia Teatro alla Scala</strong>. Nel 2023, si è
         specializzata nella tutela del <strong>Diritto d'Autore</strong> nell'ambito musicale e 
         dell'intrattenimento e nelle nuove tecnologie dell'arte, tra cui l'intelligenza
          artificiale, gli NFT e il metaverso, presso l'Alta Scuola Federico Stella sulla
           Giustizia Penale dell'<strong>Università Cattolica del Sacro Cuore di Milano</strong>. Chiara ha
            continuato la sua attività di <strong>progettazione artistica</strong> collaborando con diverse 
            realtà culturali e curando progetti per <strong>bandi ministeriali</strong>, europei e privati. Ha
             lavorato con istituzioni prestigiose come il Teatro della Cooperativa di Milano in
              collaborazione con la <strong>Fondazione Cariplo</strong> e il Politecnico di Milano. Ha inoltre
               collaborato con associazioni culturali come NoMus, centro studi e ricerche sulla
                musica del '900 e contemporanea, in partnership con istituzioni di rilievo come
                 la Fondazione Ugo e Olga Levi di Venezia e l'<strong>Archivio Storico Ricordi</strong></p>`


    let bandiBox = document.createElement("div");
    bandiBox.setAttribute('id', 'BandiBox');
    bandiBox.classList.add('boxService');
    pool.appendChild(bandiBox);

    let headLine = document.createElement("h4");
    bandiBox.setAttribute('id', 'Servizio1');
    headLine.classList.add('headLine', 'text-center', 'mt-2');
    headLine.innerHTML = 'sviluppo bandi';
    bandiBox.appendChild(headLine);
    let servizio1 = document.querySelector( '#Servizio1')
    servizio1.addEventListener('click', ()=> {console.log('cliccato')})

    
    

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

