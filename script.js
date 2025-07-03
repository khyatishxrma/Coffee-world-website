const coffeeFacts = [
  "Coffee beans are actually seeds!",
  "Brazil is the largest coffee producer in the world.",
  "Espresso has less caffeine than regular coffee per serving.",
  "The word 'coffee' comes from the Arabic word ‘qahwah’.",
  "Instant coffee was invented in 1901.",
  "Finland drinks the most coffee per person ☕",
  "A coffee plant can live up to 100 years.",
  "Coffee was originally chewed, not sipped.",
  "The first webcam was used to monitor a coffee pot at Cambridge University.",
  "Coffee can help improve your mood and cognitive function.",
  "Coffee was banned in Mecca in the 16th century because it was thought to stimulate radical thinking.",
  "The world’s most expensive coffee, Kopi Luwak, is made from beans digested by civet cats.",
    "Coffee grounds can be used as a natural exfoliant.",
    "The caffeine in coffee can help improve physical performance.",
    "Coffee was discovered by an Ethiopian goat herder named Kaldi.",
    "In Italy, coffee is served with a glass of water to cleanse the palate.",
    "Coffee is the second most traded commodity in the world after oil.",
    "The average coffee tree produces about 2,000 beans per year.",
    "Coffee was once banned in Turkey in the 17th century.",
    "The first coffee shop opened in Constantinople in 1475.",
    "Coffee can help reduce the risk of certain diseases, including Parkinson's and Alzheimer's.",
  "Caffeine kicks in after 10 minutes of drinking coffee!",
  "Beethoven was such a coffee lover, he used exactly 60 beans per cup.",
  "Decaf coffee is not caffeine-free. It still has a tiny bit!"
];

function generateFact() {
  const fact = coffeeFacts[Math.floor(Math.random() * coffeeFacts.length)];
  document.getElementById("random-fact").textContent = fact;
}


function showOriginFact(fact) {
  const display = document.getElementById("origin-fact");
  display.textContent = fact;
}

// Toggle dark mode
document.getElementById('toggle-dark').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
