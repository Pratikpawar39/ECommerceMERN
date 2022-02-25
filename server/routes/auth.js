const {Router} = Require('express');
const authController = require('../Controllers/authControllers');
const router = Router();
// const auth = require('')

router.post('/register', authController.signup);
router.post('/login', authController.login);
router.get('/user', auth, authController.get_user);

module.exports = router;