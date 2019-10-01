import React from "react";
import "./style.css";

function Header(props) {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="row">
                    <div className="col-xs-4" id="hsScore"><h3>&nbsp;&nbsp;&nbsp;&nbsp;High Score:&nbsp;&nbsp;<span id="hScore">{props.highscore}</span></h3></div>
                    <div className="col-xs-4" id="title"><h1>Rare Album Clicker</h1><h5>The Game.</h5></div>
                    <div className="col-xs-4" id="cClicks"><h3>Current Clicks:&nbsp;&nbsp;<span id="clickNumber">{props.score}</span>&nbsp;&nbsp;&nbsp;&nbsp;</h3></div>
                    <div className="col-xs-12" id="rules"><p><center>See how many albums you can click without clicking the same one twice!</center></p><br /></div>
                </div>
            </div>
        </nav>
    )
}

export default Header