document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";

    if (username.trim() === "") {
        document.getElementById("usernameError").innerText = "Username is required";
        isValid = false;
    }

    if (email.trim() === "" || !email.includes("@")) {
        document.getElementById("emailError").innerText = "Valid email is required";
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});