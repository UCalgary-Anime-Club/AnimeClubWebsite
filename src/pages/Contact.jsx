import {useState} from "react";
import emailjs from "@emailjs/browser";


function Contact() {
  const [sendMessage, setSendMessage] = useState("");
  const EMAILJS_PUBLIC_KEY = "j09IoQQcEXl1cRnhm";
  const EMAILJS_SERVICE_ID = "service_uveckqc";
  const EMAILJS_TEMPLATE_ID = "template_4hfbvhm";

  function handleSubmit(event) {

    event.preventDefault();

    setSendMessage("sending...");

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      event.target,
      EMAILJS_PUBLIC_KEY
    )
    
    .then(() => {
      setSendMessage("Your message was sent!");
      event.target.reset();
    })
    
    .catch((error) => {
      console.log(error);
      setSendMessage("Something went wrong, please try again.");
    });
  }


  return (
    <main className="contact-body">
      <section className="contact-page">
        <div>
          <p className="heading">
            GET IN TOUCH
          </p>
        </div>

        <div className="subtext">
          <p>
            Let us know if you have any questions or suggestions and we'll get back to you as soon as possible!
          </p>  
        </div>


        <form id="contactForm" onSubmit={handleSubmit}>
          <p>
            Your name*
          </p>            
          <input className="name-bar" type="text" id="name" name="name" required />
          
          <p>
            Subject of your Email*
          </p>            
          <input className="subject-bar" type="text" id="subject" name="subject" required />
          
          <p>
            Your Email*
          </p>
          <input className="email-bar" type="email" id="email" name="email" required />
          
          <p>
            Your message*
          </p>
          <textarea className="message-bar" id="message" name="message" required />
          

          <button className="send" type="submit">
            Send
          </button>

          <p id="sendMessage"> {sendMessage} </p>
        </form>
        

        <p className="heading">
          Follow Our Socials!
        </p>

        <div className="socials">
          <div className="linktree">
            <a href="https://linktr.ee/animeclubuofc" target="_blank">
              LinkTree
            </a>
          </div>
          
          <div className="instagram">
            <a href="https://www.instagram.com/animeclubuofc/" target="_blank">
              Instagram
            </a>
          </div>
          
          <div className="discord">
            <a href="https://discord.gg/wBKq22DBD" target="_blank">
              Discord
            </a>
          </div>            
        </div>
            
      </section>
    </main>

  );
}

export default Contact;