function isEmpty(value){
    return value === '';
}

function validEmail(email){
    return email.includes('@') && email.includes('.');
}

function validPassword(password){
    return password.length >= 8;
}

function validateForm(event){

    event.preventDefault();

    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let password = document.querySelector('.password').value;

    if(isEmpty(name) || isEmpty(email) || isEmpty(password)){
        console.log('Fields cannot be empty');
        return false;
    }

    if(!validEmail(email)){
        console.log('Invalid email');
        return false;
    }

    if(!validPassword(password)){
        console.log('Password must be at least 8 characters');
        return false;
    }

    console.log('Validation successful');
    return true;

}
