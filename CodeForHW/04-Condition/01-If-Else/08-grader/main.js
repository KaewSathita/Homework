let scoreStr = prompt("Enter your score: ");

let isScoreNumber = scoreStr && scoreStr.trim() !== '' && !isNaN(scoreStr);

if (!isScoreNumber){
    alert('Invalid score');
} else {
    let score = Number(scoreStr)
    if (score >= 80 ) {
        alert('A');
    } else if (score >= 70 && score < 80) {
        alert('B');
    } else if (score >= 60 && score < 70) {
        alert('C');
    } else if (score >= 50 && score < 60) {
        alert('D');
    } else {
        alert('F')
    }
}
