import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import "./index.css"
import * as Icons5 from "react-icons/io5";
import report from "./Vector.png"

function ViewPost({ post }){
    const [Liked, setLiked] = useState(post.liked)
    const HandleLiked = () => {
        if(post.liked = true)
        setLiked(!Liked)
        else if(post.liked = false)
        {
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
    const HandleReported = () => {
      setReported(!Reported);
      post.Reported = true;
    }
    
    return (
      <div className='post_layout' >
        <div className="title"> {post.title} </div>
          <div className="img"> <img src={post.img} /> </div>
          <button className='like-inpost' onClick={HandleLiked}>{ViewIcon}</button>
            <p className='likes'>{post.like} likes</p>
              <div className="content">{post.content} </div>
              <div className="view">
              <button className="icon">
                <Icons5.IoEyeSharp className='prev-post_uIcon'
                  style={{ color: "#0000ffa6" }}
                  />
                  {post.view}
              </button>
              </div>
              <div className="like">
              <button
                className='icon'
                onClick={HandleLiked}
              >
                {ViewIcon}
                {post.like}
              </button>
              </div>
                <button className='report' onClick={HandleReported}>
                  <input type="image" src={report} alt='Report'/>
                </button>
    </div>  
      )
}

export default ViewPost