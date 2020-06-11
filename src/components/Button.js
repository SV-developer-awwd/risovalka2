import React, {useState} from "react";
import PropTypes from 'prop-types'

export const Button = props => {
    const [clicked, setClicked] = useState(false)

    return (
        <button id={props.id} onClick={() => {
            !clicked
                ?
                document.getElementById(props.id).style.backgroundColor = props.color
                :
                document.getElementById(props.id).style.backgroundColor = "#fff"
            setClicked(!clicked)
        }}></button>
    )
}

Button.propTypes = {
    id: PropTypes.string,
    color: PropTypes.string
}