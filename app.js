const form = document.querySelector('form');

const label = document.getElementById('score');

console.log(label);

const correctAnswers = ['c', 'b', 'd', 'b'];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let score = 0;

  const responseAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ];

  responseAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  label.innerHTML = 'Total de Pontos: ' + score;
});
