// src/deckSlider.ts

export function initDeckSlider() {
  const deck = document.getElementById('deck');
  if (!deck) return;

  let cards = Array.from(deck.children) as HTMLElement[];

  deck.addEventListener('click', () => {
    if (cards.length === 0) return;

    const topCard = cards.shift()!;
    topCard.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    topCard.style.transform = 'translateX(400px) rotate(30deg)';
    topCard.style.opacity = '0';

    setTimeout(() => {
      topCard.style.transition = 'none';
      topCard.style.transform = 'translate(0,0)';
      topCard.style.opacity = '1';
      deck.appendChild(topCard);
      cards.push(topCard);

      cards.forEach((card, i) => {
        card.style.zIndex = (cards.length - i).toString();
        card.style.transform = `translate(${i * 10}px, ${i * 10}px)`;
      });
    }, 600);
  });
}
