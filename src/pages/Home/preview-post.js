import { useState, useEffect } from 'react'
import * as Icons5 from "react-icons/io5";
import "./index.css"

function PreviewPost({ previewInfo }) {

    const [Liked, setLiked] = useState(previewInfo.liked)

    const HandleLiked = () => {
        setLiked(!Liked)
    }

    const showPost = () => {
        console.log("Call API for this id " + previewInfo._id)
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

    useEffect(
        () => {
            // call API
            console.log("User click on liked " + previewInfo.liked)
        },
        [Liked]
    )

    return (
        <div className='prev-post' onClick={showPost}>
            <div className='prev-post_container'>
                <span className='prev-post_cTitle'>
                    {PostTitle}
                    <Icons5.IoOpenOutline />
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
                <div className='prev-post_uInfo'>
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
                        {previewInfo.like}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default PreviewPost