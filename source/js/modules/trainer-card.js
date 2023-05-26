let trainerCard = document.querySelectorAll('.trainers-card');

function active() {
  if (document.documentElement.clientWidth < 1200) {
    // eslint-disable-next-line no-invalid-this
    this.classList.toggle('trainers-card--active');
  }
}

if (trainerCard) {
  trainerCard.forEach((el) => el.addEventListener('click', active.call()));
}
