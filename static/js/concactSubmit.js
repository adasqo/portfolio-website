const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const sendMessage = (details) => {
    fetch('https://adamkarwowski-website.herokuapp.com/api/v1/saveMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "data": {
                    "name": details["name"],
                    "email": details["email"],
                    "message": details["message"]
                }
            }),
        })
        .then(response => response.json())
        .then(response => console.log(response));
}

const contactName = document.querySelector("#contact-name");
const contactEmail = document.querySelector("#contact-email");
const contactMessage = document.querySelector("#contact-message");
const submitButton = document.querySelector("#contact-submit");
var responseMessage = document.querySelector("#responseText");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const name = contactName.value;
    const email = contactEmail.value;
    const message = contactMessage.value;

    var infoValid = true;
    var responseText = ""

    if (!validateEmail(email)) {
        infoValid = false;
        responseText = "Invalid email.";
    }
    if (name == "") {
        if (responseText == "") {
            responseText = "Empty name."
        } else {
            responseText += " Empty name."
        }
        infoValid = false;
    }
    if (message == "") {
        if (responseText == "") {
            responseText = "Empty message."
        } else {
            responseText += " Empty message."
        }
        infoValid = false;
    }
    if (infoValid) {
        responseText = "Thank you for the feedback!";
        sendMessage({
            "name": name,
            "email": email,
            "message": message
        })
    } else {
        responseText += " Please provide valid emails so that I can text you back!";
    }
    responseMessage.innerHTML = responseText;
    responseMessage.classList.remove('display-not');
})