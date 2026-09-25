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
        <div className="linktree">
          <a href="https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Fuc.animeclub%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAad-FB9ic_D6i1w3o1la8vHBXbb_VsfXpDtkFE9ErDBAKgQMYCqYVjtVsG53OA_aem_DRGnSSIt6m4CTRtokLtHuw&e=AUBMS-Pz66jR7BNKndgqzBcNDPJya3l4Xu9or6ywT5Bq7F8mgSnFP7Utg_w9pSufkDiGxRFOz7e1d4UZmiLJM3Zj1hQOWDjDekZUk7kGLTEPbD4Ouk9v3gD1Yb4q98UFFz-gFiKgLf38sPVj0fwcQWY" target="_blank">
            <img src="pictures/linktree-icon.webp"
            alt="linktree"
            />
          </a>
        </div>
        
        <div className="instagram">
          <a href="https://www.instagram.com/animeclubuofc/" target="_blank">
            <img src="pictures/instagram-icon.png"
            alt = "instagram"
            />
          </a>
        </div>
        
        <div className="discord">
          <a href="https://discord.gg/wBKq22DBD" target="_blank">
            <img src="pictures/discord-icon.png"
            alt="discord"
            />
          </a>
        </div>       
      </nav>
    </section>
  )
}

export default Footer;