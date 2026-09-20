function Contact() {
  return (
    <section class="contact-page">
      <div>
        <p class="heading">
          GET IN TOUCH
        </p>
      </div>

      <div class="subtext">
        <p>
          Let us know if you have any questions or suggestions and we'll get back to you as soon as possible!
        </p>  
      </div>


      <form id="contactForm">
        <p>
          Your name*
        </p>            
        <input class="name-bar" type="text" id="name" name="name" required />
        
        <p>
          Subject of your Email*
        </p>            
        <input class="subject-bar" type="text" id="subject" name="subject" required />
        
        <p>
          Your Email*
        </p>
        <input class="email-bar" type="email" id="email" name="email" required />
        
        <p>
          Your message*
        </p>
        <textarea class="message-bar" id="message" name="message" required></textarea>
        

        <button class="send" type="submit">
          Send
        </button>

        <p id="sendMessage"></p>
      </form>
      

      <p class="heading">
        Follow Our Socials!
      </p>

      <div class="socials">
        <div class="linktree">
          <a href="https://linktr.ee/animeclubuofc" target="_blank">
            LinkTree
          </a>
        </div>
        
        <div class="instagram">
          <a href="https://www.instagram.com/animeclubuofc/" target="_blank">
            Instagram
          </a>
        </div>
        
        <div class="discord">
          <a href="https://discord.gg/wBKq22DBD" target="_blank">
            Discord
          </a>
        </div>            
      </div>
          
    </section>
  )
}

export default Contact;