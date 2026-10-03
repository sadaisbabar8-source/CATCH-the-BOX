let score = 0;

const box = document.getElementById("box");
const scoreText = document.getElementById("score");

box.addEventListener("click", function() {

    score = score + 1;
    scoreText.textContent = score;

    let x = Math.random() * 500;
    let y = Math.random() * 330;

    box.style.left = x + "px";
    box.style.top = y + "px";

});