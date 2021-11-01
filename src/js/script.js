document.querySelector('.menu-button-list').addEventListener('click', (event) => {
  if (event.target.matches('.menu-button') || event.target.matches('.tab-name')) clearActive();

  for (let i = 1; i <= document.querySelectorAll('.menu-button').length; i++) {
    if (event.target.matches('.button' + i)) {
      document.querySelector('.tab' + i).classList.add('active');
    }
  }
});

function clearActive() {
  for (let i = 0; i < document.querySelectorAll('.menu-button').length; i++) {
    document.querySelectorAll('.tab-content')[i].classList.remove('active');
  }
}
