const nuevoTweet = () =>{
    const url = `/api/tweets`
    const tweet = {
        content: document.getElementById(`contenido`).value,
        userId: 1
    };
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(tweet),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response =>{
          document.getElementById(`tweets`).innerHTML = obtenerTweet();
          document.getElementById(`contenido`).value=``;
          //alert(`El tweet ha sido enviado`)
      } );
};

const obtenerTweet = () => {
    const url = `/api/tweets`

    fetch(url)
    .then(res => res.json())
    .then(response => {
        const html = response.map(tweet =>{
           return `<p> - ${tweet.content} <br />${tweet.date}</p>`
        }).join(" ");

        document.getElementById(`tweets`).innerHTML = html;
    });
};

const consultarClima = () =>{
    const ciudad = document.getElementById(`ciudad`).value;
    document.getElementById(`clima`).innerHTML = ``;
    if(ciudad !== ``){    
        const url = `/api/weather/${ciudad}`;
        fetch (url)
        .then(res => res.json())
        .then(response => {
            const html = `El clima de ${ciudad} es ${response.temp} °C`
            document.getElementById(`clima`).innerHTML = html;
            document.getElementById(`ciudad`).value = ``;
        })
    }
    else{
        const html = `Por favor ingrese el nombre de una ciudad`;
        document.getElementById(`clima`).innerHTML = html;
    };
};