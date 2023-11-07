import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import apiUrl from '../../config';

function Certification() {
const url = apiUrl+'/cv/certifications'


const [experiences, setExperiences] = useState([])
  const navigate = useNavigate();
  const [institution, setInstitute] = useState('');
  const [address, setAddress] = useState('');
  const [completion_date, setCompletionDate] = useState('');
  const [degree, setDegree] = useState('');
  const [grade, setGrade] = useState('');
  const [percentage, setPercentage] = useState('');

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


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData();
    formData.append('institution', institution);
    formData.append('address', address);
    formData.append('completion_date', completion_date);
    formData.append('percentage', percentage);
    formData.append('grade', grade);
    formData.append('degree', degree);

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
        navigate('/userdetails/certifications');
        getExperiences();
        toast.success('qualification added successfully');
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
    <input placeholder='institution Name' required value={institution} onChange={(e) => setInstitute(e.target.value)} type="text" class="form-control"  />
  </div>
  <div class="col-md-6">
    <input placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} type="text" class="form-control" id="inputPassword4" />
  </div>
  <div class="col-12">
    <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)}  class="form-control" id="inputAddress" placeholder="Degree Name" />
  </div>

  <div class="col-md-6">
  <input title='Completion Date' value={completion_date} onChange={(e) => setCompletionDate(e.target.value)} required  placeholder='From'  type="date" class="form-control"  />
  </div>
  <div class="col-md-3">
   
    <input  placeholder='grade' value={grade} onChange={(e) => setGrade(e.target.value)}  type="text" class="form-control" />
  </div>
  <div class="col-md-3">
    <input title='to' value={percentage} onChange={(e) => setPercentage(e.target.value)} max={99} placeholder='Percentage' type="number" class="form-control"  />
  </div>

 

 
  
 
  <div class="col-12 d-flex justify-content-end mb-2 mt-3">
  <button type="submit"  class=" col-lg-4 btn btn-primary btn-sm"> Save Changes</button>
  </div>
</form>

</div>

<div className='col-lg-7 mx-auto p-4 shadow-sm mb-4 mt-3 rounded-3' >
{experiences.map((exp, index) => (
                        <div className=' my-2'>
                           
                            <div className="d-flex justify-content-between ">
                                <div>
                                    <p>{index+1}. </p>
                                </div>
                                
                                <div>
                                    <p>{exp.degree}</p>
                                </div>
                                <div>
                                    {exp.completion_date == null?<p>Present</p>:<p>{exp.completion_date}</p>}
                                </div>
                                <div>
                                    <p><b>{exp.institution}</b></p>
                                </div>
                                <div>
                                    <p>{exp.grade}</p>
                                </div>
                                <div>
                                    <button className='btn btn-sm btn-danger'>x</button>
                                </div>
                            </div>
                        </div>
                    ))}
</div>





</div>;
}


export default Certification;