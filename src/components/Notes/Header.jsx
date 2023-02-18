import React, { useState } from "react";

var name = "Shubh Arora";

function Header() {

    return <div className="header">
        <h1>Notes App</h1>
        <p>Created by {name}</p>
    </div>
}

export default Header;