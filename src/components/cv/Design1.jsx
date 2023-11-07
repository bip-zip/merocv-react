import React from 'react'
import './design1.css';
import PdfDownloader from './PdfDownloader';
function Design1() {

  



  return (
    <>
    <div className="container-fluid mt-3 ">
      <div className="container col-md-9 p-0 mb-5 px-3">
        <div className="row">
          <div className="col-lg-9  ">
      <h4 className='text-center'> Design 1 : Saral </h4>
<div className='shadow-sm'>
<section class="resume " id='design1'>
	<div class="resume_left">
	    <div class="r_profile_pic">
	      <img src="/images/pic1.png" alt="profile_pic" />
	    </div>
	    <div class="r_left_sub">
      <div class="r_info">
	      <ul>
	        <li>
	          <p>alexwood@gmail.com</p>
	        </li>
	        <li>
	          <p>+15 120 5677684</p>
	        </li>
	        <li>
	          <p>Kathmandu</p>
	        </li>
	      </ul>
	    </div>
	      <div class="r_skills">
	        <h4>Skills</h4>
	        <ul>
	         
	          <li>
	           
	            Webhgfhdfhfdhdfh 
	          </li>
	          <li>
	           
	            Video Editing
	          </li>
	          <li>
	          
	         Sound Mixing
	          </li>
	          <li>
	         
	           Photoshop Editing
	          </li>
	        </ul>
	      </div>
	      
	    </div>
	</div>
	<div class="resume_right">
	    <div class="r_namerole">
	      <p>Alexander Wood</p>
	      <p class="role">Web Developer</p>
	    </div>
      <div class="r_aboutme">
	       
	        <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa earum optio id iure reprehenderit accusamus quisquam accusantium nulla? Dolorum ipsa sed perspiciatis nemo aliquam quibusdam, alias quae totam nulla nihil.</small>
	      </div>
	    
	    <div class="r_right_sub">
	      <div class="r_education">
	        <h4>Education</h4>
	        <ul>
	          <li>
	            <div class="r_ed_left">
	              <p>2010-2013</p>
	            </div>
	            <div class="r_ed_right">
	              <p>Web Masters College</p>
	              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa earum optio id iure reprehenderit</p>
	            </div>
	          </li>
	          <li>
	            <div class="r_ed_left">
	              <p>2013-2017</p>
	            </div>
	            <div class="r_ed_right">
	              <p>Web Designing College</p>
	              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa earum optio id iure reprehenderit</p>
	            </div>
	          </li>
	          <li>
	            <div class="r_ed_left">
	              <p>2017-2018</p>
	            </div>
	            <div class="r_ed_right">
	              <p>Video Designing College</p>
	              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa earum optio id iure reprehenderit</p>
	            </div>
	          </li>
	        </ul>
	      </div>
	      <div class="r_jobs">
	        <h4>Work Experience</h4>
	        <ul>
	          <li>
	            <div class="r_ed_left">
	              <p>2015-2017</p>
	            </div>
	            <div class="r_ed_right">
	              <p>Google</p>
	              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa earum optio id iure reprehenderit</p>
	            </div>
	          </li>
	          <li>
	            <div class="r_ed_left">
	              <p>2017-2019</p>
	            </div>
	            <div class="r_ed_right">
	              <p>Facebook</p>
	              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa earum optio id iure reprehenderit</p>
	            </div>
	          </li>
	          <li>
	            <div class="r_ed_left">
	              <p>2019-2022</p>
	            </div>
	            <div class="r_ed_right">
	              <p>Instagram</p>
	              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa earum optio id iure reprehenderit</p>
	            </div>
	          </li>
	        </ul>
	      </div>
	    </div>
	</div>
</section>
</div>

          </div>
          <div className="col mt-5">
            <PdfDownloader
             downloadFileName="MeroCV-Design1" 
             rootElementId="design1" 
            />
          </div>
        </div>

      </div>
      </div>

 
    </>
  )
}

export default Design1