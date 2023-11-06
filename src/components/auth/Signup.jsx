import React, { useState } from 'react'
import axios from "axios";
import  { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import apiUrl from '../../config';

function Signup() {

  const navigate = useNavigate();
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [password2, setCpassword] = useState('');

const registerUser = async (e) => {
  const url = apiUrl+'/auth/register'
  e.preventDefault(); // Stops the default behavior, i.e., page refresh
  if (password === password2) {
    const userData = {
      username,
      password,
      password2
    };

    try {
      const result = await axios.post(url, userData);
      if (result.status == 200) {
        toast.success("Registered Successfully!");
        navigate('/');
      } else {
        toast.error('result.data.message');
      }
    } catch (error) {
      toast.error('Server Error.');
    }
  } else {
    toast.error("Password doesn't match!");
  }
};

  return (
    <div className="container-fluid ">
      <div className="container col-md-9  p-0 mb-5">
        <div className="row">
          <div className="col text-center mt-5">
          <img
          height={350}
              className='mt-5'
              src="/images/pic5.png"
              alt="My Image"
            />
            <h5 className='fw-light mb-0'>Find your dream job @<a className='text-decoration-none' href="https://jobaxle.com/">JobAxle.com</a> </h5>

          </div>
          <div className="col-lg-4 mx-auto ">
          <div className="bg-white shadow p-3 pb-4 loginbox">
            <div className="text-center">
            <img
              height={110}
              src="/images/logo.png"
              alt="My Image"
            />
           
            </div> <hr />
            <div className="text-center fw-light h4">signup </div>
         
            <form className="mt-4">
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="email address"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={username} onChange={(e)=>setUsername(e.target.value)}

                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password} onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="confirm password"
                  className="form-control"
                  id="exampleInputPassword2"
                  value={password2} onChange={(e)=>setCpassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn-blue col-lg-12" title="signin" onClick={registerUser}>
              <i className="fa-solid fa-check fs-5"></i>
              </button>
            </form>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default Signup