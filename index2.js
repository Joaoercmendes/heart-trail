const bodyElement = document.querySelector('body');

bodyElement.addEventListener('mousemove', (event) => {
  const posX = event.offsetX;
  const posY = event.offsetY;

  const spanElement = document.createElement('span');
  spanElement.style.left = posX + 'px';
  spanElement.style.top = posY + 'px';

  bodyElement.appendChild(spanElement);

  const size = Math.random() * 100;
  spanElement.style.height = size + 'px';
  spanElement.style.width = size + 'px';

  setTimeout(() => {
    spanElement.remove();
  }, 2000);

});