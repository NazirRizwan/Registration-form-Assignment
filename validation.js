document.getElementById("registrationForm").addEventListener("submit", function (event) {
    // Prevent form submission
    event.preventDefault();

    // Clear previous error messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("qualificationError").textContent = "";

    // Get form field values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const qualification = document.getElementById("qualification").value;

    let isValid = true;

    // Validate username
    if (username === "") {
        document.getElementById("usernameError").textContent = "Username is required.";
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        isValid = false;
    }

    // Validate password
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required.";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
        isValid = false;
    }

    // Validate qualification
    if (qualification === "") {
        document.getElementById("qualificationError").textContent = "Please select a qualification.";
        isValid = false;
    }

    // If valid, submit the form
    if (isValid) {
        alert("Registration successful!");
        // You can proceed with form submission here
        // e.g., form.submit();
    }
});

// Clear error messages on reset
document.getElementById("registrationForm").addEventListener("reset", function () {
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("qualificationError").textContent = "";
});
