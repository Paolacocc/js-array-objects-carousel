// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.


const imgArray = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



//old file
// creare un array 

// const imgArray = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];


const sliderItems = document.querySelector('.slider-items');
console.log(sliderItems);

for (let i = 0; i < imgArray.length; i++) {
    const currentImg = imgArray[i];
    // console.log(currentImg);
    for (let key in currentImg) {
      const objetInArray = currentImg.image;
        
    const slideImg = 
        `<div class="item">
            <img src="${objetInArray}" alt="">
        </div>`;
        console.log(slideImg);
       
    sliderItems.innerHTML += slideImg;    
}
}


//stato iniziale
const items = document.getElementsByClassName("item");
console.log(items)

//prima immagine
let activeStatus = 0;
items[activeStatus].classList.add("active");

//richiamo i due bottoni
const downBtn = document.querySelector(".down");
const upBtn = document.querySelector(".up");


//bottone down
downBtn.addEventListener("click", function(){

    upBtn.classList.remove("hidden")
        //si blocca all'ultima immagine
        if (activeStatus < imgArray.length - 1) {
        // rimuovo active - aumento active - do active al successivo
        items[activeStatus].classList.remove('active');
        activeStatus++;
        items[activeStatus].classList.add('active');
        //nascondo il bottone

        if (activeStatus === imgArray.length - 1) {
            downBtn.classList.add("hidden");
        }
       
}
}) 

//bottone up

upBtn.classList.add("hidden")

upBtn.addEventListener("click", function(){

    downBtn.classList.remove("hidden")
    
    items[activeStatus].classList.remove('active');
    activeStatus--;
    items[activeStatus].classList.add('active');
    
    if (activeStatus === 0) {
        upBtn.classList.add("hidden")
    }
})

// init intervallo
let interval = setInterval(autoPlay, 2000);

function autoPlay (){
    upBtn.classList.remove("hidden")
    //si blocca all'ultima immagine
    if (activeStatus < imgArray.length) {
    // rimuovo active - aumento active - do active al successivo
    items[activeStatus].classList.remove('active');
    activeStatus++;  
   if (activeStatus === imgArray.length) {
    activeStatus = 0;
   }
   items[activeStatus].classList.add('active')
}
}