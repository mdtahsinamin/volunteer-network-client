import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import volunteerLogo from '../../logos/volunteer.png';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



// Material Button

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  });


const Header = () => {
    return (
      <div className="header">
          <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
  <Link to={'/home'} className="navbar-brand"><img className='volunteerLogo' src={volunteerLogo} alt=""/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link">Donation</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link">Events</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link">Blog</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link">Events</Link>
      </li>
       <li className="nav-item">
        <MyButton>Register</MyButton>
       </li>
       <li className="nav-item">
       <Button className ='adminBtn' variant="contained">
        Admin
      </Button>
       </li>
    </ul>
  </div>
</nav>
 </div>
</div>
    );
};

export default Header;