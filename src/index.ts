//index.ts

import './styles/main.scss';
import './styles/variables.less';
import { initDeckSlider } from './deckSlider';

import carImage from './assets/images/car.jpg';
import carImage2 from './assets/images/car2.jpg';
import carImage3 from './assets/images/car3.jpg';

// Получаем контейнер для карточек
const deck = document.getElementById('deck') as HTMLElement;

// Массив картинок для слайдера
const images = [carImage, carImage2, carImage3];

// Массив случайных углов для каждой карточки
const randomRotations: number[] = images.map(() => Math.random() * 20 - 10);

// Создаём карточки один раз
images.forEach((src, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.backgroundImage = `url(${src})`;

  // Порядок наложения
  card.style.zIndex = (images.length - index).toString();

  // Смещение и сохранённый случайный поворот
  const offset = index * 10;
  const rotation = randomRotations[index];
  card.style.transform = `translate(${offset}px, ${offset}px) rotate(${rotation}deg)`;

  deck.appendChild(card);
});

// Инициализируем слайдер (вешаем обработчики на существующие карточки)
initDeckSlider();

// Работа с описанием и кнопкой
const descElem = document.getElementById('car-description') as HTMLElement;
const btn = document.getElementById('change-description') as HTMLButtonElement;

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
