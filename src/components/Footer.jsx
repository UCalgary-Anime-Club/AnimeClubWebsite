function Footer() {
  return (
    <section className="footer">
      <div className="left-section">
        <p className="text">
          Email us if you have questions!
        </p>

        <p className="email">
          ucalgaryanimeclub@gmail.com
        </p>

      </div>

      <nav className="footer-menu">

          <a className="linktree" href="https://linktr.ee/uc.animeclub" target="_blank">
            <img src="pictures/linktree-icon.webp"
            alt="linktree"
            />
          </a>
 
          <a className="instagram" href="https://www.instagram.com/animeclubuofc/" target="_blank">
            <img src="pictures/instagram-icon.png"
            alt = "instagram"
            />
          </a>

          <a className="discord" href="https://discord.gg/wBKq22DBD" target="_blank">
            <img src="pictures/discord-icon.png"
            alt="discord"
            />
          </a>     
      </nav>
    </section>
  )
}

export default Footer;