import React from "react";
import {Button} from "./Button";
import PropTypes from 'prop-types'

export const ButtonRow = props => {
    return (
        <div className="row">
            <Button id={`${props.rowNumber}_1`}/>
            <Button id={`${props.rowNumber}_2`}/>
            <Button id={`${props.rowNumber}_3`}/>
            <Button id={`${props.rowNumber}_4`}/>
            <Button id={`${props.rowNumber}_5`}/>
            <Button id={`${props.rowNumber}_6`}/>
            <Button id={`${props.rowNumber}_7`}/>
            <Button id={`${props.rowNumber}_8`}/>
            <Button id={`${props.rowNumber}_9`}/>
            <Button id={`${props.rowNumber}_10`}/>
            <Button id={`${props.rowNumber}_11`}/>
            <Button id={`${props.rowNumber}_12`}/>
            <Button id={`${props.rowNumber}_13`}/>
            <Button id={`${props.rowNumber}_14`}/>
            <Button id={`${props.rowNumber}_15`}/>
            <Button id={`${props.rowNumber}_16`}/>
            <Button id={`${props.rowNumber}_17`}/>
            <Button id={`${props.rowNumber}_18`}/>
            <Button id={`${props.rowNumber}_19`}/>
            <Button id={`${props.rowNumber}_20`}/>
        </div>
    )
}

ButtonRow.propTypes = {
    rowNumber: PropTypes.number
}