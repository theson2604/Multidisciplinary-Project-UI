import "./index.css"
import PreviewPostAdmin from "./preview-post-admin"
import { Fragment } from "react";

function PreviewBox({ Data, setModal, setPid }) {

    return (
        <Fragment>
            <div className="box-admin">
                <h1 className='box-name' >
                    My Posts
                </h1>
                {
                    Data.map((prevInfo) => {
                        return (
                            <PreviewPostAdmin
                                key={prevInfo._id}
                                previewInfo={prevInfo}
                                setModal={setModal}
                                setPid={setPid}
                            /> 
                        )
                    })
                }
            </div>
        </Fragment>
    )
}

export default PreviewBox