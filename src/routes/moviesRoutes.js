const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/moviesController');

/* Index de Películas */
router.get('/', controller.index);

/* Buscador de Películas */
router.get('/search', controller.search);

/* Crear películas */
router.get('/create', controller.create);
router.post('/create', controller.store);

/* Editar película */ 
router.get('/:id/edit', controller.edit);
router.patch('/:id/edit', controller.update);

/* Detalle de Película */
router.get('/:id', controller.show);

/* Borrar una Película */
router.delete('/:id', controller.destroy);

module.exports = router;
