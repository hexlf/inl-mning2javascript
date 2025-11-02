function Navbar() {
  return (
    <div>
      <div className="Navbarcontainer">
        <div className="NeedsToBeDarkGreen">
          <div>
            <img className="smallimg" src="src/img/phone.png" alt="phone number" />
            <a href="X">+46 8 123 122 44</a>
            <img className="smallimg" src="src/img/mail.png" alt="gmail" />
            <a href="X">contact@domain.com</a>
          </div>
          <div>
            <a href=""><img src="" alt="" /></a>
            <a href=""><img src="" alt="" /></a>
            <a href=""><img src="" alt="" /></a>
            <a href=""><img src="" alt="" /></a>
          </div>
        </div>
      </div>
      <div className="NeedToBeWhite">
        <a href="X"><img src="src/img/Logo.png" alt="Logo" /></a>
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Services</a>
        <a href="">Contact Us</a>
        <a href="booking.html" className="NeedToBeYelow">Book Now</a>
      </div>
      <button  className="test">
      test
      </button>
    </div>
  )
}

export default Navbar