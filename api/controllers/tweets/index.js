const express = require(`express`);
const router = express.Router();

const moduloTweets = require(`./../../services/tweets`);

router.use(express.json());

router.route(`/`)
    .get((req, res)=>{
        res.status(200).send(moduloTweets.cargarTweet());
    })
    .post((req, res)=>{
        const tweet ={
            id: moduloTweets.longitudTweet(),
            content: req.body.content,
            date: Date().toString(),
            userId: req.body.userId
        };
        moduloTweets.nuevoTweet(tweet);
        res.status(200).send(`El tweet ha sido creado`);
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