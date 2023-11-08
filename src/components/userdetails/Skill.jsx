import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import apiUrl from '../../config';

function Skill() {
const url = apiUrl+'/cv/skills'


const [skills, setSkills] = useState([])
  const navigate = useNavigate();
  const [skill, setSkill] = useState('');
  const [level, setLevel] = useState('');
  

  const config = {
        headers: {
          Authorization: "Token " + localStorage.getItem('token')
        }
      };


      const getSkills = async () => {
        const expFromServer = await axios.get(url, config)
        setSkills(expFromServer.data)
    }

  useEffect(() => {
    
    getSkills();
}, [])


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData();
    formData.append('skill', skill);
    formData.append('level', level);

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
        navigate('/userdetails/skills');
        getSkills();
        toast.success('skill added successfully');
      } else {
        // Handle other response statuses as needed
        toast.error('Failed to save data');
      }
    } catch (error) {
      // Handle request errors
      toast.error('Request error');
    }

}
const deleteSkill = (skill_id) => {
  axios.delete(url +"/"+skill_id , config).then((result) => {
      if (result.status == 204) {
          toast.success("skill removed")
          getSkills();
          navigate('/userdetails/skills')
      }
      else {
          toast.error("Internal server error")

      }
  }).catch((e) => {
      toast.error("Something went wrong!")

  })
}

return <div>
    
<div className='col-lg-7 mx-auto p-4 shadow-sm mb-4 mt-1 rounded-3' >
<form class="row g-3" onSubmit={handleSubmit} >
<div class="col-md-6">
    <input placeholder='Skill' required value={skill} onChange={(e) => setSkill(e.target.value)} type="text" class="form-control"  />
  </div>
  <div class="col-md-6">
    <input placeholder='Level' value={level} onChange={(e) => setLevel(e.target.value)} type="text" class="form-control" id="inputPassword4" />
  </div>
  
  <div class="col-12 d-flex justify-content-end mb-2 mt-3">
  <button type="submit"  class=" col-lg-4 btn btn-primary btn-sm"> Append Skill</button>
  </div>
</form>

</div>

{skills.length > 0 ?<div className='col-lg-7 mx-auto p-4 shadow-sm mb-4 mt-3 rounded-3' >
{skills.map((skill, index) => (
                        <div className=' my-2'>
                           
                            <div className="d-flex justify-content-between ">
                                <div>
                                    <p>{index+1}. </p>
                                </div>
                                
                                <div>
                                    <p>{skill.skill}</p>
                                </div>
                                <div>
                                    <p>{skill.level}</p>
                                </div>
                                
                                
                                <div>
                                    <button className='btn btn-sm btn-danger' onClick={()=> {deleteSkill(skill.id)}}>x</button>
                                </div>
                            </div>
                        </div>
                    ))}
</div>:<></>}





</div>;
}


export default Skill;