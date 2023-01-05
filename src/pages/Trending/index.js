import { useEffect, useState } from "react";
import { Fragment } from 'react';
import PreviewTrend from "../Home/preview-post"
import axios from "axios";
import LoadingAnimation from '../Home/loading';
import * as Icons5 from "react-icons/io5";
import "./index.css"
import useAuth from '../../hooks/useAuth';
import { color } from "@mui/system";

function Trending() {
    const [Loading, setLoading] = useState(true)

    const { auth, setAuth } = useAuth()

    const [DataLike, setDataLike] = useState([])
    const [DataTrend, setDataTrend] = useState([])

    const fetchData = async () => {
        const responseLike = await axios.get("http://localhost:3000/posts/topLike", { withCredentials: true })
        const responseTrending = await axios.get("http://localhost:3000/posts/trending", { withCredentials: true })
        setDataLike(responseLike)
        setDataTrend(responseTrending)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <Fragment>

            <h2 className="tabTitle">
                Top view
                <Icons5.IoEyeSharp
                    className='title_uIcon'
                />
            </h2>
            <div className="wrapper snap-inline">

                {Loading ?
                    <LoadingAnimation />
                    :
                    DataTrend.data.map((prevInfo) => {
                        return <PreviewTrend
                            key={prevInfo._id}
                            previewInfo={prevInfo}
                        />
                    })
                }
            </div>
            {/* ----------------------------------------------------------- */}
            <h2 className="tabTitle">
                Top Liked
                <Icons5.IoHeart
                    className='title_uIcon'

                />
            </h2>

            <div className="wrapper snap-inline">

                {Loading ?
                    <LoadingAnimation />
                    :
                    DataLike.data.map((prevInfo) => {
                        return <PreviewTrend
                            key={prevInfo._id}
                            previewInfo={prevInfo}
                        />
                    })
                }
            </div>

        </Fragment>
    );
}

export default Trending;