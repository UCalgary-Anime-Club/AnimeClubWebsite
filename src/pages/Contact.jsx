function Contact() {
  return (
    <body className="contact-body">
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


        <form id="contactForm">
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
          <textarea className="message-bar" id="message" name="message" required></textarea>
          

          <button className="send" type="submit">
            Send
          </button>

          <p id="sendMessage"></p>
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
    </body>

  )
}

export default Contact;