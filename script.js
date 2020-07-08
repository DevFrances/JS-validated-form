let password = document.getElementById('password-input');
let confirmPassword = document.getElementById('confirm-password');
let submit = document.getElementById('button-submit');
let form =document.getElementById('form')
//add eventlistener to the button
confirmPassword.addEventListener('blur', ($event)=>{
    $event.preventDefault();
    if(password.value === confirmPassword.value){
        password.style.border = 'thin solid green'
        confirmPassword.style.border = 'thin solid green'
    }else{
        password.style.border = 'thin solid red'
        confirmPassword.style.border = 'thin solid red'
    }
    
})
submit.addEventListener('click', ($event)=>{
    $event.preventDefault();
    if(password.value === confirmPassword.value){
form.reset();
alert("Your registration has been submitted successfully")
    }else{
        alert("Your email or password is incorrect!")
        
    }
    })

