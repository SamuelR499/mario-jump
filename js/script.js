const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOver = document.querySelector('.game-over');
const score = document.getElementById('contador');

let contador = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px','');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png'; 
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        
        clouds.style.animation = 'none';
        clouds.style.right = `${cloudsPosition}px`;

        gameOver.style.display = 'flex';
        clearInterval(loop);
    };

    if(pipePosition <= 120) {
        contador++;
        score.innerText = contador; 
    }
},10);



document.addEventListener('keydown', jump);
