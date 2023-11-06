import React, { useState } from 'react'
import axios from "axios";
import  { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import apiUrl from '../../config';


function Login() {
  
  const navigate = useNavigate();
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const loginUser = async (e) => {
  const url = apiUrl+'/auth/login'
  e.preventDefault(); 
  const userData = {
    username,
    password,
  };
 

  try {
    const result = await axios.post(url, userData);
    if (result.status == 200) {
      toast.success('logged in.');
      localStorage.setItem('token',result.data.token)
      navigate('/marketplace');

    } else {
      toast.error('Server Error: ' + result.data.message);
    }
  } catch (error) {
    toast.error('Server Error.');
  }
 
};
  return (
    <div className="container-fluid ">
      <div className="container col-md-9  p-0 mb-5">
        <div className="row">
          <div className="col text-center">
          <img
          height={400}
              className=" mt-5"
              src="/images/pic2.png"
              alt="My Image"
            />
            <h5 className='fw-light mb-0 text-center'>Learn first to lead the rest ; <a className='text-decoration-none' href="https://techaxis.com.np/">TechAxis.com.np</a> </h5>

          </div>
          <div className="col-lg-4 mx-auto ">
          <div className="bg-white shadow p-3 pb-4 loginbox">
            <div className="text-center">
            <img
              height={50}
              src="/logo.svg"
              alt="My Image"
            />
           
            </div> <hr />
            <div className="text-center fw-light h4">signin </div>
         
            <form className="mt-4">
              <div class="mb-3">
                <input
                  type="email"
                  placeholder="email address"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={username} onChange={(e)=>setUsername(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  placeholder="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  value={password} onChange={(e)=>setPassword(e.target.value)}
                />
              </div>

              <button type="submit" class="btn-blue col-lg-12" title="signin" onClick={loginUser}>
              <i className="fa-solid fa-check fs-5"></i>
              </button>
            </form>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default Login;
