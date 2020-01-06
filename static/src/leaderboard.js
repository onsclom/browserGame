function getLeaderboard() {
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({test: "w"})
  }

  fetch('/testing', options)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      let count = 0;
      let parentDiv = document.getElementById("leaderboardDiv");
      for (x of json)
      {
        let newEntry = document.createElement("p");
        
        newEntry.textContent = count+1 + '. ' + x.name + ' ' + x.score;
        parentDiv.appendChild(newEntry);
        count+=1;
      }
    });
    
}