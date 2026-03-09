function checkEmail(event){
    
    event.preventDefault();

    let email = document.querySelector('.email').value;

    if(!email.includes('@') || !email.includes('.')){
        
        console.log('Invalid email format');
        return false;
    }

    console.log('Valid email');
    return true;

}
