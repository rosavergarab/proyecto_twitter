const express = require(`express`);
const router = express.Router();

router.route(`/`)
    .get((req, res)=>{
        res.send(`Lista de tweets`);
    })
    .post((req, res)=>{
        res.send(`Nuevo tweet`);
    });

router.route(`/:id`)
    .get((req, res)=>{
        res.send(`Página del Tweed ${req.params.id}`);
    })
    .delete((req, res)=>{
        res.send(`Eliminar Tweed ${req.params.id}`);
    })
    .put((req, res)=>{
        res.send(`Actualizar Tweed ${req.params.id}`)});


module.exports = router;