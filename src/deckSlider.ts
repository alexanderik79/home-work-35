export function initDeckSlider() {
  const deck = document.getElementById('deck');
  if (!deck) return;

  let cards = Array.from(deck.children) as HTMLElement[];

  deck.addEventListener('click', () => {
    if (cards.length === 0) return;

    const topCard = cards.shift()!;

    // Получаем текущий поворот, чтобы сделать "уход" более естественным
    const currentRotation = getRotationFromTransform(topCard.style.transform);
    const exitRotation = currentRotation + 20;

    topCard.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    topCard.style.transform = `translateX(400px) rotate(${exitRotation}deg)`;
    topCard.style.opacity = '0';

    setTimeout(() => {
      // Новый случайный угол от -15 до +15
      const newRotation = Math.random() * 30 - 15;

      topCard.style.transition = 'none';
      topCard.style.opacity = '1';

      // Возвращаем в конец
      deck.appendChild(topCard);
      cards.push(topCard);

      // Обновляем все стили карт
      cards.forEach((card, i) => {
        const offset = i * 10;
        const rotation = (card === topCard) ? newRotation : getRotationFromTransform(card.style.transform);
        card.style.zIndex = (cards.length - i).toString();
        card.style.transform = `translate(${offset}px, ${offset}px) rotate(${rotation}deg)`;
      });
    }, 600);
  });

  function getRotationFromTransform(transform: string): number {
    const match = transform.match(/rotate\((-?\d+\.?\d*)deg\)/);
    return match ? parseFloat(match[1]) : 0;
  }
}
