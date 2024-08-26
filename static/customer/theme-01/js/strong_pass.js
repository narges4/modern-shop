let state = false;
let password = document.getElementById(password_id);
let passwordStrength = document.getElementById("password-strength");
let lowCase = document.querySelector(".low-case i");
let upperCase = document.querySelector(".upper-case i");
let number = document.querySelector(".one-number i");
let specialChar = document.querySelector(".one-special-char i");
let eightChar = document.querySelector(".eight-character i");

password.addEventListener("keyup", function(){
    let pass = document.getElementById(password_id).value;
    checkStrength(pass);
});
function toggle(){
    if(state){
        document.getElementById(password_id).setAttribute("type","password");
        state = false;
    }else{
        document.getElementById(password_id).setAttribute("type","text")
        state = true;
    }
}

function myFunction(show){
    show.classList.toggle("fa-eye-slash");
}

function checkStrength(password) {
    let strength = 0;

    //If password contains both lower and uppercase characters
    if (password.match(/([A-Z])/)) {
        strength += 1;
        upperCase.classList.remove('fa-circle');
        upperCase.classList.add('fa-check');
    } else {
        upperCase.classList.add('fa-circle');
        upperCase.classList.remove('fa-check');
    }
    if (password.match(/[a-z]/)) {
        strength += 1;
        lowCase.classList.remove('fa-circle');
        lowCase.classList.add('fa-check');
    } else {
        lowCase.classList.add('fa-circle');
        lowCase.classList.remove('fa-check');
    }
    //If it has numbers and characters
    if (password.match(/([0-9])/)) {
        strength += 1;
        number.classList.remove('fa-circle');
        number.classList.add('fa-check');
    } else {
        number.classList.add('fa-circle');
        number.classList.remove('fa-check');
    }
    //If it has one special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength += 1;
        specialChar.classList.remove('fa-circle');
        specialChar.classList.add('fa-check');
    } else {
        specialChar.classList.add('fa-circle');
        specialChar.classList.remove('fa-check');
    }
    //If password is greater than 7
    if (password.length > 7) {
        strength += 1;
        eightChar.classList.remove('fa-circle');
        eightChar.classList.add('fa-check');
    } else {
        eightChar.classList.add('fa-circle');
        eightChar.classList.remove('fa-check');   
    }

    // If value is less than 2
    if (strength < 2) {
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.add('progress-bar-danger');
        passwordStrength.style = 'width: 10%';
        $('#result').text('ضعیف')
    } else if (strength === 3) {
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-warning');
        passwordStrength.style = 'width: 60%';
        $('#result').text('متوسط')
    } else if (strength === 5) {
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-success');
        passwordStrength.style = 'width: 100%';
        $('#result').text('قوی')
    }
}