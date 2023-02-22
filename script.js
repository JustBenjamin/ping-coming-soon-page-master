const form = document.querySelector("form");
const submit = document.getElementById("submit")
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showError();
    }

});




function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "Please enter an email address"
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Please provide a valid email address"
    }
}

form.addEventListener("submit", (event) => {
    if (email.value === "") {
        emailError.textContent = "Please enter an email address"
                event.preventDefault();
            }   else if (!email.validity.valid) {
                showError();
                event.preventDefault();

            }
})

