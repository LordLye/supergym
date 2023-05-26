let trainerCards = document.querySelectorAll('.trainers-card');

for (let i = 0; i < trainerCards.length; i++) {
  trainerCards[i].addEventListener('click', function () {
    trainerCards[i].classList.toggle('trainers-card--active');
  });
}
