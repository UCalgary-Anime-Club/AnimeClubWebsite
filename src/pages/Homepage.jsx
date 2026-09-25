import {Link} from "react-router-dom";

function Homepage() {
  return (
    <main className="homepage-body">
      <img className="banner" id="banner" src="pictures/Website-banner.png"/>
      
      <section className="home">
        
        <img className="home-logo" src="pictures/Logo Version 2 (3).jpg"/>
        <div className="general-info">
          <div>
            <p className="heading">
              WHO ARE WE?
            </p>
            <p>
              We are a student-led, non-profit club at the University of Calgary that is dedicated to creating a community for everyone interested in anime/manga, cosplaying and Japanese culture. 
            </p>
          </div>

          <div className="time">
            <p className="heading">
              WEEKLY EVENTS EVERY FRIDAY
            </p>
            <p>
              We host weekly meetings every Friday 5pm to 9pm! We host several activities like movie nights, karaoke, anime trivia, and many more!
            </p>
          </div>

          <div className="community">
            <p className="heading">
              COMMUNITY
            </p>
            <p>
              Join the 100+ member community who all share the same interest! This is a great way to meet new people on campus...
            </p>
          </div>
            

          <div className="home-buttons">
            <Link to="/Events">
              <button className="upcoming-events">
                Check Out Our Upcoming Events!
              </button>
            </Link>

            <Link to="/Contact">
              <button className="suggestions">
                What kind of events would YOU be interested in!
              </button>
            </Link>

          </div>
        </div>
  
      </section>

      
      <section className="memberships-section">
        <img className="mascot" src="pictures/Full-Luna-explaining.png"/>
        <div className="memberships">          
          <p className="heading">
            MEMBERSHIP
          </p>
          <p>
            Become a member to get for just $5 to get exclusive offers and perks!
          </p>  
          
          <p>
            <strong>Memeberships incudes: </strong> 
          </p>
          <p>
            - 50% off paid club events
          </p>
          <p>
            - Free snacks at events
          </p>
          <p>
            - Unrestricted Manga Library Access
          </p>
          <p>
            - and more!
          </p>
        </div>
      </section>
    </main>
  );
}

export default Homepage;