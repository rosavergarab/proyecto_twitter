/* Composición de un tweet
    [
        {
            id: auto,
            content: string,
            date: string,
            user: number
        }
    ]
*/

const arreglo_tweets =[];

const nuevoTweet = (tweet) =>{
    arreglo_tweets.push(tweet);
};

const cargarTweet = () => {
    return arreglo_tweets;
};

const longitudTweet = () => {
    return arreglo_tweets.length;
};

module.exports = {nuevoTweet, cargarTweet, longitudTweet};