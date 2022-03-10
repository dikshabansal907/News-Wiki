import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
// import styles from'./myStyles.css';
export default class Navbar extends Component { 
  render() {
    // const myStyle={
    //     textAlign:"center",
    // }
    const listStyle={
        display:"inline-block",
        // paddingTop:"50px",
         paddingLeft:"10px",
        //  borderRight:"1px solid white"
        //  textDecoration:"none",
        //  color:"#F5BC53",
    }
    return(
    <>
    {/* <div style={myStyle} > */}
    <nav  className="navbar navbar-light bg-white ">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1 mx-4 ">NEWS WIKI</span>
    <form class="d-flex">
      <input class="form-control input-lg me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
<nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:"#263238"}}>
  <div className="container-fluid">
  <a class="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
            {/* <li style={listStyle}><Link to="/">News Wiki</Link></li> */}
            <li style={listStyle}><Link to="/general">General  </Link></li>
            <li style={listStyle}><Link to="/business">Business  </Link></li>
            {/* <li style={listStyle}><Link to="/business">Business</Link></li> */}
            <li style={listStyle}><Link to="/entertainment">Entertainment  </Link></li>
            
            <li style={listStyle}><Link to="/health">Health  </Link></li>
            <li style={listStyle}><Link to="/science">Science  </Link></li>
            <li style={listStyle}><Link to="/sports">Sports  </Link></li>
            <li style={listStyle}><Link to="/technology">Technology  </Link></li>
      </div>
    </div>
  </div>
</nav>
        <ul>
            
        </ul>

    {/* </div> */}
        
    </>
    )
  }
}
