import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <div className="row bg-light">
<div className="col-sm-10 mx-auto py-2">
    <Link to='/'>Home</Link>  /  <Link to='/login'>Login</Link>
</div></div>
<div className="container my-5">
    <div className="row ">
        <div className="col-lg-6 col-md-12">
            <h5 className='text-center py-3 bg-light'>Login</h5>
            <form action="" >
                <div className='form-group my-4'style={{fontSize:'14px'}}>
<label>EMAIL</label>   
 <input type="email"  placeholder='Enter Your Email' className='form-control bg-light my-2 text-muted login-form' name='email' />
 </div>
  <div className='form-group my-4'style={{fontSize:'14px'}}>
<label>PASSWORD</label>   
 <input type="password"  placeholder='Enter Your Password' className='form-control bg-light my-2 login-form' name='password' />
 </div>
 <button type='submit' className='btn btn-dark' style={{borderRadius:'0' ,width:'98%',padding:'10px'}}>LOGIN</button>
 <Link><u>Lost your password?</u></Link>
 </form>
  </div>

        
        <div className="col-lg-6 ">
                        <h5 className='text-center py-3 bg-light'>New Customer</h5>
                        <h5 className='my-4'>create a account</h5>
                        <p style={{fontSize:'14px',color:'gray'}}>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                      <Link to='/register'><button className='btn btn-outline-dark rounded-0'>CREATE A ACCOUNT</button></Link>
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
      
    
  )
}
