function getLeaderboard() {
  document.getElementById("leaderboardDiv").innerText = "Loading...";

  const options = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
  }

  fetch('/getLeaderboard', options)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      document.getElementById("leaderboardDiv").innerText = "";
      let count = 0;
      let parentDiv = document.getElementById("leaderboardDiv");
      for (x of json)
      {
        let newEntry = document.createElement("p");
        
        newEntry.textContent = count+1 + '. ' + x.name + ' - ' + x.score;
        parentDiv.appendChild(newEntry);
        count+=1;
      }
    });
}

function getLeaderboardWithName() {
  name = document.getElementById("nameTextbox").value;
  document.getElementById("leaderboardDiv").innerText = "Loading...";

  if (name == "")
  {
    getLeaderboard();
    return;
  }

  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name
    }),
  }

  fetch('/getLeaderboard', options)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      document.getElementById("leaderboardDiv").innerText = "";
      let count = 0;
      let parentDiv = document.getElementById("leaderboardDiv");
      for (x of json)
      {
        let newEntry = document.createElement("p");
        
        newEntry.textContent = count+1 + '. ' + x.name + ' - ' + x.score;
        parentDiv.appendChild(newEntry);
        count+=1;
      }
    });
}