// function login(username,password) { 
//     if (username === "admin" && password ==="P@ssword"){
//         return true;
//     } else {
//         return false
//     }
// }

// let username = prompt("Enter username");
// let password = prompt("Enter password")

// if (login(username,password)){
//     console.log("Successfully login");
// } else {
//     console.log("Wrong username & password");
// }

// login(username,password);

let username = prompt("Enter username");
let password = prompt("Enter password");

let login = (username,password) => {(username === "admin" && password ==="P@ssword") ? alert("Successfully login") : alert("Wrong username & password")}

login(username,password)