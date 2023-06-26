//obtiene un controlador de la bola 1 (la más grande)
const balls = document.getElementsByClassName('ball1');

//crea el movimiento de los ojos a medida que se mueve el mouse la ball1 la sigue

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

 for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};

//La funciónb con la que cambio el color del fondo y los ojos

function cambiarEstilos() {
  const body = document.body;
  const balls = document.getElementsByClassName('ball1');

  const color = getRandomColor(); // Generar un color aleatorio

  body.style.backgroundColor = getRandomColor();
  body.style.color = color;

  for (let i = 0; i < 2; i++) {
    balls[i].style.backgroundColor = color;
    balls[i].style.color = color;
  }
}

// En esta funcion se genera un color de manera aleatoria, con Marth.rand.. y redondeo, le doy una ubicación para cada
// uno de los valores que puede tomar en hexadecimnal 

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }
