document.getElementById('btn').addEventListener('click', function () {
    const emailInput = document.getElementById('email-input')
    let emailValue = emailInput.value
    console.log(emailValue);

    const passwordInput = document.getElementById('password-input')
    let passwordValue = passwordInput.value;
    console.log(passwordValue);
    
    if (emailValue == "potkhaw@khor.com" && passwordValue == "potkhaw") {
        window.location.href = "home.html"
    }
    else {
        let wrongPass = document.getElementById('wrong-password')
        // let output = ;
        
        wrongPass.innerText = 'Please provide right email address or password'

    }

})