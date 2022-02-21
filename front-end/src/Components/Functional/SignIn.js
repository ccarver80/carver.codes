import React from "react";

function SignIn(){
    return (
        
        <div className="signin">
             <form>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
            />
            <button className="button" type="submit">
              Sign In
            </button>
          </form>
        </div>
    )
}

export default SignIn; 