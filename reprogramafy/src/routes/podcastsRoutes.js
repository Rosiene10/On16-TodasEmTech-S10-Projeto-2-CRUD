// AS ROTAS E METODOS DE FILMES

// chamar o controller de filmes
const controller = require('../controller/podcastsController')

const express = require('express') // chamando express

// funcao de rotas do express
const router = express.Router()

// router. metodo http (rota, funcao)
router.get('/pods', controller.getAllPods)
router.get('/pods/topic', controller.getPodByTopic)
router.post('/pods', controller.createPod)
router.patch('/pods/:id/stars', controller.updateStars)
router.delete("/pods/:id", controller.deletePods)

//exportando para ser usado no app.js
module.exports = router
