const button = document.getElementById("button");
const jokeEl = document.getElementById("speech");

function renderJoke(joke){
    jokeEl.textContent = joke;
}

function renderJokeVoice(joke){
    VoiceRSS.speech({
            key: "5ff4b1b6ab8143f488a977bc3a2f2a9c",
            src: joke,
            hl: 'en-us',
            v: 'Linda',
            r: 0, 
            c: 'mp3',
            f: '44khz_16bit_stereo',
            ssml: false
        });
}

async function getJoke(){
    const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
    try{
         const response = await fetch(url);
         const data = await response.json();//transformam json in obiect javascript
         // single -> .joke
         // multipart -> .setup + .delivery
         const joke = data.joke || `${data.setup} ... ${data.delivery}`;
         renderJoke(joke);
         renderJokeVoice(joke);
    }catch(e){
        console.log(e);
    }
}

button.addEventListener("click", getJoke);