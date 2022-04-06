const gameID = 'Ok2CZYJUHTw22wOK4Qdr';
const createScore = (userName, userScore) => fetch(
  `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`,
  {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),
  },
).then((res) => res.json());

const getScores = () => fetch(
  `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`,
).then((res) => res.json());

export default { createScore, getScores };