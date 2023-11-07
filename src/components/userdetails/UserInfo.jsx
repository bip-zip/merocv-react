import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import apiUrl from '../../config';



function UserInfo() {
const url = apiUrl+'/cv/userinfo'

  const navigate = useNavigate();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState('')


  const submitForm = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }

    // sending data using formdata
    const pdata = new FormData();
    pdata.append('title', title);
    pdata.append('desc', desc);
    pdata.append('travel_type', travel_type);
    pdata.append('thumbnail', thumbnail);

    axios.post(url, pdata, config).then(result => {
      if (result.status===200) {
        toast.success("details added")
        navigate('/marketplace')
      }else{
        toast.error("Something's wrong!!")
      }
    })

  }

  return <div>
    <h3 className='text-center my-3'>
      Add Details
    </h3><hr />
    <div className='col-lg-6 mx-auto'>
      <form enctype="multipart/form-data">
        <div class="mb-3">
          <label for="exampleInpuil1" class="form-label">Blog Title</label>
          <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} class="form-control" id="exampleEmail1" aria-describedby="emailHelp" />

        </div>
        <div class="mb-3 border p-2 rounded-3">
          <label htmlFor="desc" class="form-label">Description</label>
          <input type="text" required hidden value={desc}  className="form-control" id='desc' />
          <div className="editor">
            <TextEditor onEditorStateChange={onEditorStateChange} editorState={editorState} />
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPasswo" class="form-label">Travel Type</label>
          <input type="text" required value={travel_type} onChange={(e) => setTraveltype(e.target.value)} class="form-control" id="exampleInputP1" />
        </div>
        <div class="mb-3">
          <label for="imgfile" class="form-label">Thumbnail</label>
          <input type="file" required onChange={e => { setThumbnail(e.target.files[0]) }} class="form-control" id="imgfile" />
        </div>
        <div className='d-flex justify-content-end'>

          <button type="submit" onClick={submitForm} class="btn btn-danger btn-sm">Add</button>
        </div>
      </form>

    </div>





  </div>;
}

export default UserInfo;