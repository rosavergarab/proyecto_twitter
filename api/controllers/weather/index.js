const express = require(`express`);
const router = express.Router();
const fetch = require(`node-fetch`);
const config = require(`./../../../config`);

//esto es para preguntar el clima por ciudad, sería algo como esto: http://localhost/api/weather/barranquilla
router.route(`/:city`)
    .get((req, res)=>{
        const ciudad = req.params.city;
        //con fetch va a una url especifica y saca de ella una informacion que vamos a necesitar en nuestra api. En este caso necesitamos sacar información del clima
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${config.llaveApiClima}`)
        //el resultado de lo que arroja la url la vamos a alojar en un json
        .then(res => res.json())
        .then(json => {
            res.send({temp:json.main.temp})
        });
    });

module.exports = router;