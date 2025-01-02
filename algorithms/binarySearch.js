const data = [
  [
    {
      "login": "stypeano",
      "leaguePoints": 4
    },
    {
      "login": "rstrazir",
      "leaguePoints": 45
    },
    {
      "login": "cathead",
      "leaguePoints": 143
    },
    {
      "login": "cavernous",
      "leaguePoints": 324
    }
  ],
  [
    {
      "login": "ConspiracyLil",
      "leaguePoints": 356
    },
    {
      "login": "CzarStories",
      "leaguePoints": 568
    },
    {
      "login": "GottaSaiyan",
      "leaguePoints": 598
    },
    {
      "login": "Mountaintrid",
      "leaguePoints": 785
    }
  ],
  [
    {
      "login": "Rectionom",
      "leaguePoints": 930
    },
    {
      "login": "JoshChase",
      "leaguePoints": 931
    },
    {
      "login": "DreamLess",
      "leaguePoints": 956
    },
    {
      "login": "BlondiePlanet",
      "leaguePoints": 1045
    }
  ],
  [
    {
      "login": "Breakingbing",
      "leaguePoints": 1056
    },
    {
      "login": "Goldenelox",
      "leaguePoints": 1130
    },
    {
      "login": "SaiyanBroadway",
      "leaguePoints": 1432
    },
    {
      "login": "BoostScooby",
      "leaguePoints": 1476
    }
  ]
]

const binarySearch = (data, score) => {
  const result = {
    league: 0,
    placement: 0,
  }
  let left = 0
  let right = data.length - 1
  
  while (left <= right) {
    const center = Math.floor((right + left) / 2)
  
  const firstScore = data[center][0].leaguePoints
  const lastScore = data[center][data[center].length - 1].leaguePoints

    if (score >= firstScore && score <= lastScore) {
      result.league = center + 1
      break
    }
    
    if (score > firstScore) {
      left = center + 1
    } else {
      right = center - 1
    }
  }
  
  const players = data[result.league - 1]
  let leftPlayer = 0
  let rightPlayer = players.length - 1
  
  while (leftPlayer <= rightPlayer) {
    const center = Math.floor((leftPlayer + rightPlayer) / 2)
    
    if (players[center].leaguePoints === score) {
      result.placement = center + 1
      break
    }
    
    if (players[center].leaguePoints > score) {
      rightPlayer = center - 1
    } else {
      leftPlayer = center + 1
    }
  }
  
  return result
}

binarySearch(data, 931)