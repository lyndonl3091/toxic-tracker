import { Router } from 'express'
const router = Router()

import Summoner from '../db/Summoner'

router.get('/', (req, res) => {
  Summoner.find({}, (err, summoners) => {
    return res.status(err? 400:200).send(err || summoners)
  })
})
