const cors = require('cors')
const express = require('express')
const app = express();
const axios = require('axios')

app.use(cors())

app.get('/', async (req, res) => {

  const { data } = await axios('https://www.fruityvice.com/api/fruit/all')
  //console.log(data)
  
  return res.json(data)
})

app.listen('3333')