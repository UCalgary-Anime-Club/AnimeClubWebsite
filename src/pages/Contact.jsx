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


        <form id="contactForm" className="contactForm" onSubmit={handleSubmit}>
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
            <a className="linktree" href="https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Fuc.animeclub%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAad-FB9ic_D6i1w3o1la8vHBXbb_VsfXpDtkFE9ErDBAKgQMYCqYVjtVsG53OA_aem_DRGnSSIt6m4CTRtokLtHuw&e=AUBMS-Pz66jR7BNKndgqzBcNDPJya3l4Xu9or6ywT5Bq7F8mgSnFP7Utg_w9pSufkDiGxRFOz7e1d4UZmiLJM3Zj1hQOWDjDekZUk7kGLTEPbD4Ouk9v3gD1Yb4q98UFFz-gFiKgLf38sPVj0fwcQWY" target="_blank">
              linktr.ee
            </a>
          
          <a className="instagram" href="https://www.instagram.com/animeclubuofc/" target="_blank">
              Instagram
          </a>
          
            <a className="discord" href="https://discord.gg/wBKq22DBD" target="_blank">
              Discord
            </a>         
        </div>
            
      </section>
    </main>

  );
}

export default Contact;