const EMAILJS_PUBLIC_KEY = "j09IoQQcEXl1cRnhm";
const EMAILJS_SERVICE_ID = "service_uveckqc";
const EMAILJS_TEMPLATE_ID = "template_4hfbvhm";

emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY
});

const contactForm = document.getElementById("contactForm");
const sendMessage = document.getElementById("sendMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    sendMessage.textContent = "Sending...";

    emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        contactForm
    )
    .then(function() {

        sendMessage.textContent = "Your message was sent successfully!";

        contactForm.reset();

    })
    .catch(function(error) {

        console.log("EmailJS error:", error);

        sendMessageMessage.textContent =
            "Something went wrong. Please try again.";

    });

});