let user = prompt('Enter username')
const guest = 'guest';

if(user === null || user === ''){
    user = guest;
    window.alert('Welcome ' + user);
}
else if (user === 'codecamp'){
    let password = prompt ('Enter password')
    if(password === '123456'){
      user = 'codecamp';
      window.alert('Welcome ' + user);
    }
    else{
      window.alert('Wrong password');
    }
}
else{
    window.alert('Welcome ' + user);
}