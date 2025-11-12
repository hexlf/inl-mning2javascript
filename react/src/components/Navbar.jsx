import { Link, NavLink  } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="Navbarcontainer">
        <div className="Navbartop NeedsToBeDarkGreenbk">
          <div className="phone-mail">
            <div>
              <img className="smallimg" src="src/img/phone.png" alt="phone number" />
              <a className="whitelinks" href="X">+46 8 123 122 44</a>
            </div>
            <div>
              <img className="smallimg" src="src/img/mail.png" alt="gmail" />
              <a className="whitelinks" href="X">contact@domain.com</a>
            </div>
          </div>
          <div className="imgcontainer">
            <img src="src/img/facebook.png" alt="" />
            <img src="src/img/X.png" alt="" />
            <img src="src/img/instagram.png" alt="" />
            <img src="src/img/youtube.png" alt="" />
          </div>
        </div>
        <div className="Navbarbottom">
          <div className="needrow">
              <a ><img className="logo" src="src/img/Logo.png" alt="Logo" /></a>
              <div>
                <NavLink className="greenlinks NeedsUrbanFont" to="/">Home</NavLink>
                <NavLink className="greenlinks NeedsUrbanFont" to="/about">About Us</NavLink>
                <NavLink className="greenlinks NeedsUrbanFont" to="/Services">Services</NavLink>
                <NavLink className="greenlinks NeedsUrbanFont" to="/Contact">Contact Us</NavLink>
              </div>
              <div>
                <NavLink to="/booking" className="NeedToBeYelowbtn btn-area btn-navbar NeedsUrbanFont">Book Now</NavLink>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar