const nuevoTweet = () =>{
    
    const tweet = {
        content: document.getElementById(`contenido`).value,
        userId: 1
    };
    if(tweet.content !==``){
        const url = `/api/tweets`
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(tweet),
            headers:{
            'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response =>{
            document.getElementById(`contenido`).value= obtenerTweet();
            document.getElementById(`contenido`).value=``;
            //alert(`El tweet ha sido enviado`)
        } );
    }
    else{
        alert(`No puede enviar un tweet en blanco`)
    };
};

const obtenerTweet = () => {
    const url = `/api/tweets`

    fetch(url)
    .then(res => res.json())
    .then(response => {
        const html = response.map(tweet =>{
           return `<li class="list-group-item"><a href="/tweets.html?id=${tweet._id}">${tweet.content}</a><br /><small>${tweet.date}</small></li>`
        }).join(" ");

        document.getElementById(`tweets`).innerHTML = `<ul class="list-group">
                                                        <li class="list-group-item active">
                                                        Tweets
                                                        </li>
                                                        ${html}
                                                       </ul>`;
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