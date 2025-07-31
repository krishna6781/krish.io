document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    play(playerChoice);
  });
});

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("player-choice").textContent = `You chose: ${capitalize(playerChoice)}`;
  document.getElementById("computer-choice").textContent = `Computer chose: ${capitalize(computerChoice)}`;

  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a draw! 🤝";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    result = "You win! 🎉";
  } else {
    result = "You lose! 😢";
  }

  document.getElementById("outcome").textContent = `Result: ${result}`;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
