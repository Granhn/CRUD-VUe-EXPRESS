const { Router } = require('express');
const router = Router()
const { getUsers, createUser, getUserById, deleteUserById, updateUser} = require('../controllers/index.controller');
const { validateCreate } = require('../validators/index');

router.get('/users', getUsers);
router.post('/users', validateCreate,createUser);
router.get('/users/:id', getUserById);
router.delete('/users/:id', deleteUserById);
router.put('/users/:id',validateCreate,updateUser);
module.exports = router;