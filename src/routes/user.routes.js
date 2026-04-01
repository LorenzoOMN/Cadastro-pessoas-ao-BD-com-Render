const express = require('express');
const { listUsers, createUser, deleteUser} = require('../database/users');

const router = express.Router();

// curl -X GET http://localhost:3003/users
router.get("/", async function (req, res) {
    const users = await listUsers();
    res.status(200).json(users);
});

// curl -X  POST http://localhost:3003/users -H "Content-Type: aplicattion/json" -d "{\"name\":\"Tiago\", \"email\":\"tiago@teste.com\"}"
router.post("/", async function (req, res) {
    const {name, email} = req.body;
    const user = await createUser(name, email);
    res.status(201).json(user);
});

// curl -X DELETE http://localhost:3003/users/{id_usuario}
router.delete("/:id", async function (req, res) {
    const id = req.params.id;
    const user = await deleteUser(id);
    if(user.error) {
        res.status(404).json(user);
    } else {
        res.status(200).json(user);
    }
});

module.exports = router;