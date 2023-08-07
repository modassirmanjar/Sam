import React from "react";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import "../App.css"
const Header = () => {
  const side=()=>{
    if(document.getElementById("side").style.display=="none"){
      document.getElementById("side").style.display="block";
      document.getElementById("App").style.display="grid";
      document.getElementById("App").style.gridTemplateColumns="17.9% 82.1%";
      
    }else{
      document.getElementById("App").style.display="grid";
      document.getElementById("App").style.gridTemplateColumns="0% 100%";
     
      document.getElementById("side").style.display="none";
  
    }
  }
  return (<div className="header">
    <nav className="nav-conatainer">
      <div className="first-container">
        <button onClick={side} className="first-button" type="submit"><i class='bx bx-list-ul'></i></button>
        <span className="first-container-span">
          <a href="">Home</a>
        </span>
        <span className="first-container-span">
          <a href="">Contact</a>
        </span>
      </div>
      <div className="second-container">
        <button className="search"><i class='bx bx-search'></i> </button>
        <a href=""><i class='bx bx-message-rounded-dots'></i></a>
        <a href=""><i class='bx bx-bell'></i></a>
        <a href=""><i class='bx bx-expand'></i></a>
        <a href=""><i class='bx bxl-microsoft'></i></a>
      </div>
    </nav>
  </div>
  )
}
export default Header;