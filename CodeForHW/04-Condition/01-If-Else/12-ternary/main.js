
let score = prompt("score");

let grade = (score >= 80) ? "A" : (score >= 70 && score < 80) ? "B" : (score >= 60 && score < 70) ? "c" : (score >= 50 && score < 60) ? "D" : "F" ;
alert(grade); 