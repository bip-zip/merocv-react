import React from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import toast from 'react-hot-toast';


function Navbar() {

  // logout function
  const navigate = useNavigate();

   const userLogout = () => {
    if(window.confirm('You sure to signout from this account ?')){
    localStorage.clear();
    localStorage.removeItem('token');
    toast.success('signed out...');
    navigate('/');
    };
   

}
  return (
    <div className="container-fluid">
        <div className="container col-md-9  p-0">


        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
  { localStorage.getItem('token') ? 
  <Link to='/marketplace' class="navbar-brand"><img src="/logo.svg" alt="" /></Link>
    :<a class="navbar-brand" href="/"><img src="/logo.svg" alt="" /></a>}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    { localStorage.getItem('token') ? 
    <ul class="navbar-nav ms-auto ">
      <li class="nav-item">
      <Link to='/marketplace' className="nav-link">marketplace</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link active " aria-current="page" to="/signup">your details</Link>
    </li>
    
    <li class="nav-item">
      <a style={{"cursor":"pointer"}} class="nav-link "  onClick={userLogout} title='signout'>{localStorage.getItem('username')} <i className="fa-solid fa-right-to-bracket"></i></a>
    </li>
   
  </ul>
    :
    <ul class="navbar-nav ms-auto ">
        <li class="nav-item">
          <Link class="nav-link active " aria-current="page" to="/signup">signup</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to='/'>signin</Link>
        </li>
       
       
      </ul>
         
        }
      
    </div>
  </div>
</nav>

  
            </div>
            </div>
  )
}

export default Navbar