let freccia = document.querySelector('#freccia');
let img = document.querySelector('#img')
let dev = document.querySelector('#dev')

freccia.addEventListener('click',()=>{
    
    img.style.filter = "brightness(20%)";
    img.style.transition = "1s";
    
    
    // if(window.innerWidth<767){
    //     freccia.style.transform = "rotate(-45deg)"
    // }else{
    // freccia.style.transform = "rotate(-135deg)"
    // }

    dev.style.transform = "translateX(0%)"
    dev.style.transition = "1s";

    let col2 = document.querySelector('#col2');
    let par = document.createElement('p');

    par.classList.add('par');
    if(window.innerWidth>=1200){
        par.innerHTML =`
        Sono uno sviluppatore<br> <strong>Web Full-Stack</strong>. Conosco i linguaggi di<br> programmazione <strong>HTML, CSS, JS, PHP</strong>, Framework <strong>Bootstrap</strong> e <strong>Laravel</strong> e sono formato sulla metodologia <strong>Agile</strong> e <strong>Scrum</strong>.
        Sono appassionato di <strong>Grafica</strong> e orientato al <strong>Frontend</strong>. Arrivo dal corso Full-Stack Web Developer<br> di <strong>Aulab Hackademy</strong> e da studi universitari di <strong>Arte, Cinema e Teatro</strong>.
        Sono una persona artistica dalle spiccate doti relazionali e sempre alla ricerca<br> di <strong>nuove sfide</strong>. Aspiro al costante<br> miglioramento di me stesso. 
        `;
        col2.append(par);
    }
    else if(window.innerWidth<1200 && window.innerWidth>768){
        par.innerHTML =`
        Sono uno sviluppatore<br> <strong>Web Full-Stack</strong>. Conosco i linguaggi di<br> programmazione <strong>HTML, CSS, JS, PHP</strong>, Framework <strong>Bootstrap</strong> e <strong>Laravel</strong> e sono formato sulla metodologia <strong>Agile</strong> e <strong>Scrum</strong>.
        Sono appassionato di <strong>Grafica</strong> e orientato<br> al <strong>Frontend</strong>. Arrivo dal corso Full-Stack Web Developer<br> di <strong>Aulab Hackademy</strong> e da studi universitari di <strong>Arte, Cinema e Teatro</strong>.
        Sono una persona artistica<br> dalle spiccate doti relazionali e sempre alla ricerca<br> di <strong>nuove sfide</strong>. Aspiro al costante<br> miglioramento di me stesso. 
        `;
        col2.append(par);
    }
    else if(window.innerWidth<767){
        par.innerHTML =`
        Sono uno sviluppatore<br> <strong>Web Full-Stack</strong>. Conosco i linguaggi di<br> programmazione <strong>HTML, CSS, JS, PHP</strong>, Framework <br><strong>Bootstrap</strong> e <strong>Laravel</strong> e sono formato sulla metodologia <br><strong>Agile</strong> e <strong>Scrum</strong>.
        Sono appassionato di <strong>Grafica</strong> e orientato<br> al <strong>Frontend</strong>. Arrivo dal corso Full-Stack Web Developer<br> di <strong>Aulab Hackademy</strong> e da studi universitari di <br><strong>Arte, Cinema e Teatro</strong>.
        Sono una persona artistica<br> dalle spiccate doti relazionali e sempre alla ricerca<br> di <strong>nuove sfide</strong>. Aspiro al costante<br> miglioramento di me stesso. 
        `;
        col2.append(par);
    }

    freccia.remove()

    let x = document.createElement('i')
    x.setAttribute('id', 'close')
    x.setAttribute('class','bi bi-x-lg')
    dev.append(x)

    let close = document.querySelector('#close')
    close.addEventListener('click', ()=>{
        
        // par.remove()
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



