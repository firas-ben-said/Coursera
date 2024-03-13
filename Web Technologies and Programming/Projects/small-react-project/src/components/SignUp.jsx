import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
    return(
        <div>
            <h1>Sign Up</h1>
            <form>
                <label for= "name">Full Name: </label>
                <input type = "text" id = "name" name = "name" /><br/>
                <label for= "email">Email: </label>
                <input type = "email" id = "email" name = "email" /><br/>
                <label for= "phone">Phone Number: </label>
                <input type = "tel" id = "phone" name = "phone" /><br/>
                <label for= "dob">Date of Birth: </label>
                <input type = "date" id = "dob" name = "dob" /><br/>
                <button>Sign Up</button>
                <p><Link to = "/login">Already have an account.</Link></p>
            </form>
        </div>
    )
}

export default SignUp;