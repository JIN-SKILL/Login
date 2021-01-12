const express = require('express')
const router = express.Router()

const Users = require('../../models/accountSchema')

router.post('/', (req, res) => {
  const mail = req.body.mail
  const password = req.body.password
  return Users.find({ email: `${mail}`, password: `${password}` })
    .lean()
    .then(userArr => {
      const user = userArr[0]
      if (user === undefined) {
        const error = '帳號密碼輸入錯誤!'
        res.render('index', { error })
      }else {
        res.render('welcome', { user })
      }
    })
    .catch(error => console.log(error))
})

module.exports = router
