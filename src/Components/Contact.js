import React from 'react';


function Contact() {
  return(
    <div>
        <div>
  <div className="w3-bar w3-white w3-border-bottom w3-xlarge">
    <a href="#" className="w3-bar-item w3-button w3-text-red w3-hover-red"><b><i className="fa fa-map-marker w3-margin-right" />Logo</b></a>
    <a href="#" className="w3-bar-item w3-button w3-right w3-hover-red w3-text-grey"><i className="fa fa-search" /></a>
  </div>
  {/* Header */}
  <header className="w3-display-container w3-content w3-hide-small" style={{maxWidth: '1500px'}}>
    <img className="w3-image" src="./images/london2.jpg" alt="London" width={1500} height={700} />
    <div className="w3-display-middle" style={{width: '65%'}}>
      <div className="w3-bar w3-black">
        <button className="w3-bar-item w3-button tablink" onclick="openLink(event, 'Flight');"><i className="fa fa-plane w3-margin-right" />Flight</button>
        <button className="w3-bar-item w3-button tablink" onclick="openLink(event, 'Hotel');"><i className="fa fa-bed w3-margin-right" />Hotel</button>
        <button className="w3-bar-item w3-button tablink" onclick="openLink(event, 'Car');"><i className="fa fa-car w3-margin-right" />Rental</button>
      </div>
      {/* Tabs */}
      <div id="Flight" className="w3-container w3-white w3-padding-16 myLink">
        <h3>Travel the world with us</h3>
        <div className="w3-row-padding" style={{margin: '0 -16px'}}>
          <div className="w3-half">
            <label>From</label>
            <input className="w3-input w3-border" type="text" placeholder="Departing from" />
          </div>
          <div className="w3-half">
            <label>To</label>
            <input className="w3-input w3-border" type="text" placeholder="Arriving at" />
          </div>
        </div>
        <p><button className="w3-button w3-dark-grey">Search and find dates</button></p>
      </div>
      <div id="Hotel" className="w3-container w3-white w3-padding-16 myLink">
        <h3>Find the best hotels</h3>
        <p>Book a hotel with us and get the best fares and promotions.</p>
        <p>We know hotels - we know comfort.</p>
        <p><button className="w3-button w3-dark-grey">Search Hotels</button></p>
      </div>
      <div id="Car" className="w3-container w3-white w3-padding-16 myLink">
        <h3>Best car rental in the world!</h3>
        <p><span className="w3-tag w3-deep-orange">DISCOUNT!</span> Special offer if you book today: 25% off anywhere in the world with CarServiceRentalRUs</p>
        <input className="w3-input w3-border" type="text" placeholder="Pick-up point" />
        <p><button className="w3-button w3-dark-grey">Search Availability</button></p>
      </div>
    </div>
  </header>
  {/* Page content */}
  <div className="w3-content" style={{maxWidth: '1100px'}}>
    {/* Good offers */}
    <div className="w3-container w3-margin-top">
      <h3>Good Offers Right Now</h3>
      <h6>Up to <strong>50%</strong> discount.</h6>
    </div>
    <div className="w3-row-padding w3-text-white w3-large">
      <div className="w3-half w3-margin-bottom">
        <div className="w3-display-container">
          <img src="./images/cinqueterre.jpg" alt="Cinque Terre" style={{width: '100%'}} />
          <span className="w3-display-bottomleft w3-padding">Cinque Terre</span>
        </div>
      </div>
      <div className="w3-half">
        <div className="w3-row-padding" style={{margin: '0 -16px'}}>
          <div className="w3-half w3-margin-bottom">
            <div className="w3-display-container">
              <img src="./images/newyork2.jpg" alt="New York" style={{width: '100%'}} />
              <span className="w3-display-bottomleft w3-padding">New York</span>
            </div>
          </div>
          <div className="w3-half w3-margin-bottom">
            <div className="w3-display-container">
              <img src="./images/sanfran.jpg" alt="San Francisco" style={{width: '100%'}} />
              <span className="w3-display-bottomleft w3-padding">San Francisco</span>
            </div>
          </div>
        </div>
        <div className="w3-row-padding" style={{margin: '0 -16px'}}>
          <div className="w3-half w3-margin-bottom">
            <div className="w3-display-container">
              <img src="./images/pisa.jpg" alt="Pisa" style={{width: '100%'}} />
              <span className="w3-display-bottomleft w3-padding">Pisa</span>
            </div>
          </div>
          <div className="w3-half w3-margin-bottom">
            <div className="w3-display-container">
              <img src="./images/paris.jpg" alt="Paris" style={{width: '100%'}} />
              <span className="w3-display-bottomleft w3-padding">Paris</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Explore Nature */}
    <div className="w3-container">
      <h3>Explore Nature</h3>
      <p>Travel with us and see nature at its finest.</p>
    </div>
    <div className="w3-row-padding">
      <div className="w3-half w3-margin-bottom">
        <img src="./images/ocean2.jpg" alt="Norway" style={{width: '100%'}} />
        <div className="w3-container w3-white">
          <h3>West Coast, Norway</h3>
          <p className="w3-opacity">Roundtrip from $79</p>
          <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
          <button className="w3-button w3-margin-bottom">Buy Tickets</button>
        </div>
      </div>
      <div className="w3-half w3-margin-bottom">
        <img src="./images/mountains2.jpg" alt="Austria" style={{width: '100%'}} />
        <div className="w3-container w3-white">
          <h3>Mountains, Austria</h3>
          <p className="w3-opacity">One-way from $39</p>
          <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
          <button className="w3-button w3-margin-bottom">Buy Tickets</button>
        </div>
      </div>
    </div>
    {/* Newsletter */}
    <div className="w3-container">
      <div className="w3-panel w3-padding-16 w3-black w3-opacity w3-card w3-hover-opacity-off">
        <h2>Get the best offers first!</h2>
        <p>Join our newsletter.</p>
        <label>E-mail</label>
        <input className="w3-input w3-border" type="text" placeholder="Your Email address" />
        <button type="button" className="w3-button w3-red w3-margin-top">Subscribe</button>
      </div>
    </div>
    {/* Contact */}
    <div className="w3-container">
      <h2>Contact</h2>
      <p>Let us book your next trip!</p>
      <i className="fa fa-map-marker" style={{width: '30px'}} /> Chicago, US<br />
      <i className="fa fa-phone" style={{width: '30px'}} /> Phone: +00 151515<br />
      <i className="fa fa-envelope" style={{width: '30px'}}> </i> Email: mail@mail.com<br />
      <form action="/action_page.php" target="_blank">
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name" /></p>
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Email" required name="Email" /></p>
        <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message" required name="Message" /></p>
        <p><button className="w3-button w3-black w3-padding-large" type="submit">SEND MESSAGE</button></p>
      </form>
    </div>
    {/* End page content */}
  </div>
  {/* Footer */}
  <footer className="w3-container w3-center w3-opacity w3-margin-bottom">
    <h5>Find Us On</h5>
    <div className="w3-xlarge w3-padding-16">
      <i className="fa fa-facebook-official w3-hover-opacity" />
      <i className="fa fa-instagram w3-hover-opacity" />
      <i className="fa fa-snapchat w3-hover-opacity" />
      <i className="fa fa-pinterest-p w3-hover-opacity" />
      <i className="fa fa-twitter w3-hover-opacity" />
      <i className="fa fa-linkedin w3-hover-opacity" />
    </div>
    <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" className="w3-hover-text-green">w3.css</a></p>
  </footer>
</div>

    </div>
  ) 
}

export default Contact