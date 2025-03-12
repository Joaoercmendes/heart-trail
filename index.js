const bodyElement = document.querySelector('body');

bodyElement.addEventListener('mousemove', (event) => {
  //verifica posição do rato
  const xPos = event.offsetX;
  const yPos = event.offsetY;

  //define o elemento e a posição
  const spanElement = document.createElement('span');
  spanElement.style.left = xPos + 'px';
  spanElement.style.top = yPos +'px';

  //coloca a span no body
  bodyElement.appendChild(spanElement);

  //randomizar tamanho
  const size = Math.random() * 100;
  spanElement.style.width = size + 'px';
  spanElement.style.height = size +'px';

  //remover span depois de 2s
  setTimeout(() => {
    spanElement.remove();
  }, 2000);
});