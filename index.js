document.addEventListener('DOMContentLoaded', function() {
    const eye_img = document.querySelector('.icon_eye');
    const eye_img_2 = document.querySelector('.icon_eye2');
    const passwordInput = document.getElementById('password')
    const verifyPasswordInput = document.getElementById('verify-password')
    const hideEye = 'icons/eye_hide.png';
    const showEye = 'icons/eye_show.png';
    let hideShowValue = 0;
    let hideShowValue2 = 0;

    eye_img.addEventListener('click', function hidePassword(){
        if (hideShowValue === 0){
            eye_img.src = hideEye;
            hideShowValue = 1;
            passwordInput.type = 'text';
        }
        else{
            eye_img.src = showEye;
            hideShowValue = 0;
            passwordInput.type = 'password';
        }
    });


    eye_img_2.addEventListener('click', function hidePassword(){
        if (hideShowValue2 === 0){
            eye_img_2.src = hideEye;
            hideShowValue2 = 1;
            verifyPasswordInput.type = 'text';
        }
        else{
            eye_img_2.src = showEye;
            hideShowValue2 = 0;
            verifyPasswordInput.type = 'password';
        }
    });


    const createAccountText = document.querySelector('.register-container p');
    const createAccount = document.querySelector('.register-container span');
    const verifyPasswordContainer = document.querySelector('.input-verify-password');
    const loginBtn = document.querySelector('.btn-container button');
    const loginTittle =document.querySelector('.login-title');

    createAccount.addEventListener('click', function(){
        if (createAccount.innerHTML === 'Create one!'){
            loginTittle.innerHTML = 'Create Account';
            verifyPasswordContainer.style.display = 'block';
            loginBtn.innerHTML = 'Create Account';
            createAccountText.innerHTML = 'Already have an account?';
            createAccount.innerHTML = 'Sign In';
        }else{
            loginTittle.innerHTML = 'Sign In';
            verifyPasswordContainer.style.display = 'none';
            loginBtn.innerHTML = 'Sign In';
            createAccountText.innerHTML = 'Don\'t have an account yet?';
            createAccount.innerHTML = 'Create one!';
        }
        
    });

    const emailTest = 'teste@gmail.com';
    const passwordTest = 'teste123';
    const homePage = 'home.html';
   


    loginBtn.addEventListener('click', function(){
        const emailInputValue = document.getElementById('email').value;
        const passwordInputValue = document.getElementById('password').value;
        if (emailInputValue && passwordInputValue){
            if (emailInputValue === emailTest && passwordInputValue === passwordTest){
                window.location.href = homePage;
            }else{
                alert('dados incorretos');       
            }
        }else{
            alert('Insira dados');
        }
            
    });


});