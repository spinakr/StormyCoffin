const serviceBase = '/score/';

export const submit = (playerId, score) => {
  return new Promise((resolve, reject) => {
    const url = `${serviceBase}userScore/${playerId}`;
    fetch(url, { method: 'PATCH', body: JSON.stringify(score), headers: { 'Content-Type': 'application/json' } }).then((response) => {
      if (response.ok) {
        response.text().then(resolve);
      } else {
        reject(`failed to commit changes: ${response.statusText}`);
      }
    });
  });
};

export const getScores = () => {
  return new Promise((resolve, reject) => {
    const url = `${serviceBase}userScore`;
    fetch(url, { method: 'GET', headers: { 'Content-Type': 'application/json' } }).then((response) => {
      if (response.ok) {
        response.text().then(resolve);
      } else {
        reject(`failed to commit changes: ${response.statusText}`);
      }
    });
  });
};

