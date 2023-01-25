import React, {memo} from "react"

const PureFunction = () => {
    return (
        <div>
            Pure Function
        </div>
    )
}

export default memo(PureFunction);