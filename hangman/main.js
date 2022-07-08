let state = {
  theWord: "plane",
  mistakeCount: 0,
  correctGuesses: 0,
  incorrect: "",
  word: "plane",
};
window.focus();
createBoxes();
window.addEventListener("keyup", handleTyping);
function singleLetterBox(id) {
  let singleBox = document.createElement("div");
  singleBox.className = "single-box";
  singleBox.id = `f${id}`;
  return singleBox;
}
function createBoxes() {
  for (let i = 0; i < state.theWord.length; i++) {
    document.querySelector(".word-section").appendChild(singleLetterBox(i));
  }
}
function reportSection() {
  let repSec = document.querySelector(".report-section");
  let messageEl = document.createElement("h2");
  repSec.appendChild(messageEl);
  messageEl.textContent = `Wrong guesses: ${state.incorrect} (${state.mistakeCount})`;
  if (state.mistakeCount === 0) {
    repSec.style = "color: green;";
  } else if (state.mistakeCount > 0 && mistakeCount <= 5) {
    repSec.style = "color: orange;";
  } else {
    repSec.style = "color: red;";
  }
}
function finishedGameBtn() {
  state.correctGuesses = 0;
  state.incorrect = "";
  state.mistakeCount = 0;
  window.removeEventListener;
  let btnSec = document.querySelector(".btn");
  let btn = document.createElement("button");
  btnSec.appendChild(btn);
  if (state.correctGuesses === state.theWord.length) {
    btn.textContent = "Next word";
    btn.className = "good-btn button";
    btn.addEventListener("click", () => {
      document.querySelectorAll(".single-box").textContent = "q";
      console.log(state.correctGuesses);
    });
  } else {
    btn.textContent = "Restart";
    btn.className = "bad-btn button";
    btn.addEventListener("click", () => {
      document.querySelectorAll(".single-box").innerHTML = "qW";
      console.log(state.mistakeCount);
    });
  }

  btn.className;
}
function handleTyping(e) {
  if (!(state.mistakeCount === 6)) {
    if (state.theWord.includes(e.key)) {
      let i = state.theWord.indexOf(e.key);
      let element = document.querySelector(`#f${i}`);
      let firstPart = state.word;
      let secondPart = state.word;
      state.word =
        firstPart.slice(0, i) +
        "0" +
        secondPart.slice(i + 1, secondPart.length);
      element.textContent = e.key;
      state.correctGuesses++;
      element.className = "solved-single-box";
      console.log(state.word);
    } else {
      if (state.incorrect.includes(e.key)) {
        return;
      } else {
        state.incorrect = state.incorrect + e.key;
        state.mistakeCount++;
      }
    }
  } else {
    document.querySelector(".message").innerHTML = "<h1>Anlaki</h1>";
    finishedGameBtn();
    return;
  }
  if (state.correctGuesses === state.theWord.length) {
    finishedGameBtn();
    return;
  }
  document.querySelector(".report-section").textContent = "";
  reportSection();
  console.log(state.correctGuesses + " " + state.mistakeCount);
}
