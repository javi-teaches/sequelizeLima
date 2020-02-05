const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/genresController');

/* Index de Películas */
router.get('/', controller.index);

module.exports = router;