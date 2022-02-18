

width = document.documentElement.clientWidth
console.log(width)

w =document.documentElement.scrollWidth
console.log(w)

window.onresize = function(){
    console.log(window.innerWidth)
}

let heightOutput = document.querySelector('#height');
let widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput = window.innerHeight;
  widthOutput = window.innerWidth;
}

window.onresize = reportWindowSize;


console.log(widthOutput)