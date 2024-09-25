const express = require('express');
const router = express.Router();
const { registerUser, loginUser, loginAdmin } = require('../Controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/admin', loginAdmin);

module.exports = router;
