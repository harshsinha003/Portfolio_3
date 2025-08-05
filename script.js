console.log("✅ script.js is connected and running!");

// Initialize EmailJS
(function() {
    emailjs.init({
        publicKey: "614dP9LHjgdIzusOM",
    });
})();

// Handle form submission
window.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Send form data
        emailjs.sendForm("service_8zvk7s6", "template_tcjaxpp", this)
            .then(() => {
                alert("Message sent successfully!");
                form.reset(); // Clear form after submission
            }, (error) => {
                console.error("Failed to send message:", error);
                alert("Failed to send message. Please try again.");
            });
    });
});



