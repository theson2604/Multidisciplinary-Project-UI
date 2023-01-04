import { createContext, Fragment } from "react";
import "./index.css"
import PreviewBox from "./preview-box"
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingAnimation from "../Home/loading";
import EditPost from "../../components/Modal/Edit";

function Administration() {

    const [Loading, setLoading] = useState(true)
    const [Data, setData] = useState([])
    const [modal, setModal] = useState(false)
    const [pid, setPid] = useState()

    const fetchData = async () => {
        const response = await axios.get("http://localhost:3000/posts/myPost", 
            {withCredentials: true}
        )
        setData(response)
        setLoading(false)
    }

    useEffect(() => {
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