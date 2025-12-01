import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (formData.password !== formData.confirmPassword) {
  //     alert("Passwords do not match!");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post("http://localhost:5000/api/register", formData);
  //     console.log("Server Response:", response.data);
  //     alert("Registration successful!");
  //     // You can redirect user to login page here
  //   } catch (error) {
  //     console.error("Registration Error:", error.response ? error.response.data : error.message);
  //     alert("Registration failed. Please try again.");
  //   }
  // };

  return (
    <div>
      <div className="row bg-light">
        <div className="col-sm-10 mx-auto py-2">
          <Link to='/'>Home</Link>  /  <Link to='/login'>Register</Link>
        </div>
      </div>
      <div className="row my-5">
        <h3 className='text-center' style={{fontFamily:'monospace'}}>Register Here</h3>
        <div className="container py-2">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card shadow-sm">
                <div className="card-body p-4">
                  <form >
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm password"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <textarea
                        name="address"
                        className="form-control"
                        rows="3"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your full address"
                        style={{ resize: "none" }}
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-outline-dark w-100">
                      Register
                    </button>
                  </form>

                  <p className="mt-3 text-center">
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
