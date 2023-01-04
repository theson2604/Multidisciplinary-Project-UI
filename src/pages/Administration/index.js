import { Fragment } from "react";
import "./index.css"
import PreviewBox from "./preview-box"
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingAnimation from "../Home/loading";

function Administration() {

    const [Loading, setLoading] = useState(true)
    const [Data, setData] = useState([])

    const fetchData = async () => {
        const response = await axios.get("http://localhost:3000/admin/preview", {withCredentials: true})
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