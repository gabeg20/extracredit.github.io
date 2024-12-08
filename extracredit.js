// Utility Functions
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearError(elementId) {
    document.getElementById(elementId).textContent = "";
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}


// Input Validation Functions
function validateFirstName() {
    const firstName = document.getElementById("firstName").value.trim();
    const regex = /^[a-zA-Z'-]{1,30}$/;

    if (!firstName) {
        showError("firstNameError", "First name is required.");
        return false;
    } else if (!regex.test(firstName)) {
        showError("firstNameError", "First name can only contain letters, apostrophes, and dashes.");
        return false;
    } else {
        clearError("firstNameError");
        return true;
    }
}

function validateMiddleInitial() {
    const middleInitial = document.getElementById("middleInitial").value.trim();
    const regex = /^[a-zA-Z]?$/; // Optional single letter

    if (middleInitial && !regex.test(middleInitial)) {
        showError("middleInitialError", "Middle initial must be a single letter.");
        return false;
    } else {
        clearError("middleInitialError");
        return true;
    }
}

function validateLastName() {
    const lastName = document.getElementById("lastName").value.trim();
    const regex = /^[a-zA-Z'-]{1,30}$/;

    if (!lastName) {
        showError("lastNameError", "Last name is required.");
        return false;
    } else if (!regex.test(lastName)) {
        showError("lastNameError", "Last name can only contain letters, apostrophes, and dashes.");
        return false;
    } else {
        clearError("lastNameError");
        return true;
    }
}
