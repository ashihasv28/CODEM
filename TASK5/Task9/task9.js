function validateForm(event){

    event.preventDefault();

    let name=document.querySelector('.name').value;
    let email=document.querySelector('.email').value;
    let password=document.querySelector('.password').value;

    if(name==='' || email==='' || password===''){
        console.log('All fields are Required');
        return false;
    }

    if(!email.includes('@')||!email.includes('.')){
        console.log('Invalid Email ID');
        return false;
    }

    if(password.length<8){
        console.log('Invalid Password');
        return false;
    }

    console.log('Form Validation Successfull');
    return true;

};
