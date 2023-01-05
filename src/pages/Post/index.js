import axios from "axios";
import { useEffect, useState } from "react";
import { Fragment } from 'react';
import { useParams } from "react-router-dom";
import ViewPost from "./view-post";
import LoadingAnimation from '../Home/loading';
function Post() {

    const [Loading, setLoading] = useState(true)

    const { id } = useParams();

    const [Data, setData] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:3000/posts/${id}`, {withCredentials: true})
        const likeAPI = await axios.get(`http://localhost:3000/posts/like?postID=${id}`, {withCredentials: true})
        setData(response);
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])



    return (
        <Fragment>
            {Loading ?
                <LoadingAnimation />
                :
                <ViewPost
                    post={Data.data}
                    id={id}
                />
            }
        </Fragment>
    );
}

export default Post;