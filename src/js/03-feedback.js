import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form")
const input = form.querySelector("input[name='email']")
const textarea = form.querySelector("textarea[name='message']")

const storedInfo = JSON.parse(localStorage.getItem("feedback-form-state"))
if (storedInfo !== null) {
    const { email, message } = storedInfo;
    input.value = email;
    textarea.value = message;
}

form.addEventListener("input", throttle(function () {
            const email = form.querySelector("[name='email']").value;
            const message = form.querySelector("[name='message']").value;
            const info = { email, message };
            localStorage.setItem("feedback-form-state", JSON.stringify(info))
}, 500))

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (input.value === "" || textarea.value === "") {
        alert("Fill in all fields")
    } else {
        const storage = localStorage.getItem("feedback-form-state");
        const storageObj = JSON.parse(storage);
        console.log(storageObj);
        localStorage.removeItem("feedback-form-state")
        input.value = ''
        textarea.value = ''
    }
    })