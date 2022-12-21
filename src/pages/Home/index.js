import { useEffect, useState } from "react";
import PreviewPost from "./preview-post"
import axios from "axios";
// PHONG TODO
function Home() {

    const [Data, setData] = useState([])

    const fetchData = async () => {
        const response = await axios.get("http://localhost:3000/posts/preview")
        setData(response)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h1>Home</h1>
            {Data.data.map((prevInfo) => {
                return <PreviewPost
                    key={prevInfo._id}
                    previewInfo={prevInfo}
                />
            })}
        </div>
    );
}

export default Home;