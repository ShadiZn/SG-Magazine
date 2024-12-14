document
    .getElementById("contact-form")
    .addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        if (validateForm(name, email, phone, message)) {
            disableButton(true);
            showAlert("Sending your message...", "info");

            await simulateFormSubmission();

            disableButton(false);
            showAlert("Your message has been sent successfully!", "success");

            document.getElementById("contact-form").reset();
        } else {
            showAlert("Please fill out all fields correctly.", "error");
        }
    });

function validateForm(name, email, phone, message) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phonePattern = /^[0-9]{10}$/;

    if (name === "" || email === "" || phone === "" || message === "") {
        return false;
    }
    if (!emailPattern.test(email)) {
        showAlert("Please enter a valid email address.", "error");
        return false;
    }
    if (!phonePattern.test(phone)) {
        showAlert("Please enter a valid phone number.", "error");
        return false;
    }
    return true;
}

function showAlert(message, type) {
    const alertBox = document.createElement("div");
    alertBox.classList.add("alert", `alert-${type}`);
    alertBox.textContent = message;
    document.body.prepend(alertBox);

    setTimeout(() => {
        alertBox.style.opacity = "0";
        setTimeout(() => alertBox.remove(), 500);
    }, 1500);
}

function disableButton(isDisabled) {
    const button = document.querySelector(".btn");
    button.disabled = isDisabled;
    button.innerText = isDisabled ? "Sending..." : "Send Message";
}

async function simulateFormSubmission() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}

document.querySelectorAll("img, .btn").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        element.style.transform = "scale(1.05)";
        element.style.transition = "transform 0.3s ease";
    });

    element.addEventListener("mouseleave", () => {
        element.style.transform = "scale(1)";
    });
});

document.querySelectorAll(".alert").forEach((alert) => {
    alert.addEventListener("click", () => {
        alert.style.backgroundColor = "#16a085";
    });
});
