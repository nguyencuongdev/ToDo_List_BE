const express = require('express');
const router = express.Router();


router.use('/login', require('./login.router'));
router.use('/signup', require('./signup.router'));
router.use('/mydate', require('./mydate.router'));
module.exports = router;