const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const atlantaCast = {
  'donald glover': [
    {
      title: 'Solo: A Star Wars Story',
      posterImg:
        'https://pics.filmaffinity.com/Solo_A_Star_Wars_Story-583283970-large.jpg',
      year: 2018,
    },

    {
      title: 'The Martian',
      posterImg: 'https://pics.filmaffinity.com/Marte_The_Martian-972637166-large.jpg',
      year: 2015,
    },
    {
      title: 'Magic Mike XXL',
      posterImg: 'https://pics.filmaffinity.com/Magic_Mike_XXL-686153440-large.jpg',
      year: 2015,
    },
  ],
  'brian tyree henry': [
    {
      title: 'Eternals',
      posterImg: 'https://pics.filmaffinity.com/Eternals-412741873-large.jpg',
      year: 2021,
    },
    {
      title: 'Widows',
      posterImg: 'https://pics.filmaffinity.com/Viudas-394197623-large.jpg',
      year: 2018,
    },
    {
      title: 'White Boy Rick',
      posterImg: 'https://pics.filmaffinity.com/White_Boy_Rick-847641878-large.jpg',
      year: 2018,
    },
  ],
  'lakeith stanfield': [
    {
      title: 'The Harder They Fall',
      posterImg: 'https://pics.filmaffinity.com/The_Harder_They_Fall-526140636-large.jpg',
      year: 2021,
    },
    {
      title: 'Knives Out',
      posterImg: 'https://pics.filmaffinity.com/Knives_Out-326770674-large.jpg',
      year: 2019,
    },
    {
      title: 'Uncut Gems',
      posterImg: 'https://pics.filmaffinity.com/Uncut_Gems-450616345-large.jpg',
      year: 2019,
    },
  ],
  'zazie beetz': [
    {
      title: 'Nine Days',
      posterImg: 'https://pics.filmaffinity.com/Nine_Days-718269667-large.jpg',
      year: 2020,
    },
    {
      title: 'Joker',
      posterImg: 'https://pics.filmaffinity.com/Joker-790658206-large.jpg',
      year: 2019,
    },
    {
      title: 'Deadpool 2',
      posterImg: 'https://pics.filmaffinity.com/Deadpool_2-766351908-large.jpg',
      year: 2018,
    },
  ],
  unknown: {
    title: "Actor isn't part of the cast ",
    posterImg:
      'https://i.pinimg.com/originals/c4/96/91/c496911918bb05469ff404f66fb63990.jpg',
    year: 'Check your spelling',
  },
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
  const actorName = req.params.name.toLowerCase()

  if (atlantaCast[actorName]) {
    res.json(atlantaCast[actorName])
  } else {
    res.json(atlantaCast['unknown'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}`)
})
