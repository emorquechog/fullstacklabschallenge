import React, {useEffect, useState} from "react"
import PropTypes from "prop-types";

const EmptyData = ({message}) => {
    const [messageValue, setMessage] = useState("");
    useEffect(() => {
        setMessage(message)
    }, [message])
    return (
        <div>
            {messageValue}
        </div>
    )
}

EmptyData.propTypes = {
    message: PropTypes.string.isRequired
}

export default EmptyData;