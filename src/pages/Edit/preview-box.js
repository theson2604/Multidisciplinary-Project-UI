import { useState, useEffect } from 'react'
import * as Icons5 from "react-icons/io5";
import { Navigate, useNavigate } from 'react-router-dom';
import "./index.css"
import PreviewPostAdmin from "./preview-post-admin"
import { Fragment } from "react";
import axios from "axios";

function PreviewBox({ title, Data }) {

    const request = "REQUEST"
    const report = "REPORT"

    return (
        <Fragment>
            <div className="box-admin">
                <h1 className='box-name' >
                    {
                        {
                            0: request,
                            1: report,
                        }[title]
                    }
                </h1>
                {
                    Data.map((prevInfo) => {
                        return prevInfo.type === title ?
                            <PreviewPostAdmin
                                key={prevInfo._id}
                                previewInfo={prevInfo}
                            /> : ""
                    })
                }
            </div>
        </Fragment>
    )
}

export default PreviewBox