const express = require('express')
const router = express.Router()

const Users = require('../../models/accountSchema')

router.get('/', (req, res) => {
  return Users.find()
    .lean()
    .then(users => res.render('index', { users }))
    .catch(error => console.log(error))
})

module.exports = router
