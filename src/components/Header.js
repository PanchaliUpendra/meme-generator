import React from "react"
import logo from "./images/ein.png"
function Header(){
    return(
        <header className="header">
            <img src={logo} className="he-img"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">My Goal- I Make Everyone Laugh</h4>
        </header>
    )

}
export default Header;