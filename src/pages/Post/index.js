import axios from "axios";
import { useEffect, useState } from "react";
import { Fragment } from 'react';
import { useParams } from "react-router-dom";
import ViewPost from "./view-post";
import LoadingAnimation from '../Home/loading';
import * as Icons5 from "react-icons/io5";

function Post() {
    
    const [Loading, setLoading] = useState(true)

    const { id } = useParams();

    const [Data, setData] = useState([]);
    
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:3000/posts/${id}`)
        setData(response);
        setLoading(false)
    }
    
    useEffect(() => {
        fetchData()
    }, [])

   

    return (
        <Fragment>
        {Loading ?
            <LoadingAnimation />
            :
            <ViewPost
                post={Data.data}
            />
            // <div className='post_layout' >
            //     <div className="title"> {Data.data.title} </div>
            //     <div className="img"> <img src={Data.data.img} /> </div>
            //     <div className="like-view">
                    
            //         <button className="icon">
            //             <Icons5.IoEyeSharp className='prev-post_uIcon'
            //                 style={{ color: "#0000ffa6" }}
            //             />
            //         </button>
            //         <button
            //             className='centerBtn'
            //             onClick={HandleLiked}
            //         >
            //             {ViewIcon}
            //             {Data.data.like}
            //         </button>
            //     </div>
            //     <div className="content">{Data.data.content} </div>
            // </div>
        }
        </Fragment>
    );
}

export default Post;