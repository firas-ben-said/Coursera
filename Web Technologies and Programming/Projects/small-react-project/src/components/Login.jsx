import React, {useState} from "react";
import { Link } from "react-router-dom";

// function Login() {
//     return(
//         <div>
//             <h1>Login</h1>
//             <form>
//                 <label for= "username">Username: </label>
//                 <input type = "text" id = "username" name = "username" placeholder="Username" required/><br/>
//                 <label for= "password">Password: </label>
//                 <input type = "password" id = "password" name = "password" placeholder="Password" required/><br/>
//                 <input type = "radio" id = "remember" />
//                 <label>Remember me</label><br/>
//                 <button>Login</button>
//                 <p><Link to = "/signup">Create an account.</Link></p>
//             </form>
//         </div>
//     )
// }

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password: ', password);
    }
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label for="username">Username: </label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                /><br />
                <label for="password">Password: </label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                /><br />
                <input type="radio" id="remember" />
                <label>Remember me</label><br />
                <button>Login</button>
                <p><Link to="/signup">Create an account.</Link></p>
            </form>
        </div>
    )
}

export default Login;