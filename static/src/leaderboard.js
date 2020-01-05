function getLeaderboard() {
  console.log("WOW");
  let test = 4;
  let test2 = 8;
  const data = { test, test2 };
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  fetch('/testing', options).then(response => {
    response.json().then(response => console.log(response))
  });
}