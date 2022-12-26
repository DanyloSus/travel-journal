import React from "react";

export default function Header () {
    return (
        <header className="header">
            <img 
                src="../img/earth.png"
                className="header--image"
                alt="earth"
            />
            <h3 className="header--h3">
                My travel journal
            </h3>
        </header>
    );
}