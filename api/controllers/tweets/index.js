const express = require(`express`);
const router = express.Router();
const Tweet = require(`./../../models/tweets`);

const moduloTweets = require(`./../../services/tweets`);
const dateUtilities = require(`./../../utilities/date`);


router.use(express.json());

router.route(`/`)
    .get((req, res)=>{
        //res.status(200).send(moduloTweets.cargarTweet());
        Tweet.find({})
        .then(tweets => {
            res.status(200).send(tweets);
        })
    })
    .post((req, res)=>{
        const tweet ={
            id: moduloTweets.longitudTweet(),
            content: req.body.content,
            date: dateUtilities.obtenerFecha(),
            userId: req.body.userId
        };
        moduloTweets.nuevoTweet(tweet);
        res.status(200).send({message:`El tweet ha sido creado`});
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