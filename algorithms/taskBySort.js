const data = [
  {
    "login": "DreamLess",
    "leaguePoints": 956
  },
  {
    "login": "cavernous",
    "leaguePoints": 1056
  },
  {
    "login": "SaiyanBroadway",
    "leaguePoints": 1432
  },
  {
    "login": "BlondiePlanet",
    "leaguePoints": 1045
  },
  {
    "login": "Mountaintrid",
    "leaguePoints": 1130
  },
  {
    "login": "cathead",
    "leaguePoints": 930
  },
  {
    "login": "rstrazir",
    "leaguePoints": 356
  },
  {
    "login": "stypeano",
    "leaguePoints": 4
  },
  {
    "login": "CzarStories",
    "leaguePoints": 568
  },
  {
    "login": "ConspiracyLil",
    "leaguePoints": 18
  },
  {
    "login": "GottaSaiyan",
    "leaguePoints": 931
  },
  {
    "login": "Goldenelox",
    "leaguePoints": 932
  },
  {
    "login": "Breakingbing",
    "leaguePoints": 64
  },
  {
    "login": "Rectionom",
    "leaguePoints": 42
  },
  {
    "login": "BoostScooby",
    "leaguePoints": 1476
  },
  {
    "login": "JoshChase",
    "leaguePoints": 931
  }
]

// modified bubble sort
const getTheBestPlayers = (arr, count = arr.length - 1) => {
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].leaguePoints > arr[j + 1].leaguePoints) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  
  return arr.slice(-count)
}

console.log(getTheBestPlayers(data, 3))
