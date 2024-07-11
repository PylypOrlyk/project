const emailEl = document.getElementById("email");
const nameEl = document.getElementById("name");

function togglePopup() {
    document.getElementById("popup").classList.toggle("active");
}

function isValidEmail(mail) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(mail);
}

function isValidName(name) {
    const re = /^[A-Za-zА]{1,20}$/;
    return re.test(name);
}

function checkSucces() {
    const email = emailEl.value;
    const name = nameEl.value;
    const succesMessage = document.getElementById("succes");

    if (isValidEmail(email) && isValidName(name)) {
        succesMessage.textContent = "Succes! We`ll text you soon";
        succesMessage.className = "true";
    } else {
        succesMessage.textContent = "Your contacts is incorrect";
        succesMessage.className = "false";
    }
    
}