import React,{useEffect} from 'react'
import {Link,useLocation} from "react-router-dom";


function Navbar(props) {
  let location = useLocation();
useEffect(() => {
  // console.log(location.pathname);
}, [location]);
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}   bg-${props.mode}`}>
  <div className="container-fluid">
    
  <Link className={`nav-link  ${location.pathname==="/"? "active":""}`} to='/' >
      <img src="../../favicon-32x32.png"  className='mx-2' alt="" width="30" height="24"/>
      {props.title}
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link  ${location.pathname==="/"? "active":""}`} aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link  ${location.pathname==="/"? "active":""}`} to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link  ${location.pathname==="/"? "active":""}`} to="/Contact">Contact</Link>
        </li>
        
      </ul>
      
      {/* <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">enable dark mode</label>
</div> */}
    </div>
  </div>
</nav>
    </>
  )
}


export default Navbar