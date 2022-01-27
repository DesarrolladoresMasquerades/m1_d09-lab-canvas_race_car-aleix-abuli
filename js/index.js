window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.getElementById("canvas");
    canvas.classList.add('canvas');

    car.draw();
  }
};

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const carImg = new Image();
carImg.src = "images/car.png";

let frameNumber;
const car = {
    animating: false,
    img: carImg,
    x: 0,
    y: 0,
    draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(carImg, 210, 500, 80,160)
        if(this.animating) {
          frameNumber = requestAnimationFrame(this.draw.bind(this));
        }
    }
};

canvas.addEventListener('keydown', (e)=>{
  switch(e.code) {
      case 'ArrowLeft':
          car.x -= 1;
          break;
      case 'ArrowRight':
          car.x += 1;
          break;
  }
  car.draw();
});