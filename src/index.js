import './style.css';
import leaderboard from './leaderboardApi.js';

const refreshBtn = document.querySelector('#get-score');
const submitScore = document.querySelector('#add-score');
const nameScoreContainer = document.querySelector('ul');
const userName = document.querySelector('#name');
const userScore = document.querySelector('#score');
const message = document.querySelector('#status');

refreshBtn.addEventListener('click', async () => {
  const scores = await leaderboard.getScores();
  nameScoreContainer.innerHTML = '';
  for (let i = 0; i < scores.length; i += 1) {
    nameScoreContainer.innerHTML += `<li>${scores[i].user}: ${scores[i].score}</li>`;
  }
});

submitScore.addEventListener('click', async (e) => {
  e.preventDefault();
  const scoreType = parseInt(userScore.value, 10);
  if (userName.value !== '' && userScore.value !== '' && scoreType) {
    await leaderboard.createScore(userName.value, userScore.value);
    message.innerHTML = 'Score Added Successfully';
    userName.value = '';
    userScore.value = '';
    setTimeout(() => {
      message.innerHTML = '';
    }, 2000);
  } else {
    message.innerHTML = 'Enter score as an integer and a valid username, Please Try again';
    userName.value = '';
    userScore.value = '';
    setTimeout(() => {
      message.innerHTML = '';
    }, 2000);
  }
});
