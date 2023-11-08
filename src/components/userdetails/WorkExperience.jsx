import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import apiUrl from '../../config';

function WorkExperience() {
const url = apiUrl+'/cv/experiences'


const [experiences, setExperiences] = useState([])
  const navigate = useNavigate();
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [startdate, setStartDate] = useState('');
  const [enddate, setEndDate] = useState('');
  const [responsibility, setResponsibility] = useState('');
  const [role, setRole] = useState('');

  const config = {
        headers: {
          Authorization: "Token " + localStorage.getItem('token')
        }
      };


      const getExperiences = async () => {
        const expFromServer = await axios.get(url, config)
        setExperiences(expFromServer.data)
    }

  useEffect(() => {
    
    getExperiences();
}, [])

const deleteExp = (exp_id) => {
  axios.delete(url +"/"+exp_id , config).then((result) => {
      if (result.status == 204) {
          toast.success("experience removed")
          getExperiences();
      }
      else {
          toast.error("Internal server error")

      }
  }).catch((e) => {
      toast.error("Something went wrong!")

  })
}


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData();
    formData.append('company', company);
    formData.append('address', address);
    formData.append('start_date', startdate);
    formData.append('end_date', enddate);
    formData.append('role', role);
    formData.append('responsibility', responsibility);

    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type for FormData
          Authorization: "Token " + localStorage.getItem('token')
        },
      });
      console.log(response)

      if (response.status == 201) {
        // Successful response handling
        navigate('/userdetails/work-exp');
        getExperiences();
        toast.success('Data saved successfully');
      } else {
        // Handle other response statuses as needed
        toast.error('Failed to save data');
      }
    } catch (error) {
      // Handle request errors
      toast.error('Request error');
    }

}

return <div>
    
<div className='col-lg-7 mx-auto p-4 shadow-sm mb-4 mt-1 rounded-3' >
<form class="row g-3" onSubmit={handleSubmit} >
<div class="col-md-6">
    <input placeholder='Company Name' required value={company} onChange={(e) => setCompany(e.target.value)} type="text" class="form-control"  />
  </div>
  <div class="col-md-6">
    <input placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} type="text" class="form-control" id="inputPassword4" />
  </div>
<div class="col-md-6">
   
    <input  placeholder='Role' value={role} onChange={(e) => setRole(e.target.value)}  type="text" class="form-control" />
  </div>
  <div class="col-md-3">
  <input title='from' value={startdate} onChange={(e) => setStartDate(e.target.value)} required  placeholder='From'  type="date" class="form-control"  />
  </div>
  <div class="col-md-3">
    <input title='to' value={enddate} onChange={(e) => setEndDate(e.target.value)} placeholder='To' type="date" class="form-control"  />
  </div>

 
  <div class="col-12">
    <input type="text" value={responsibility} onChange={(e) => setResponsibility(e.target.value)}  class="form-control" id="inputAddress" placeholder="What have I done in brief ..." />
  </div>
 
  
 
  <div class="col-12 d-flex justify-content-end mb-2 mt-3">
  <button type="submit"  class=" col-lg-4 btn btn-primary btn-sm"> Save Changes</button>
  </div>
</form>

</div>

{experiences.length>0?<div className='col-lg-7 mx-auto p-4 shadow-sm mb-4 mt-3 rounded-3' >
{experiences.map((exp, index) => (
                        <div className=' my-2'>
                           
                            <div className="d-flex justify-content-between ">
                                <div>
                                    <p>{index+1}. </p>
                                </div>
                                <div>
                                    <p>{exp.role}</p>
                                </div>
                                <div>
                                    <p>{exp.start_date}</p>
                                </div>
                                <div>
                                    {exp.end_date == null?<p>Present</p>:<p>{exp.end_date}</p>}
                                </div>
                                <div>
                                    <p><b>{exp.company}</b></p>
                                </div>
                                <div>
                                    <button onClick={()=> {deleteExp(exp.id)}} className='btn btn-sm btn-danger'>x</button>
                                </div>
                            </div>
                        </div>
                    ))}
</div>:<></>}





</div>;
}


export default WorkExperience;