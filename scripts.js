const form = document.querySelector("#newsletter-form");
const email = document.querySelector("#femail");
const errorMsg = document.querySelector(".error-msg");
const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const signUp = document.querySelector(".signup-container");
const success = document.querySelector(".success-container");
const successEmail = document.querySelector(".success-email");
const successButton = document.querySelector(".success-button")

function sendFormDataToServer() {
    const formData = new FormData(form);

    fetch('/submit-form', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Form submitted successfully:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (email.value.trim() === "" || !isValid.test(email.value)
    ) {
        email.style.backgroundColor = "hsla(4, 100.00%, 67.10%, 0.20)"
        email.style.borderColor = "hsl(4, 100%, 67%)"
        email.style.color = "hsl(4, 100%, 67%)"
        errorMsg.innerText = "Valid email required"
    } else {
        email.style.backgroundColor = "hsl(0, 0%, 100%)";
        email.style.borderColor = "hsl(231, 7%, 60%)";
        email.style.color = "black";
        errorMsg.innerText = "";
        signUp.style.display = "none"
        success.style.display = "flex"
        successEmail.innerText = `${email.value}`
        sendFormDataToServer();
        form.reset();
    }
});

successButton.addEventListener("click", () => {
        signUp.style.display = "grid"
        success.style.display = "none"
});