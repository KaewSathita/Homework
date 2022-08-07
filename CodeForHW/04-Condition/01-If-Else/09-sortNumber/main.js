let arr = Array();
for (i = 0; i<=2; i++){
    let n = prompt("Enter " + (i+1));
    arr.push(n);
}

arr.sort(function(a,b){return b - a});

alert(arr.join(','))