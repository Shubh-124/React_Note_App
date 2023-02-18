import React, { useState } from "react";

const date = new Date();

function Footer() {
    const time = new Date().toLocaleTimeString();
    const [t, setTime] = useState(time);

    setInterval(() => {
        const newt = new Date().toLocaleTimeString();
        setTime(newt);
    }, 1000);

    return <div className="footer">
        <p>{date.toDateString()}</p>
        <p className="time">{t}</p>
    </div>
}
export default Footer;