import { useState, useEffect } from "react";
import styles from "./login.module.css"
function Login() {
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true); // Ensures the map only renders on the client
    }, []);

    if(!isClient) return <p>Loading.....</p>
    return (
        <div>
            <h1 className={styles.login}>Login</h1>
            <form className={styles.loginForm}>
                <label className={styles.uname}>UserName</label>
                <input type="text" id="uname" name="uname"></input><br/>
                <label htmlFor="pwd">Password</label>
                <input type="password" id="pwd" name="pwd"></input>  <br/>
            </form>
        </div>
    )
}


export default Login;