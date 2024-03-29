import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import volunteerLogo from '../../logos/volunteer.png';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



// Material Button

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #3F90FC 30%, #3F90FC 90%)',
    border: 0,
    borderRadius: '6px',
    color: 'white',
    height: 48,
    padding: '14px 43px',
    marginRight:'15px',
    marginLeft:'3px'
  });
 
  const AdminBtn = styled(Button)({
    background: 'linear-gradient(45deg, #434141 30%, #434141 90%)',
    border: 0,
    borderRadius: '6px',
    color: 'white',
    height: 48,
    padding: '14px 43px',
    marginRight:'15px'
  })

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
      <li className="nav-item">
        <Link className="nav-link">Home</Link>
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
        <MyButton>Register</MyButton>
       </li>
       <li className="nav-item">
         <AdminBtn>Admin</AdminBtn>
       </li>
    </ul>
  </div>
</nav>
 </div>
</div>
    );
};

export default Header;