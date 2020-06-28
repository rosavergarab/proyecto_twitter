//MODULO DE INGRESO

const validaIngreso = () => {
    const token = localStorage.getItem('token');
    if(token === null){
        document.getElementById('card-registro').style.display = 'block';
        document.getElementById('card-ingreso').style.display = 'block';
    }else{
        document.getElementById('card-tweets').style.display = 'block';
        document.getElementById('salida').style.display = 'block';
    }
};


const ingreso = () => {
    const url = `./api/users/login`;
    const usuario = {
        username: document.getElementById(`usuario_ingreso`).value,
        password: document.getElementById(`contraseña_ingreso`).value,
    };
    document.getElementById(`contraseña_ingreso`).value=``;

    if(usuario.username !==``){
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers:{
            'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response =>{
            if(!!response.token){
                document.getElementById('usuario_ingreso').value = '';
                document.getElementById('salida').style.display = 'block';
                document.getElementById('card-tweets').style.display = 'block';
                document.getElementById('card-ingreso').style.display = 'none';
                document.getElementById('card-registro').style.display = 'none';
                localStorage.setItem('token',response.token);
                alert('Bienvenido!');
            }else{
                alert('Datos inválidos');
            }    
        } )
        .catch(error =>{ alert(`Datos Invalidos`)});
    }
    else{
        alert(`No puede enviar datos en blanco`)
    };
};

const salida = () => {
    localStorage.removeItem('token');
    document.getElementById('salida').style.display = 'none';
    document.getElementById('card-tweets').style.display = 'none';
    document.getElementById('card-registro').style.display = 'block';
    document.getElementById('card-ingreso').style.display = 'block';
};

//MODULO DE USUARIOS

const registro = () => {
    document.getElementById('card-registro').style.visibility = `visible`;
};

const validaNuevoUsuario = (name, email, username, password, pwdconfirm) => {
    if(name.length<2){
        alert("El nombre debe ser mínimo de 2 caracteres");
        return false;
    }
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        alert("No es una dirección de correo válida");
        return false;
    }
    if(username.length<2){
        alert("El nombre de usuario debe ser mínimo de 2 caracteres");
        return false;
    }
    if(password != pwdconfirm){
        alert("Las contraseñas no coinciden");
        return false;
    }
    if(!/^[A-Za-z]\w{7,14}$/.test(password)){
        alert("La contraseña no es válida");
        return false;
    }

    return true;
};

const nuevoUsuario = () => {
    if( document.getElementById(`nombre`).value, 
        document.getElementById(`email`).value,
        document.getElementById(`usuario`).value,
        document.getElementById(`contraseña`).value,
        document.getElementById(`confirmacion`).value)
    {

        const url = `./api/users`;
        const usuario = {
            name:       document.getElementById(`nombre`).value, 
            email:      document.getElementById(`email`).value,
            username:   document.getElementById(`usuario`).value,
            password:   document.getElementById(`contraseña`).value
        };
        document.getElementById(`contraseña`).value = ``;
        document.getElementById(`confirmacion`).value = ``;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers:{
            'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response =>{
            document.getElementById(`nombre`).value = ``;
            document.getElementById(`email`).value = ``;
            document.getElementById(`usuario`).value = ``;
            alert(`Usuario creado. Por favor vuelva al panel de ingreso y coloque el usuario y contraseña`);
            document.getElementById('card-registro').style.visibility = `hidden`;
        })
        .catch(error =>{ alert(`ocurrió un error al crear el usuario`)});
    }
};


//MODULO DEL TWEET

const nuevoTweet = () =>{
    const token = localStorage.getItem('token');
    if(token){
        const tweet = {
            content: document.getElementById(`contenido`).value,
        };
    };
    
    if(tweet.content !==``){
        const url = `/api/tweets`
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(tweet),
            headers:{
            'Content-Type': 'application/json',
            'x-access-token': token
            }
        }).then(res => res.json())
        .then(response =>{
            document.getElementById(`contenido`).value= obtenerTweet();
            document.getElementById(`contenido`).value=``;
            //alert(`El tweet ha sido enviado`)
        } )
        .catch(error => console.error('Error:', error));
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
           return `<li class="list-group-item"><a href="/tweets.html?id=${tweet._id}">${tweet.content}</a><br /><small>${tweet.createAt}</small><br /><small>${tweet.user.name}</small></li>`
        }).join(" ");

        document.getElementById(`tweets`).innerHTML = `<ul class="list-group">
                                                        <li class="list-group-item active">
                                                        Tweets
                                                        </li>
                                                        ${html}
                                                       </ul>`;
    });
};

//MODULO DEL CLIMA
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