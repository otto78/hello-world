let freccia = document.querySelector('#freccia');
let img = document.querySelector('#img')
let dev = document.querySelector('#dev')

freccia.addEventListener('click',()=>{
    
    img.style.filter = "brightness(20%)";
    img.style.transition = "1s";

    dev.style.transform = "translateX(0%)"
    dev.style.transition = "1s";

    let col2 = document.querySelector('#col2');
    let par = document.createElement('p');

    par.classList.add('par');  
        par.innerHTML =`
        Sono uno sviluppatore<br> <strong>Web Full-Stack</strong>. Conosco i linguaggi di<br> programmazione <strong>HTML, CSS, JS, PHP</strong>, Framework <br><strong>Bootstrap</strong> e <strong>Laravel</strong> e sono formato sulla metodologia <br><strong>Agile</strong> e <strong>Scrum</strong>.
        Sono appassionato di <strong>Grafica</strong> e orientato<br> al <strong>Frontend</strong>. Arrivo dal corso Full-Stack Web Developer<br> di <strong>Aulab Hackademy</strong> e da studi universitari di <br><strong>Arte, Cinema e Teatro</strong>.
        Sono una persona artistica<br> dalle spiccate doti relazionali e sempre alla ricerca<br> di <strong>nuove sfide</strong>. Aspiro al costante<br> miglioramento di me stesso. 
        `;

    col2.append(par);
    
    freccia.remove()

    let x = document.createElement('i')
    x.setAttribute('id', 'close')
    x.setAttribute('class','bi bi-x-lg')
    dev.append(x)

    let close = document.querySelector('#close')
    close.addEventListener('click', ()=>{
        
        rimuovi(par)
        x.remove()

        img.style.filter = "brightness(100%)";
        img.style.transition = "1s";
        
        dev.append(freccia)

        if(window.innerWidth>767){
        dev.style.transform = "translateX(20%)"
        dev.style.transition = "1s";}   

    })
})

function rimuovi(el){
    el.style.opacity = '0';
    el.style.transition = '1s'
    setTimeout(elimina, 1000)
    function elimina(){el.remove()}
}

let portfolioBtn = document.querySelector('#portfolioBtn')





    portfolioBtn.addEventListener('click', ()=>{
        
        dev.style.transform = "translateX(0%)"
        dev.style.transition = "1s";
        
        // img.classList.add('d-none')
        // portfolioBtn.classList.add('d-none')
        nascondi(img)
        nascondi(portfolioBtn)
        
        let portfolioDiv = document.createElement('div')
        portfolioDiv.setAttribute('id', 'portfolio')
        
        let jobs = document.createElement('div')       
        jobs.innerHTML = `
        <p>Sito di sefora</p>
        <p>Memory</p>
        <p>presto.it</p>
        <button id="backBtn" class="btn"><i class="bi bi-arrow-left-circle-fill"></i></button>
        `
        
        portfolioDiv.append(jobs)
          
        
        function port() {
            col2.append(portfolioDiv)
            let backBtn = document.querySelector('#backBtn')
            backBtn.addEventListener('click', ()=>{
            nascondi(portfolioDiv)
            dev.style.transform = "translateX(20%)"
            dev.style.transition = "1s";
            
           
            mostra(img)
            mostra(portfolioBtn)

            
        })
        
        }
        
        
        
        
        setTimeout(port,1001)
        
        
    
    })

    
    
function nascondi(el){
    el.style.opacity = '0';
    el.style.transition = '1s'
    setTimeout(elimina, 1000)
    function elimina(){el.classList.add('d-none')}

}

function mostra(el){
    el.classList.remove('d-none')
    el.style.opacity = '1';
    el.style.transition = '1s'
}





