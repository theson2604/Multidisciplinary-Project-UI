import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css"

function Button({ title, postId, setHidenPost }) {

    const Approve = "Approve"
    const Decline = "Decline"

    const ApproveHandle = () => {
        // console.log("Approve call API for this" + postId)
        const response = axios.get(`http://localhost:3000/admin/approve?postID=${postId}`)
        setHidenPost(true)
    }

    const DeclineHandle = () => {
        // console.log("Decline call API for this" + postId)
        const response = axios.get(`http://localhost:3000/admin/:${postId}`)
        setHidenPost(true)

    }

    return (
        <button className={`${title ? "btnDecline" : "btnApprove"}`}
            onClick={title ? DeclineHandle : ApproveHandle}
        >
            {
                {
                    0: Approve,
                    1: Decline,
                }[title]
            }
        </button>
    )
}

export default Button