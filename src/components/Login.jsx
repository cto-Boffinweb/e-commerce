import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Users } from "../components/Userdata.jsx";
import Cookies from "js-cookie";

export default function Login() {
 
const [userState, setUserState] = useState(
  JSON.parse(localStorage.getItem("loggedInUser"))
);

const [selectedAddress, setSelectedAddress] = useState(
  JSON.parse(localStorage.getItem("selectedAddress"))
);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

 const handleLogin = (e) => {
  e.preventDefault(); // ✅ always at the top

  // 1. Check if user exists
  const foundUser = Users.find(
    (u) => u.email === email && u.password === password
  );

  if (foundUser) {
    // 2. Save user to localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

    // 3. CREATE TOKEN AFTER USER FOUND
    const now = new Date();
    const formatTime = (t) => t.toTimeString().split(" ")[0];
    const startTime = formatTime(now);
    const expiryTime = formatTime(new Date(now.getTime() + 60 * 60 * 1000)); // +1 hour
    const tokenId = Math.random().toString(36).substring(2, 10);

    const tokenData = {
      auth: true,
      username:"aman@gmail.com",
      tokenId: tokenId,
      start: startTime,
      expiry: expiryTime,
    };

    
    Cookies.set("authToken", JSON.stringify(tokenData), { expires: 1 });
console.log("Cookie value:", Cookies.get("authToken"));

    
    window.dispatchEvent(new Event("userLoggedIn"));

    
    alert("Login Successful");
    navigate("/checkout");
  } else {
setError("Invalid email or password");
  }
};



  return (
    <div>
      <div className="row bg-light">
        <div className="col-sm-10 mx-auto py-2">
          <Link to="/">Home</Link> / <Link to="/login">Login</Link>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h5 className="text-center py-3 bg-light">Login</h5>
            <form onSubmit={handleLogin}>
              <div className="form-group my-4" style={{ fontSize: "14px" }}>
                <label>EMAIL</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="form-control bg-light my-2 text-muted login-form"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group my-4" style={{ fontSize: "14px" }}>
                <label>PASSWORD</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="form-control bg-light my-2 login-form"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <button
                type="submit"
                className="btn btn-dark"
                style={{ borderRadius: "0", width: "98%", padding: "10px" }}
              >
                LOGIN
              </button>
              <Link>
                <u>Lost your password?</u>
              </Link>
            </form>
          </div>

          <div className="col-lg-6 ">
            <h5 className="text-center py-3 bg-light">New Customer</h5>
            <h5 className="my-4">Create an account</h5>
            <p style={{ fontSize: "14px", color: "gray" }}>
              Sign up for a free account at our store. Registration is quick and
              easy. It allows you to be able to order from our shop. To start
              shopping click register.
            </p>
            <Link to="/register">
              <button className="btn btn-outline-dark rounded-0">
                CREATE AN ACCOUNT
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style>
        {`
       .login-form {
          border-radius: 0;
          font-size: 13px;
          padding: 12px;
          width: 98%;
        }
      `}
      </style>
    </div>
  );
}
