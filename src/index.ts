import './styles/main.scss';
import './styles/variables.less';

import { example } from './components/Example';

console.log('Привіт із TypeScript!');
example();
import carImage from './assets/images/car.jpg';

const img = document.getElementById('car-image') as HTMLImageElement;
const descElem = document.getElementById('car-description') as HTMLElement;
const btn = document.getElementById('change-description') as HTMLButtonElement;

img.src = carImage;

const descriptions: string[] = [
  "Мене",
  "задовбав",
  "цей",
  "вебпак!"
];

let currentIndex = 0;

btn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % descriptions.length;
  descElem.textContent = descriptions[currentIndex];
});
