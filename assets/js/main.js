const userName = document.querySelector("#name")
const phoneNumber = document.querySelector("#phone-number")
const email = document.querySelector("#email")
const message = document.querySelector("#message")
const sendBtn = document.querySelector("#send")

const contactName = document.querySelector("#contact-name")
const contactEmail = document.querySelector("#contact-email")
const contactPhone1 = document.querySelector("#contact-phone1")
const contactPhone2 = document.querySelector("#contact-phone2")

const heroName = document.querySelector("#hero-name")
const userAlert = document.querySelector("#alert")

sendBtn.addEventListener("click", sendForm)

function displayError() {
  userAlert.style.visibility = "visible"
  setTimeout(removeError, 2000)
}

function removeError() {
  userAlert.style.visibility = "hidden"
}

function sendForm() {
  if (
    userName.value === "" ||
    email.value === "" ||
    phoneNumber.value === "" ||
    message.value === ""
  ) {
    displayError()
  } else {
    contactName.textContent = userName.value
    contactEmail.textContent = email.value
    contactPhone1.textContent = phoneNumber.value
    contactPhone2.textContent = phoneNumber.value
    heroName.textContent = userName.value
    alert(message.value)
  }
}
