let bank = 100
let bid = 0
let biddingOnTeam = ''

const players = [
  {
    name: "D'Marcus Williums",
    teamNumber: 0,
    emoji: '🏃‍♂️',
    skill: 10
  },
  {
    name: "Tyroil Smoochie-Wallace",
    teamNumber: 0,
    emoji: '🤾‍♂️',
    skill: 30
  },
  {
    name: "Jackmerius Tacktheratrix",
    teamNumber: 0,
    emoji: '🏇',
    skill: 88
  },
  {
    name: "Javaris Jamar Javarison-Lamar",
    teamNumber: 0,
    emoji: '🏌️‍♀️',
    skill: 15
  },
  {
    name: "D'Pez Poopsie",
    teamNumber: 0,
    emoji: '🏋️‍♂️',
    skill: 77
  },
  {
    name: "D'Jasper Probincrux III",
    teamNumber: 0,
    emoji: '🏌️‍♂️',
    skill: 21
  },
  {
    name: "Leoz Maxwell Jilliumz",
    teamNumber: 0,
    emoji: '🤾',
    skill: 5
  },
  {
    name: "Hingle McCringleberry",
    teamNumber: 0,
    emoji: '🏂',
    skill: 99
  },
  {
    name: "L'Carpetron Dookmarriot",
    teamNumber: 0,
    emoji: '🧘‍♀️',
    skill: 50
  },
  {
    name: "Xmus Jaxon Flaxon-Waxon",
    teamNumber: 0,
    emoji: '🚶‍♀️',
    skill: 1
  },
  {
    name: "Saggitariutt Jefferspin",
    teamNumber: 0,
    emoji: '🏋️‍♀️',
    skill: 61
  },
  {
    name: "Quatro Quatro",
    teamNumber: 0,
    emoji: '🤺',
    skill: 34
  },
  {
    name: "X-Wing @Aliciousness",
    teamNumber: 0,
    emoji: '🏄',
    skill: 71
  },
  {
    name: "Bisquiteen Trisket",
    teamNumber: 0,
    emoji: '🧜‍♂️',
    skill: 76
  },
  {
    name: "Scoish Velociraptor Maloish",
    teamNumber: 0,
    emoji: '🤸',
    skill: 47
  },
  {
    name: "Donkey Teeth",
    teamNumber: 0,
    emoji: '⛹️‍♀️',
    skill: 23
  },
  {
    name: "T.J. A.J. R.J. Backslashinfourth V",
    teamNumber: 0,
    emoji: '🕴️',
    skill: 58
  },
  {
    name: "Firstname Lastname",
    teamNumber: 0,
    emoji: '💃',
    skill: 99
  },
  {
    name: "Dan Smith",
    teamNumber: 0,
    emoji: '🧍‍♂️',
    skill: 3
  },
  {
    name: "Tiger",
    teamNumber: 0,
    emoji: '🐅',
    skill: 100
  },
]

function placeBet(amount) {
  if (amount > bank) {
    console.log('nope to rich for my 🩸')
    return
  }

  bank -= amount
  bid += amount

  // console.log({ bank, bid })
  drawMonies()
}

function drawMonies() {
  const bankElem = document.getElementById('bank')
  const bidElem = document.getElementById('bid')

  bankElem.innerText = `$${bank}`
  bidElem.innerText = `$${bid}`


  if (bank < 40) {
    bankElem.style.color = 'red'
  } else {
    bankElem.style.color = 'unset'
  }
}

function chooseTeam(teamName) {
  biddingOnTeam = teamName

  if (biddingOnTeam == 'Slithering Snakes 🐍') {
    document.body.style.backgroundImage = 'url(https://www.google.com/logos/fnbx/snake_arcade/cta_alt.png)'
  } else {
    document.body.style.backgroundImage = 'url(https://www.cnet.com/a/img/resize/2201947dbe2d89abb2660424529b548068f6b58b/hub/2020/06/15/5980cbe3-a450-4ef0-a8d1-633734e4d602/leonidssocial.jpg?auto=webp&fit=crop&height=900&width=1200)'
  }

}

function drawStars() {
  //                                   v where
  const teamMembers = players.filter(p => p.teamNumber == 0)
  let template = ''
  teamMembers.forEach(p => template += `<i title="${p.name}">${p.emoji}</i>`)
  document.getElementById('stars').innerHTML = template

}

function drawSnakes() {
  //                                   v where
  const teamMembers = players.filter(p => p.teamNumber == 1)
  let template = ''
  teamMembers.forEach(p => template += `<b title="${p.name}">${p.emoji}</b>`)
  document.getElementById('snakes').innerHTML = template
}

function assignTeams() {
  players.forEach(p => p.teamNumber = Math.random() < .5 ? 0 : 1)

  // players.forEach(p => {
  //   const n = Math.random()

  //   if (n < .5) {
  //     p.teamNumber = 0
  //   } else {
  //     p.teamNumber = 1
  //   }

  // })
}


function startGame() {
  assignTeams()
  drawStars()
  drawSnakes()
}

startGame()