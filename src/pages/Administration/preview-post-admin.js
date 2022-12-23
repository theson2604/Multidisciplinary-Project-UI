import "./index.css"
import Button from "./button"
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from "react";

function PreviewPostAdmin({ previewInfo }) {

    const [HidenPost, setHidenPost] = useState(false)

    const navigate = useNavigate()

    const showUser = () => {
        console.log("Call user for " + previewInfo.authorDetail.lname)
    }

    const showPost = () => {
        navigate("/post/" + previewInfo._id)
        console.log("Call API for this post: " + previewInfo._id)
    }

    const AuthorFullName =
        previewInfo.authorDetail.fname + " " + previewInfo.authorDetail.lname

    const PostTitle = previewInfo.title.length < 70 ?
        previewInfo.title : previewInfo.title.slice(0, 70) + "..."

    return (
        <div className=
            {`prev-post-admin 
            ${HidenPost ? "prev-post-admin--hidden" : ""}`
            }>
            <div className='prev-post-admin_container'
                onClick={showPost}
            >
                {PostTitle}
            </div>
            <div className="user-and-btn-box">

                <div className='user-post'
                    onClick={showUser}
                >
                    <img
                        className='prev-post_uAvatar'
                        src={previewInfo.authorDetail.avatar}
                        alt='Post image' />
                    {AuthorFullName}
                </div>
                <div className='administration-container'>
                    <Button
                        title={0}
                        postId={previewInfo._id}
                        setHidenPost={setHidenPost}
                    />
                    <Button
                        title={1}
                        postId={previewInfo._id}
                        setHidenPost={setHidenPost}
                    />
                </div>
            </div>
        </div>
    )
}

export default PreviewPostAdmin