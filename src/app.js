
import "./style.css";



window.onload = function () {

  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const suits = ["♠", "♥", "♦", "♣"];

  const generateCard = () => {
    const randomValue = values[Math.floor(Math.random() * values.length)];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];


    const topSuit = document.querySelector(".top-suit");
    const value = document.querySelector(".value");
    const bottomSuit = document.querySelector(".bottom-suit");


    topSuit.textContent = randomSuit;
    value.textContent = randomValue;
    bottomSuit.textContent = randomSuit;


    if (randomSuit === "♥" || randomSuit === "♦") {
      topSuit.classList.add("red");
      value.classList.add("red");
      bottomSuit.classList.add("red");
    }
    else {
      topSuit.classList.remove("red");
      value.classList.remove("red");
      bottomSuit.classList.remove("red");
    }
  }; 

    generateCard();
    const button = document.getElementById("refresh");
    button.addEventListener("click", generateCard);

  


}

