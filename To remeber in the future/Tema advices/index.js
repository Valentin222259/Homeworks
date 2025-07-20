const button = document.getElementById("button");
const jokeAdvice = document.getElementById("speech");
const adviceTitle = document.querySelector(".advice"); // pentru Advice #ID


function renderAdvice(advice, id) {
  jokeAdvice.textContent = advice;
  adviceTitle.textContent = `ADVICE #${id}`;
}

function renderAdviceVoice(advice){
    VoiceRSS.speech({
            key: "5ff4b1b6ab8143f488a977bc3a2f2a9c",
            src: advice,
            hl: 'en-us',
            v: 'Linda',
            r: 0, 
            c: 'mp3',
            f: '44khz_16bit_stereo',
            ssml: false
        });
}

async function getAdvice() {
  const url = `https://api.adviceslip.com/advice?t=${new Date().getTime()}`; // păcălim cache-ul
  try {
    const response = await fetch(url);
    const data = await response.json();
    const advice = data.slip.advice;
    const id = data.slip.id;
    renderAdvice(advice, id);
    renderAdviceVoice(advice);
  } catch (e) {
    console.log("Eroare la fetch:", e);
  }
}

button.addEventListener("click", getAdvice);
