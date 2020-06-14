const express = require(`express`);
const router = express.Router();

router.route(`/`)
    .get((req, res)=>{
        res.send(`Lista de usuarios`);
    })
    .post((req, res)=>{
        res.send(`Nuevo usuario`);
    });

router.route(`/:id`)
    .get((req, res)=>{
        res.send(`Página del usuario ${req.params.id}`);
    })
    .delete((req, res)=>{
        res.send(`Eliminar usuario ${req.params.id}`);
    })
    .put((req, res)=>{
        res.send(`Actualizar usuario ${req.params.id}`)});


module.exports = router;