import './style.css';
import leaderboard from './leaderboardApi.js'

const newGame = async () => {
  await leaderboard.createGame()
}

newGame();

const refreshBtn = document.querySelector("#get-score");
const submitScore = document.querySelector()

