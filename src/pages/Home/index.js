import { useEffect, useState } from "react";
import { Fragment } from 'react';
import PreviewPost from "./preview-post"
import axios from "axios";
import LoadingAnimation from './loading';
// PHONG TODO
function Home() {

    const [Loading, setLoading] = useState(true)

    const [Data, setData] = useState([])

    const fetchData = async () => {
        const response = await axios.get("http://localhost:3000/posts/preview", { withCredentials: true })
        setData(response)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Fragment>

            <h2 className="tabTitle">Home</h2>
            {Loading ?
                <LoadingAnimation />
                :
                Data.data.slice(0).reverse().map((prevInfo) => {
                    return <PreviewPost
                        key={prevInfo._id}
                        previewInfo={prevInfo}
                    />
                })
            }

        </Fragment>
    );
}

export default Home;