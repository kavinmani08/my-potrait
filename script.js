
const cardScene = document.getElementById("cardScene");
const card = document.getElementById("card");
const flipButton = document.getElementById("flipButton");
const buttonLabel = flipButton.querySelector(".button-label");
const hint = document.getElementById("hint");

function flipCard() {
  const isFlipped = card.classList.toggle("is-flipped");

  flipButton.setAttribute("aria-pressed", String(isFlipped));

  buttonLabel.textContent = isFlipped
    ? "Show Front"
    : "Flip Digital Card";

  hint.textContent = isFlipped
    ? "Tap the card to return to the front."
    : "Tap anywhere on the card to reveal the other side.";
}

// Tap or click anywhere on the card.
// Clicking LinkedIn, GitHub or Email opens the link normally.
cardScene.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    return;
  }

  flipCard();
});

// Dedicated flip button
flipButton.addEventListener("click", flipCard);
