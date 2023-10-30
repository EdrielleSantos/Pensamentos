const express = require("express")

const ThoughtsController = require("../controllers/ThoughtsController")

const router = express.Router()

router.get("/thoughts/dashboard", ThoughtsController.dashboard);

router.get("/thoughts-create", ThoughtsController.registerThought) // Rota responsável por redirecionar para página de cadastrar o pensamento

router.post("/thoughts/create", ThoughtsController.createThought); // Rota para inserir pensamentos

router.get("/thoughts/edit/:id", ThoughtsController.showPageEditThought);
router.post("/thoughts/update/:id", ThoughtsController.updateThought);

router.post("/thoughts/remove/:id", ThoughtsController.deleteThought); // Rota para deletar um pensamento

module.exports = router;