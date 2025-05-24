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

// Создаём и добавляем карточки в контейнер
images.forEach((src, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.backgroundImage = `url(${src})`;
  // Небольшое смещение и порядок по z-index для эффекта стопки карт
  card.style.zIndex = (images.length - index).toString();
  card.style.transform = `translate(${index * 10}px, ${index * 10}px)`;
  deck.appendChild(card);
});

// Инициализируем слайдер один раз при загрузке
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
