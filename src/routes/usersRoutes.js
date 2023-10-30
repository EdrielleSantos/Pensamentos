const express = require("express")

const UsersController = require("../controllers/UsersController")

const router = express.Router()

router.post("/users", UsersController.createUser); // rota para postar/inserir usuários
router.get("/users", UsersController.findAllUsers); // rota para mostrar todos os usuários
router.get("/users/:id", UsersController.findUser); // rota para mostrar um único usuário, pelo id
router.put("/users/:id", UsersController.updateUser); // rota para atualizar usuário
router.delete("/users/:id", UsersController.deleteUser); // rota para deletar usuários

module.exports = router;