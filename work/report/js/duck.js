(function(){
    'use strict'

    var area = document.body,
    areaHeight = window.innerHeight,
    areaWidth = window.innerWidth,
    timer = 1000
    duck = document.createElement('img');

    
   duck.src='work/report/img/duck.png';
   duck.style.position ='absolute';
   duck.style.left = '0px';
   duck.style.top = '0px';
   duck.style.zIndex = 10000;
   duck.addEventListener('click', newDuck);
    
   function newDuck() {
    var newX = Math.floor(Math.random() * (areaWidth-duck.width)),
        newY = Math.floor(Math.random() * (areaHeight-duck.height));

    duck.style.left = newX+'px';
    duck.style.top = newY+'px';
    area.appendChild(duck);
}

function startGame() {
    window.setInterval(newDuck, timer);
}
startGame();
})();