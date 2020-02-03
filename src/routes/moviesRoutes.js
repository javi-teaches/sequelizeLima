const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/moviesController');

/* Index de Películas */
router.get('/', controller.index);

router.get('/create', controller.create);
router.post('/create', controller.store);

/* Detalle de Película */
router.get('/:id', controller.show);

/* Borrar una Película */
router.delete('/:id', controller.destroy);

module.exports = router;
