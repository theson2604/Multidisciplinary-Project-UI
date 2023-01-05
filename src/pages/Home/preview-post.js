import { useState, useEffect } from 'react'
import * as Icons5 from "react-icons/io5";
import { Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./index.css"
import useAuth from './../../hooks/useAuth';

function PreviewPost({ previewInfo }) {
    const { auth, setAuth } = useAuth()

    const navigate = useNavigate()
    const [Liked, setLiked] = useState(previewInfo.liked)
    const [likeNumber, setLikeNumber] = useState(previewInfo.like)

    const HandleLiked = async () => {
        if (JSON.stringify(auth) === '{}') navigate('/login')

        const response = await axios.get(`http://localhost:3000/posts/like?${previewInfo._id}`, { withCredentials: true })

        if (Liked === false) {
            setLikeNumber(likeNumber + 1)
        }
        else {

            setLikeNumber(likeNumber - 1)
        }

        setLiked(!Liked)
    }

    const showPost = () => {
        navigate("/post/" + previewInfo._id)
        console.log("Call API for this id " + previewInfo._id)
    }

    const showUser = () => {
        console.log("Call API for this user " + previewInfo.authorDetail.lname)
    }

    const AuthorFullName =
        previewInfo.authorDetail.fname + " " + previewInfo.authorDetail.lname

    const PostTitle = previewInfo.title.length < 70 ?
        previewInfo.title : previewInfo.title.slice(0, 70) + "..."

    const ViewIcon = !Liked ?
        <Icons5.IoHeartOutline
            className='prev-post_uIcon'
            style={{ color: "#A69797" }} /> :
        <Icons5.IoHeart
            className='prev-post_uIcon'
            style={{ color: "red" }}
        />

    return (
        <div className='prev-post hoverBigBlur' >
            <div className='prev-post_container ' onClick={showPost}>
                <span className='prev-post_cTitle'>
                    {PostTitle}
                </span>
                <div className='pre-post_cThumbnail'>
                    <img
                        className='prev-post_cImage'
                        src={previewInfo.img}
                        alt='Post image' />
                </div>
            </div>
            {/* User information part */}
            <div className='prev-post_user'>
                <div
                    className='prev-post_uInfo'
                    onClick={() => showUser}>
                    <img
                        className='prev-post_uAvatar'
                        src={previewInfo.authorDetail.avatar}
                        alt='Post image' />
                    {AuthorFullName}
                </div>
                <div className='prev-post_uStatus'>
                    <button className='centerBtn'>
                        <Icons5.IoEyeSharp className='prev-post_uIcon'
                            style={{ color: "#0000ffa6" }}
                        />
                        {previewInfo.view}
                    </button>
                    <button
                        className='centerBtn'
                        onClick={HandleLiked}
                    >
                        {ViewIcon}
                        {likeNumber}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default PreviewPost