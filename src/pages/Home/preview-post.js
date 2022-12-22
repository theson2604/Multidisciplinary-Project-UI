import { useState, useEffect } from 'react'
import * as Icons5 from "react-icons/io5";
import "./index.css"

function PreviewPost({ previewInfo }) {

    const showPost = () => {
        console.log("Call API for this id " + previewInfo._id)
    }

    const AuthorFullName =
        previewInfo.authorDetail.fname + " " + previewInfo.authorDetail.lname

    const PostTitle = previewInfo.title.length < 70 ? previewInfo.title : previewInfo.title.slice(0, 70) + "..."

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
            <div className='prev-post_user'>
                {AuthorFullName}
                <div>
                    <img
                        className='prev-post_uAvatar'
                        src={previewInfo.authorDetail.avatar}
                        alt='Post image' />
                    {previewInfo.like}
                    <Icons5.IoHeart />
                    <Icons5.IoHeartOutline />
                    {previewInfo.liked}
                    {previewInfo.view}
                    <Icons5.IoEyeSharp />
                </div>
            </div>

        </div>
    )
}

export default PreviewPost