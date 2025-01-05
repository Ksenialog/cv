const data = [
  [
    {
      "login": "stypeano",
      "leaguePoints": 4,
      "guild": "seabass"
    },
    {
      "login": "rstrazir",
      "leaguePoints": 356,
      "guild": "seabass"
    },
    {
      "login": "cathead",
      "leaguePoints": 930,
      "guild": "seabass"
    },
    {
      "login": "cavernous",
      "leaguePoints": 1056,
      "guild": "seabass"
    }
  ],
  [
    {
      "login": "ConspiracyLil",
      "leaguePoints": 18,
      "guild": "goldfish"
    },
    {
      "login": "CzarStories",
      "leaguePoints": 568,
      "guild": "goldfish"
    },
    {
      "login": "GottaSaiyan",
      "leaguePoints": 931,
      "guild": "goldfish"
    },
    {
      "login": "Mountaintrid",
      "leaguePoints": 1130,
      "guild": "goldfish"
    }
  ],
  [
    {
      "login": "Rectionom",
      "leaguePoints": 42,
      "guild": "catfish"
    },
    {
      "login": "JoshChase",
      "leaguePoints": 931,
      "guild": "catfish"
    },
    {
      "login": "DreamLess",
      "leaguePoints": 956,
      "guild": "catfish"
    },
    {
      "login": "BlondiePlanet",
      "leaguePoints": 1045,
      "guild": "catfish"
    }
  ],
  [
    {
      "login": "Breakingbing",
      "leaguePoints": 64,
      "guild": "bream"
    },
    {
      "login": "Goldenelox",
      "leaguePoints": 932,
      "guild": "bream"
    },
    {
      "login": "SaiyanBroadway",
      "leaguePoints": 1432,
      "guild": "bream"
    },
    {
      "login": "BoostScooby",
      "leaguePoints": 1476,
      "guild": "bream"
    }
  ]
]

const searchSubtask = (leaderboard, leaguePoints, topBorder, leftBorder, bottomBorder, rightBorder) => {
  if (leftBorder > rightBorder || topBorder > bottomBorder) return null
  
  if (leftBorder === rightBorder && topBorder === bottomBorder) {
    const candidate = leaderboard[topBorder][leftBorder]
    
    if (candidate.leaguePoints === leaguePoints) {
      return {
        guild: candidate.guild,
        placement: leaderboard[topBorder].length - leftBorder
      }
    }
    
    return null
  }
  
  const middleY = Math.floor((topBorder + bottomBorder) / 2)
  const middleX = Math.floor((leftBorder + rightBorder) / 2)
  const { leaguePoints: candidateLeaguePoints } = leaderboard[middleY][middleX]
  
  // части, где количество очков больше, чем по середине
  if (candidateLeaguePoints < leaguePoints) {
    return searchSubtask(leaderboard, leaguePoints, topBorder, middleX + 1, middleY, rightBorder) // верхняя правая
      || searchSubtask(leaderboard, leaguePoints, middleY + 1, leftBorder, bottomBorder, middleX) // нижняя левая
      || searchSubtask(leaderboard, leaguePoints, middleY + 1, middleX + 1, bottomBorder, rightBorder) // нижняя правая
  } else {
    return searchSubtask(leaderboard, leaguePoints, topBorder, middleX + 1, middleY, rightBorder) // верхняя правая
      || searchSubtask(leaderboard, leaguePoints, middleY + 1, leftBorder, bottomBorder, middleX) // нижняя левая
      || searchSubtask(leaderboard, leaguePoints, topBorder, leftBorder, middleY, middleX) // верхняя левая
  }
}

const searchScore = (leaderboard, leaguePoints) => {
  if (!(leaderboard.length && leaderboard.length)) return null
  
  const bottomBorder = leaderboard.length - 1 // 3
  const rightBorder = leaderboard[0].length - 1 // 3
  
  return searchSubtask(leaderboard, leaguePoints, 0, 0, bottomBorder, rightBorder)
}

console.log(searchScore(data, 64))