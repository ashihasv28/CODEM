function checkPassword(event){

    event.preventDefault();

    let password = document.querySelector('.password').value;

    if(password.length >= 8){
        
        console.log('Valid password');
        return true;
    }

    console.log('Password must be at least 8 characters');
    return false;

}
