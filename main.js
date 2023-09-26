var score=0;
function decrease() {
    score=score-5;
    document.getElementById("scorelabel").textContent=score;
}
function increase() {
    score=score+5;
    document.getElementById("scorelabel").textContent=score;
}