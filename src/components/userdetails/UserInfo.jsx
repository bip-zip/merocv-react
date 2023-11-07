import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import apiUrl from '../../config';

function UserInfo() {
const url = apiUrl+'/cv/userinfo'

  const navigate = useNavigate();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState(null);

   // to show choosen and existing pic
   const [dimage, setDimage] = useState('');

   // change thumbnail event
   const onImageChange = (event) => {
       if (event.target.files && event.target.files[0]) {
           setDimage(URL.createObjectURL(event.target.files[0]));
           setImage(event.target.files[0]);
       }
   }

   useEffect(() => {
    const config = {
      headers: {
        Authorization: "Token " + localStorage.getItem('token')
      }
    };
  
    axios.get(url, config)
      .then((response) => {
        if (response.status === 200) {
          const result = response.data;
          console.log(result);
          setFirstName(result.firstname);
          setLastName(result.lastname);
          setEmail(result.email);
          setContact(result.contact);
          setAddress(result.address);
          setSummary(result.summary);
          setImage(apiUrl + result.image);
          setDimage(apiUrl + result.image);
          console.log(apiUrl + result.image);
        } else {
          console.error("Request failed with status:", response.status);
          // Handle the error or set default values if needed
        }
      })
      .catch((error) => {
        console.error("Request failed with an error:", error);
        // Handle the error or set default values if needed
      });
  
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('contact', contact);
    formData.append('address', address);
    formData.append('summary', summary);
    formData.append('image', image);

    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type for FormData
          Authorization: "Token " + localStorage.getItem('token')
        },
      });

      if (response.status == 201) {
        // Successful response handling
        navigate('/userdetails/work-exp')
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
    
<div className='col-lg-7 mx-auto p-4 shadow-sm mb-4 mt-1 rounded-3'>
  <form encType="multipart/form-data" onSubmit={handleSubmit} >
  <div class="mb-3 border p-2 rounded-3 text-center">
      <img src={dimage} className="my-2 rounded-circle" style={{ 'height': "7em" }} />
      <input onChange={onImageChange} type="file" required  class="form-control" id="imgfile" />
    </div>
    <div class="mb-3">
      <input placeholder='First Name' type="text" required value={firstname} onChange={(e) => setFirstName(e.target.value)} class="form-control" id="exampleEmail1" aria-describedby="emailHelp" />

    </div>
    <div class="mb-3">
      <input placeholder='Last Name' type="text" required value={lastname} onChange={(e) => setLastName(e.target.value)} class="form-control" id="exampleEmail1" aria-describedby="emailHelp" />

    </div>
    <div class="mb-3 ">
      <input placeholder='Email' type="email" required  value={email} onChange={(e) => setEmail(e.target.value)}  className="form-control" id='email' />
     
    </div>
    <div class="mb-3 ">
    
      <input placeholder='Contact' type="text" required  value={contact} onChange={(e) => setContact(e.target.value)}  className="form-control" id='desc' />
     
    </div>
    <div class="mb-3">
      
      <input placeholder='Address' type="text" required value={address} onChange={(e) => setAddress(e.target.value)} class="form-control" id="exampleInputP1" />
    </div>
    <div class="mb-3 ">
     
      <textarea placeholder='Summary' type="text" required value={summary} onChange={(e) => setSummary(e.target.value)} class="form-control" id="exampleInputP1" ></textarea>
    </div>
    
    <div className='d-flex justify-content-end mb-2 '>

      <button type="submit"  class=" col-lg-4 btn btn-primary btn-sm"> Save Changes</button>
    </div>
  </form>

</div>





</div>;
}


export default UserInfo;