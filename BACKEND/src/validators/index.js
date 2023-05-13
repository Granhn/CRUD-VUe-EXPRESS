const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper')

const validateCreate = [check('name').exists().not().isEmpty(),
check('email').exists().isEmail().not().isEmpty(),
    (req,res,next) =>{
        validateResult(req, res, next)
    }
] 
module.exports = {  validateCreate  }
