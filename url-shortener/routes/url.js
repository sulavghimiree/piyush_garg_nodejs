const express = require('express')
const router = express.Router()
const {shortIdGenerator, redirectWebsite, showURLClicks} = require('../controllers/users')

router.route('/').post(shortIdGenerator)
router.route('/:id').get(redirectWebsite)
router.route('/analytics/:id').get(showURLClicks)

module.exports = router
