import "./index.css"
import { useState } from "react";
import axios from 'axios'

function PreviewPostAdmin({ previewInfo, setModal, setPid }) {
    const [HidenPost, setHidenPost] = useState(false)

    const showUser = () => {
        console.log("Call user for " + previewInfo.authorDetail.lname)
    }

    const showPost = () => {
        setPid(previewInfo._id)
        setModal(true)
        // console.log("Call API for this post: " + previewInfo._id)
    }
    
    const deletePost = () => {
        const response = axios.delete(`http://localhost:3000/posts/${previewInfo._id}`, {withCredentials: true})
        setHidenPost(true)
    }

    const AuthorFullName =
        previewInfo.authorDetail.fname + " " + previewInfo.authorDetail.lname

    const PostTitle = previewInfo.title.length < 70 ?
        previewInfo.title : previewInfo.title.slice(0, 70) + "..."

    return (
        <div className=
            {`hoverBigBlur prev-post-admin 
            ${HidenPost ? "prev-post-admin--hidden" : ""}`
            }>
            <div className='prev-post-admin_container'
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
                    <button
                        className="btnApprove hoverBigBlur"
                        onClick={showPost}
                    >
                        Edit
                    </button>
                    <button
                        className="btnDecline hoverBigBlur"
                        onClick={deletePost}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PreviewPostAdmin