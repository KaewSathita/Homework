let message = "";

for (i=1; i<=4; i++) {
    for(j=1; j<=i; j++){
        if(j == i){
            message += " * \n";
        }   else {
            message += " *";
        }
    }

}
console.log(message)


