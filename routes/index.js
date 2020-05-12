const express = require('express');
const router = express.Router();


const homeController = require('../controller/home_controller');

router.get('/', homeController.home);
router.post('/post', homeController.post);
router.post('/delete', homeController.delete);

module.exports = router;