import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import ImageUploading from 'react-images-uploading';

import '../Login/login.scss'
import { useNavigate } from 'react-router-dom';

function Register() {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [avatar, setAvatar] = useState()
  const [loginName, setloginName] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let newuser = { fname, lname, loginName, password, avatar: (avatar === null)? "" : avatar[0].data_url }
    try {
      // eslint-disable-next-line
      const response = await axios.post(`http://localhost:3000/users/signIn`,
        newuser,
        {withCredentials: true}
      )
      alert("Regitered successfully")
      navigate('/login')
    } catch (err) {
      alert("failed to regis")
    }
  }

  const onChangeImage = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setAvatar(imageList);
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Resigter</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" name='fname' onChange={e => setFname(e.target.value)} value={fname} required />
          <input type="text" placeholder="Last Name" name='lname' onChange={e => setLname(e.target.value)} value={lname} required />
          {/* <input type="text" placeholder="Picture" name='picture'/> */}
          <input type="text" placeholder="loginName" name='loginName' onChange={e => setloginName(e.target.value)} value={loginName} required />
          <input type="password" placeholder="Password" name='password' onChange={e => setPassword(e.target.value)} value={password} required />
          <ImageUploading
            multiple={false}
            value={avatar}
            onChange={onChangeImage}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemove,
              dragProps,
            }) => (
              <div className="avatar">
                Choose avatar
                &nbsp;
                <FontAwesomeIcon
                  style={{ color: 'rgb(175, 175, 175)' }}
                  icon={faImage}
                  onClick={onImageUpload}
                  {...dragProps}
                />
                <div>
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image['data_url']} alt="" width="100" />
                      <button
                        onClick={() => onImageRemove(index)}
                        style={{ background: 'transparent', border: 'none', color: 'rgb(175, 175, 175)' }}
                      >x</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ImageUploading>
          <button type='submit'>Regis</button>
        </form>
      </div>
    </div>
  );
}

export default Register;