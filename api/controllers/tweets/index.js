const express = require(`express`);
const router = express.Router();

const tweets = require(`./../../services/tweets`);

router.use(express.json());

router.route(`/`)
    .get((req, res)=>{
        res.send(tweets.cargarTweet());
    })
    .post((req, res)=>{
        const tweet ={
            id: tweets.longitudTweet(),
            content: req.body.content,
            date: Date.now(),
            userId: req.body.userId
        };
        tweets.nuevoTweet(tweet);
        res.send(`El tweet ha sido creado`);
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