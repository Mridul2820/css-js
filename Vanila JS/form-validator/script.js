const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// error message function
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//  success function
const showSuccess = input => {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


// check email
const checkEmail = input => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input, 'Email is not valid');
    }
}

// check require fields
const checkRequired = inputArray => {
    inputArray.forEach(input => {
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is Required`)
        }
        else {
            showSuccess(input);
        }
    });
}

// check length fields
const checkLength = (input, min, max) => {
    if (input.value.length < min){
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`);
    }
    else if (input.value.length > max){
        showError(input, `${getFieldName(input)} must be atmost ${max} characters`);
    }
    else {
        showSuccess(input)
    }
}

// get field name
const getFieldName = input => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check passwords match
const checkPasswordMatch = (input1, input2) => {
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match');
    }
}


// Event Listeners
form.addEventListener('submit', e => {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 5, 15);
    checkLength(password, 8, 16);
    checkEmail(email);
    checkPasswordMatch(password, password2);
})