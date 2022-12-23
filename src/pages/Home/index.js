import { useEffect, useState } from "react";
import { Fragment } from 'react';
import PreviewPost from "./preview-post"
import axios from "axios";
// PHONG TODO
function Home() {

    const [Loading, setLoading] = useState(true)

    const [Data, setData] = useState([])

    const fetchData = async () => {
        const response = await axios.get("http://localhost:3000/posts/preview")
        setData(response)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Fragment>

            <h1>Home</h1>
            {Loading ?
                <div>loading</div>
                :
                Data.data.map((prevInfo) => {
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