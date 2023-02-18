import React, { useState } from "react";
import database from "./LoginDatabase";
//import "./loginindex.css";

function LoginForm(props) {


    const [data, setData] = useState({
        username: "",
        password: ""
    });
    const [flagged, setFlag] = useState("false");
    const [errormsg, setErrorMsg] = useState("");

    function getLoggedIn(event) {
        event.preventDefault();

        if (data.username === database.name && data.password === database.password) {
            setFlag(true);
            return props.val(flagged);
        }
        else
            setData(() => {
                return {
                    username: "",
                    password: ""
                };
            })
        return setErrorMsg("Login Unsuccesfull!!");
        //console.log(flagged);
    }

    function storeData(event) {

        const { value, type } = event.target;

        setData((prevData) => {
            if (type === "text") {
                return {
                    username: value,
                    password: prevData.password
                };
            }
            else if (type === "password") {
                return {
                    username: prevData.username,
                    password: value
                };
            }
            return setErrorMsg("");

        });
    }


    return <div className="containerx">
        <div>
            <h1>Notes App</h1>
            <p>Login Screen</p>
        </div>
        <form className="formx">
            <input type="text" placeholder="Username: Shubh" value={data.username} onChange={storeData} />

            <input type="password" placeholder="Password: 123" value={data.password} onChange={storeData} />

            <button className="btnx" type="button" onClick={getLoggedIn}>Login</button>
            <h3>{errormsg}</h3>
        </form>
    </div>
}
export default LoginForm;