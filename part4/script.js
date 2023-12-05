document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");

    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault(); 

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const recipientEmail = document.getElementById("recipient-email").value; 

        const formData = {
            name,
            email,
            message,
            recipientEmail, 
        };

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            successMessage.style.display = "block";
            errorMessage.style.display = "none";

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        } catch (error) {
            successMessage.style.display = "none";
            errorMessage.style.display = "block";
        }
    });
});
