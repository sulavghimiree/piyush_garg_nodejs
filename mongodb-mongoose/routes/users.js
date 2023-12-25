const express = require('express')
const router = express.Router();
const {getAllUsers, createUser, getUserById, updateUserById, deleteUserById} = require('../controllers/users')

router.route('/').get(getAllUsers).post(createUser)
router.route('/:id').get(getUserById).patch(updateUserById).delete(deleteUserById)



module.exports = router