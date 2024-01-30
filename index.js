

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle');
    const cardsSet1 = document.querySelectorAll('.priceCard:nth-child(-n+3)');
    const cardsSet2 = document.querySelectorAll('.priceCard:nth-child(n+4)');
  
    toggle.addEventListener('change', function() {
      cardsSet1.forEach(card => {
        card.classList.toggle('active');
      });
  
      cardsSet2.forEach(card => {
        card.classList.toggle('active');
      });
    });
  });
  