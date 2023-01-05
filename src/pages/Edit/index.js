import { createContext, Fragment } from "react";
import "./index.css"
import PreviewBox from "./preview-box"
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "../Home/loading";
import EditPost from "../../components/Modal/Edit";
import useAuth from "../../hooks/useAuth";

function Administration() {

    const [Loading, setLoading] = useState(true)
    const [Data, setData] = useState([])
    const [modal, setModal] = useState(false)
    const [pid, setPid] = useState()
    const {auth} = useAuth()
    const navigate = useNavigate()

    const fetchData = async () => {
        const response = await axios.get("http://localhost:3000/posts/myPost", 
            {withCredentials: true}
        )
        setData(response)
        setLoading(false)
    }

    useEffect(() => {
        if (JSON.stringify(auth) === {}) navigate('/login')
        fetchData()
    }, [])

    return (
        <Fragment>
            <EditPost modal={modal} setModal={setModal} pid={pid} />
            <div className="frame">
                {Loading ?
                    <LoadingAnimation />
                    :
                    <PreviewBox Data={Data.data} setModal={setModal} setPid={setPid} />
                }
            </div>
        </Fragment>
    );
}

export default Administration;