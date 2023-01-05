import { Fragment } from "react";
import "./index.css"
import PreviewBox from "./preview-box"
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingAnimation from "../Home/loading";
import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

function Administration() {
    const { auth, setAuth } = useAuth()

    const navigate = useNavigate()

    const [Loading, setLoading] = useState(true)

    const [Data, setData] = useState([])

    if (JSON.stringify(auth) === '{}') navigate('/login')

    const fetchData = async () => {
        const response = await axios.get("http://localhost:3000/admin/preview", { withCredentials: true })
        setData(response)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Fragment>
            <h1>
                Administration
            </h1>
            <div className="frame">
                {Loading ?
                    <LoadingAnimation />
                    :
                    <Fragment>
                        <PreviewBox
                            title={0}
                            Data={Data.data}
                        />

                        <PreviewBox
                            title={1}
                            Data={Data.data}
                        />
                    </Fragment>
                }
            </div>
        </Fragment>
    );
}

export default Administration;