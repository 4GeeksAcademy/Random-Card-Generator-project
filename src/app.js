import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

 // Possible card values and suits
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

// Randomly select a value and a suit
const randomValue = values[Math.floor(Math.random() * values.length)];
const randomSuit = suits[Math.floor(Math.random() * suits.length)];

// Get card elements
// const card = document.querySelector(".card");
const topSuit = document.querySelector(".top-suit");
const value = document.querySelector(".value");
const bottomSuit = document.querySelector(".bottom-suit");

// Update card content
topSuit.textContent = randomSuit;
value.textContent = randomValue;
bottomSuit.textContent = randomSuit;

// Add red color for hearts and diamonds
if (randomSuit === "♥" || randomSuit === "♦") {
  topSuit.classList.add("red");
  value.classList.add("red");
  bottomSuit.classList.add("red");
}

  
};
