// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const EmailInput = document.querySelector("#email-input");
const PassInput = document.querySelector("#password-input");
const ConPassInput = document.querySelector("#password-confirm-input");


// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};
EmailInput.onkeyup = () => {
  EmailInput.classList.remove("is-valid");
  EmailInput.classList.remove("is-invalid");
};
PassInput.onkeyup = () => {
  PassInput.classList.remove("is-valid");
  PassInput.classList.remove("is-invalid");
};
ConPassInput.onkeyup = () => {
  ConPassInput.classList.remove("is-valid");
  ConPassInput.classList.remove("is-invalid");
};

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  isPassOk = false;
  isConPassOk = false;

  // validate first name
  if (firstNameInput.value == "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  if (lastNameInput.value == "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  // validate email
  if (EmailInput.value == "" || validateEmail(EmailInput.value) == false) {
    EmailInput.classList.add("is-invalid");
  } else {
    EmailInput.classList.add("is-valid");
    isEmailOk = true;
  }

  // validate password
  if (PassInput.value.length <= 6) {
    PassInput.classList.add("is-invalid");
  } else {
    PassInput.classList.add("is-valid");
    isPassOk = true;
  }

  // validate confirm password
  if (ConPassInput.value == "" || ConPassInput.value !== PassInput.value) {
    ConPassInput.classList.add("is-invalid");
  } else {
    ConPassInput.classList.add("is-valid");
    isConPassOk = true;
  }

  if (isFirstNameOk && isLastNameOk && isEmailOk && isPassOk && isConPassOk) alert("Registered successfully");
};

// add callback function for Reset button.
resetBtn.onclick = () => {
  firstNameInput.value = "";
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
  
  lastNameInput.value = "";
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
  
  EmailInput.value = "";
  EmailInput.classList.remove("is-valid");
  EmailInput.classList.remove("is-invalid");
  
  PassInput.value = "";
  PassInput.classList.remove("is-valid");
  PassInput.classList.remove("is-invalid");

  ConPassInput.value = "";
  ConPassInput.classList.remove("is-valid");
  ConPassInput.classList.remove("is-invalid");
};