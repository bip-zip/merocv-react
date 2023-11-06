import React from 'react'
import { Link } from 'react-router-dom'
function MarketPlace() {
  return (
    <div className="container-fluid">
      <div className="container col-md-9 p-0 px-3 ">
        <div className='text-center mt-4 mb-2'>
          <h4><i class="fa-solid fa-store"></i> Merocv Marketplace </h4>
          <small className="fw-light">Your dream job is just one click away from your dream. <br /> Feel free to choose the design that matches your personality. Good Luck 🍀 </small>
        </div> <hr />
        <div className="row mb-5 mt-5">
          <div className="col-lg-3 me-5 cvsample  py-2 text-center">
           <Link className='text-decoration-none'>
           <img height={300} className='cvimg border' src="/images/cv1.jpg" alt="" />
            <p className="p-2 text-dark">Design: Saral✅</p></Link>
          </div>
          <div className="col-lg-3 me-5 cvsample  py-2 text-center">
           <Link className='text-decoration-none'>
           <img className='cvimg border' height={300} src="/images/cv2.jpg" alt="" />
            <p className="p-2 text-dark ">Design: Aago🔥</p></Link>
          </div>
          </div>
          </div>
          </div>
  )
}

export default MarketPlace