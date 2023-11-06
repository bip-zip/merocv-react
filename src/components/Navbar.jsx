import React from 'react'

function Navbar() {
  return (
    <div className="container-fluid">
        <div className="container col-md-9  p-0">


        <nav class="navbar navbar-expand-lg navbar-dark  bg-blue">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><i class="fa-regular fa-file fa-flip-vertical"></i> merocv </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto text-white">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">signup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">signin</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

  
            </div>
            </div>
  )
}

export default Navbar