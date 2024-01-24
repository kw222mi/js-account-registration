// Get the elements from the DOM
const formElement = document.querySelector("form");
const name = document.getElementById("name");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const submitButton = document.getElementById("submitButton");

// Add eventlisteners
document.addEventListener("DOMContentLoaded", function () {
  formElement.addEventListener("submit", function (e) {
    submitForm(e);
  });

  password.addEventListener("input", function (e) {
    validatePassword();
    updateSubmitButton();
    checkPasswordLength(e);
  });

  confirm.addEventListener("input", function () {
    validatePassword();
    updateSubmitButton();
  });

  const labels = document.querySelectorAll("label");

  labels.forEach((label) => {
    label.addEventListener("click", function () {
      // Find the closest parent with the class 'form-group'
      const formGroup = label.closest(".form-group");
      // Find the first input element within the form-group
      const inputElement = formGroup.querySelector("input");
      // Set focus on the input element
      inputElement.focus();
    });
  });
});

function validatePassword() {
  const passwordValue = password.value;
  const confirmValue = confirm.value;

  // Check if confirm is equal to password
  if (confirmValue !== passwordValue) {
    confirm.classList.add("invalid-password");
  } else {
    confirm.classList.remove("invalid-password");
  }
}

function updateSubmitButton() {
  const passwordValue = password.value;
  const confirmValue = confirm.value;

  // Inaktivera skicka-knappen om lösenord eller bekräftelselösenord inte matchar
  if (passwordValue !== confirmValue || passwordValue.length < 8) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

function checkPasswordLength(e) {
  const passwordValue = password.value;

  // Kontrollera om lösenordet är tillräckligt långt
  if (passwordValue.length < 8) {
    password.classList.add("invalid-password");
  } else {
    password.classList.remove("invalid-password");
  }
}

function submitForm(e) {
  e.preventDefault();

  const formData = {
    name: name.value,
    userName: userName.value,
    email: email.value,
    password: password.value,
    confirm: confirm.value,
  };
  console.log(formData);

    name.value = ''
    userName.value = ''
    email.value = ''
    password.value = ''
    confirm.value = "";

   submitButton.disabled = true;

}
