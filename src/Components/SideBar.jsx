import React from "react";
import './SideBar.css';
import { Dropdown, Menu } from 'semantic-ui-react'
import Dropdowns from "./Dropdown.jsx";
//  import Style from '../Images/Usericon.png'
const SideBar = () => {
    return (
        <aside className="sidebar">
            <div className="admin-container">
                <a href="" id="a1">
                    <img src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png" alt="" />
                    <span>AdminRSPL3</span>
                </a>
            </div>
            <div className="user-container">

                <i class='bx bxs-user' id="icon"></i>
                <span className="user-name">Alexanderpierce</span>

            </div>

            <div className="third">

                <input className="input-box" placeholder="search" />
                <button className="search-button" ><i id="icon" aria-hidden="true" class="search large icon"></i></button>

            </div>
            <div id="drop">

                <Dropdowns /> 
            </div>
            
        </aside>

    )


}
export default SideBar;