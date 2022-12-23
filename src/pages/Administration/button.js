import "./index.css"

function Button({ title }) {

    const Approve = "Approve"
    const Decline = "Decline"
    return (
        title ?
            <button className="btn2 btn-border-pop">
                {
                    {
                        0: Approve,
                        1: Decline,
                    }[title]
                }
            </button> :
            <button className="btn btn-border-pop">
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