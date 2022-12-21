import { useState, useEffect } from 'react'
import "./index.css"

function PreviewPost({ previewInfo }) {


    return (
        <div className='prev-post'>
            <div className='prev-post_container'>
                <span className='prev-post_cTitle'>
                    {previewInfo.title}
                </span>
                <div className='pre-post_cThumbnail'>
                    Show picture
                </div>
            </div>
            <div className='prev-post_user'>

            </div>

        </div>
    )
}

export default PreviewPost