import "./index.css"
import Button from "./button"

function PreviewPostAdmin({ previewInfo }) {

    const AuthorFullName =
        previewInfo.authorDetail.fname + " " + previewInfo.authorDetail.lname

    const PostTitle = previewInfo.title.length < 70 ?
        previewInfo.title : previewInfo.title.slice(0, 70) + "..."

    return (
        <div className='prev-post-admin' >
            <div className='prev-post-admin_container '>
                {PostTitle}
            </div>
            <div className="user-and-btn-box">

                <div className='user-post'>
                    <img
                        className='prev-post_uAvatar'
                        src={previewInfo.authorDetail.avatar}
                        alt='Post image' />
                    {AuthorFullName}
                </div>
                <div className='administration-container'>
                    <Button title={0} />
                    <Button title={1} />
                </div>
            </div>
        </div>
    )
}

export default PreviewPostAdmin