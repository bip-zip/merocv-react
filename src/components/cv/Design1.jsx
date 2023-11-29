import './design1.css';
import PdfDownloader from './PdfDownloader';
import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import apiUrl from '../../config';
import dateFormat from 'dateformat';

function Design1() {
  const url = apiUrl+'/cv/userinfo'
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState('');

const [skills, setSkills] = useState([])
const [experiences, setExperiences] = useState([])
const [education, setEducation] = useState([])
const [certifications, setCertifications] = useState([])

  const config = {
    headers: {
      Authorization: "Token " + localStorage.getItem('token')
    }
  };
  const getSkills = async () => {
    const skFromServer = await axios.get(apiUrl+'/cv/skills', config)
    setSkills(skFromServer.data)
}
  const getEducation = async () => {
    const eduFromServer = await axios.get(apiUrl+'/cv/education', config)
    setEducation(eduFromServer.data)
}
  const getExperiences = async () => {
    const expFromServer = await axios.get(apiUrl+'/cv/experiences', config)
    setExperiences(expFromServer.data)
}
  const getCertifications = async () => {
    const expFromServer = await axios.get(apiUrl+'/cv/certifications', config)
    setCertifications(expFromServer.data)
}

   useEffect(() => {
    axios.get(url, config)
      .then((response) => {
        if (response.status === 200) {
          const result = response.data;
          setFirstName(result.firstname);
          setLastName(result.lastname);
          setRole(result.role);
          setEmail(result.email);
          setContact(result.contact);
          setAddress(result.address);
          setSummary(result.summary);
          setImage(apiUrl + result.image);
        } else {
          console.error("Request failed with status:", response.status);
          // Handle the error or set default values if needed
        }
      })
      .catch((error) => {
        console.error("Request failed with an error:", error);
        // Handle the error or set default values if needed
      });



      getEducation();
      getSkills();
      getExperiences();
      getCertifications();
  
  }, []);






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
	      <img src={image} alt="profile_pic" />
	    </div>
	    <div class="r_left_sub">
      <div class="r_info">
	      <ul>
	        <li>
	          <p>{email}</p>
	        </li>
	        <li>
	          <p>{contact}</p>
	        </li>
	        <li>
	          <p>{address}</p>
	        </li>
	      </ul>
	    </div>
	      <div class="r_skills">
	        <h4>Skills</h4>
	        <ul>
          {skills.map((sk, index) => ( 
                  <li id={index}> 
                  {sk.skill}
                  </li>
          ))}
	        </ul>
	      </div>
	      
	    </div>
	</div>
	<div class="resume_right">
	    <div class="r_namerole">
	      <p>{firstname} {lastname}</p>
	      <p class="role">{role}</p>
	    </div>
      <div class="r_aboutme">
	       
	        <small>{summary}</small>
	      </div>
	    
	    <div class="r_right_sub">
	      <div class="r_education">
	        <h4>Education</h4>
	        <ul>
          {education.map((edu, index) => ( 

	          <li>
	            <div class="r_ed_left">
	              <p>{edu.degree}</p>
	            </div>
	            <div class="r_ed_right">
	              <p>{edu.institution}</p>
	              <p>Year of Completion: {dateFormat(edu.completion_date, "yyyy")} with {edu.grade} grade. </p>
	            </div>
	          </li>
          ))}
	         
	        </ul>
	      </div>
	      <div class="r_jobs">
	        <h4>Work Experience</h4>
	        <ul>
          {experiences.map((ex, index) => ( 
	          <li>
	            <div class="r_ed_left">
	              <p>{dateFormat(ex.start_date, "yyyy")}-{dateFormat(ex.end_date, "yyyy")}</p>
	            </div>
	            <div class="r_ed_right">
	              <p>{ex.company}</p>
	              <p>{ex.responsibility} as <b>{ex.role}</b>.</p>
	            </div>
	          </li>
          ))}
	         
	        </ul>
	      </div>
	      
        <div class="r_education">
	        <h4>Certifications</h4>
	        <ul>
          {certifications.map((edu, index) => ( 

	          <li>
	            <div class="r_ed_left">
	              <p>{edu.degree}</p>
	            </div>
	            <div class="r_ed_right">
	              <p>{edu.institution}</p>
	              <p>Completed with {edu.grade} grade. </p>
	            </div>
	          </li>
          ))}
	         
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
             imageUrl={image}
            />
          </div>
        </div>

      </div>
      </div>

 
    </>
  )
}

export default Design1