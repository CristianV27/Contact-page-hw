const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const messageArea = document.querySelector(".message-area");
const submitButton = document.querySelector(".submit-button");
const confirmation = document.querySelector(".confirmation");
const allFields = document.querySelector(".all-fields");

submitButton.addEventListener('click', function () {
    if (firstName.value == 0 && lastName.value == 0 && messageArea.value == 0) {
        checkFirstName();
        checkLastName();
        checkMessageArea();
    }
    else if (firstName.value == 0 && lastName.value == 0) {
        checkFirstName();
        checkLastName();
    }
    else if (lastName.value == 0 && messageArea.value == 0) {
        checkLastName();
        checkMessageArea();
    }
    else if (firstName.value == 0 && messageArea.value == 0) {
        checkFirstName();
        checkMessageArea();
    }
    else if (firstName.value == 0) {
        checkFirstName();
    }
    else if (lastName.value == 0) {
        checkLastName();
    }
    else if (messageArea.value == 0) {
        checkMessageArea();
    }
    else {
        displayConfirmation();
    }
});

function checkFirstName() {
    firstName.classList.add("no-input");
    firstName.addEventListener('input', function () {
        firstName.classList.remove("no-input");
    });
    console.log("No input in first name");
}

function checkLastName() {
    lastName.classList.add("no-input");
    lastName.addEventListener('input', function () {
        lastName.classList.remove("no-input");
    });
    console.log("No input in Last Name");
}

function checkMessageArea() {
    messageArea.classList.add("no-input");
    messageArea.addEventListener('input', function () {
        messageArea.classList.remove("no-input");
    });
    console.log("No input in Message area.");
}

function displayConfirmation() {
    firstNameSpan = document.createElement("span");
    const firstNameText = document.createTextNode(firstName.value);
    firstNameSpan.appendChild(firstNameText);
    confirmation.appendChild(firstNameSpan);
    confirmation.style.display = "block";
    console.log("First Name: " + firstName.value);
    console.log("Last Name: " + lastName.value);
    console.log(firstName.value + "s message : " + messageArea.value);
    firstName.value = null;
    lastName.value = null;
    messageArea.value = null;
    radioButtonsReset();
}

function radioButtonsReset() {
    const radioButtons = document.getElementsByName("gender");
        for (var i = 0; i < radioButtons.length; i++) {
            radioButtons[i].checked = false;
        }
}

allFields.addEventListener('input', function () {
    confirmation.style.display = "none";
}); 