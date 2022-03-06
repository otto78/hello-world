let freccia = document.querySelector('#freccia');
let img = document.querySelector('#img')
let dev = document.querySelector('#dev')
let bio = document.querySelector('#bio')
let portfolioBtn = document.querySelector('#portfolioBtn')
let card = document.querySelector('#card')
let jobs = document.querySelector('#jobs')
let backBtn = document.querySelector('#backBtn')

// Pulsante bio
freccia.addEventListener('click',()=>{
    
    dev.classList.toggle('dev-sx')
    dev.classList.toggle('dev-dx')
    
    freccia.classList.toggle('bi-arrow-down-left')
    freccia.classList.toggle('bi-x-lg')
    
    img.classList.toggle('filter')
    bio.classList.toggle('d-none')
    bio.classList.toggle('fade-in')
    
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
        jobs.classList.add('d-none')
        img.classList.remove('filter')
        bio.classList.toggle('d-none')
    }
})


//Pulsante PortFolio
portfolioBtn.addEventListener('click', ()=>{
    
 
    if(img.classList.contains('filter')){

        img.classList.remove('filter')
        card.classList.toggle('d-none')
        jobs.classList.remove('d-none')
        bio.classList.toggle('d-none')
                
    }else{
        dev.classList.toggle('dev-sx')
        dev.classList.toggle('dev-dx')
            
        freccia.classList.toggle('bi-arrow-down-left')
        freccia.classList.toggle('bi-x-lg')
        
        card.classList.toggle('d-none')
        jobs.classList.toggle('d-none')

    }    
})

// Pulsante Back
backBtn.addEventListener('click', ()=>{

    dev.classList.toggle('dev-sx')
    dev.classList.toggle('dev-dx')

    jobs.classList.add('d-none')
    card.classList.remove('d-none')
})

    

    


function nascondi(el){
    el.style.opacity = '0';
    el.style.transition = '0.5s'
    setTimeout(elimina, 500)
    function elimina(){el.classList.add('d-none')}

}

function mostra(el){
    el.classList.remove('d-none')
    el.style.opacity = '1';
    el.style.transition = '0.5s'
}

// function rimuovi(el){
//     el.style.opacity = '0';
//     el.style.transition = '1s'
//     setTimeout(elimina, 1000)
//     function elimina(){el.remove()}
// }




