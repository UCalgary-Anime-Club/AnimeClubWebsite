function Homepage() {
  return (
    <main>
      <img className="banner" id="banner" src="/pictures/Website-banner.png"/>
      <section className="home">

        <img className="mascot" src="public/pictures/Luna-Explaining.png"/>
        
        <div className="general-info">
          <div>
            <p className="heading">
              WHO ARE WE?
            </p>
            <p className="text">
              We are a student-led club at the University of Calgary that is dedicated to creating a community for everyone interested in anime/manga, cosplaying and Japanese culture.
            </p>
          </div>

          <div>
            <p className="heading">
              WEEKLY EVENTS EVERY FRIDAY
            </p>
            <p className="text">
              Join our weekly meetings every Friday 5pm to 9pm! We host several activities like movie nights, karaoke, anime trivia, and many more!
            </p>
          </div>
            
            <a href="events.html">
              <button className="upcoming-events">
                Check Out Our Upcoming Events!
              </button>
            </a>

          <div>
            <p className="heading">
              GIVE US EVENT SUGGESTIONS
            </p>
            <a href="contact.html">
              <button className="suggestions">
                what kind of events would YOU be interested in!

              </button>
            </a>
          </div>
        </div>
  
      </section>


      <section className="memberships">
        <p className="heading">
          MEMBERSHIP
        </p>
        <p className="text">
          Become a member to get for just $5 to get exclusive offers and perks!
        </p>  
        
        <p className="text">
          Memeberships incudes:  
        </p>
        <p className="text">
          - 50% off paid club events
        </p>
        <p className="text">
          - Free snacks at events
        </p>
        <p className="text">
          - Unrestricted Manga Library Access
        </p>
        <p className="text">
          - and more!
        </p>
      </section>
    </main>
  );
}

export default Homepage;