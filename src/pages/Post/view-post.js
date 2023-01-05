import { useState } from 'react'
// import { Navigate, useNavigate } from 'react-router-dom';
import "./index.css"
import * as Icons5 from "react-icons/io5";
import report from "./Vector.png"
import ImageSlider from './image'
import axios from "axios";
import useAuth from './../../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';


function ViewPost({ post, id }) {
  const { auth, setAuth } = useAuth()
  const navigate = useNavigate()
  const [Liked, setLiked] = useState(post.liked)
  const HandleLiked = () => {
    if (post.liked === true)
      setLiked(!Liked)
    else if (post.liked === false) {
      setLiked(!Liked);
      post.like++;
      post.liked = true;
    }
  }
  const ViewIcon = !Liked ?
    <Icons5.IoHeartOutline
      className='prev-post_uIcon'
      style={{ color: "black" }} /> :
    <Icons5.IoHeart
      className='prev-post_uIcon'
      style={{ color: "red" }}
    />

  const [Reported, setReported] = useState(post.Reported);
  const HandleReported = async () => {
    if (JSON.stringify(auth) === '{}') navigate('/login')
    const response = await axios.get(`http://localhost:3000/posts/report?postID=${id}`, { withCredentials: true })
    setReported(!Reported);
    post.Reported = true;
  }
  return (
    <div className='post_layout' >
      <div className="title"> {post.title} </div>
      <div className='imageSlider'>
        <ImageSlider
          slides={post.img}
        />
      </div>
      <div className='icon'>
        <button className='like-inpost' onClick={HandleLiked}>{ViewIcon}</button>
        <button className="like-inpost">
          <Icons5.IoChatbubbleEllipsesOutline className='prev-post_uIcon' />
        </button>
        <button className="like-inpost">
          <Icons5.IoPaperPlaneOutline className='prev-post_uIcon' />
        </button>
      </div>

      <p className='likes'>{post.like} likes</p>

      <div className="content" >{post.content} </div>

      <button className='report' onClick={HandleReported}>
        <input type="image" src={report} alt='Report' />
      </button>
    </div>
  )

}

export default ViewPost