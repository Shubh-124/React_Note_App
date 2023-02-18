import React, { useState } from "react";
import LoginForm from "./LoginForm";
import App from "../Notes/App";

function LoginApp() {
    const [element, setElement] = useState("");
    function setFlagElement(item) {
        setElement(item);
    }

    return <div>
        {element ? <App /> : <LoginForm val={setFlagElement} />}
    </div>
}
export default LoginApp;