import React from "react";
import {Button} from "./Button";
import PropTypes from 'prop-types'

export const ButtonRow = props => {
    return (
        <div className="row">
            <Button id={`${props.rowNumber}_1`} color={props.color}/>
            <Button id={`${props.rowNumber}_2`} color={props.color}/>
            <Button id={`${props.rowNumber}_3`} color={props.color}/>
            <Button id={`${props.rowNumber}_4`} color={props.color}/>
            <Button id={`${props.rowNumber}_5`} color={props.color}/>
            <Button id={`${props.rowNumber}_6`} color={props.color}/>
            <Button id={`${props.rowNumber}_7`} color={props.color}/>
            <Button id={`${props.rowNumber}_8`} color={props.color}/>
            <Button id={`${props.rowNumber}_9`} color={props.color}/>
            <Button id={`${props.rowNumber}_10`} color={props.color}/>
            <Button id={`${props.rowNumber}_11`} color={props.color}/>
            <Button id={`${props.rowNumber}_12`} color={props.color}/>
            <Button id={`${props.rowNumber}_13`} color={props.color}/>
            <Button id={`${props.rowNumber}_14`} color={props.color}/>
            <Button id={`${props.rowNumber}_15`} color={props.color}/>
            <Button id={`${props.rowNumber}_16`} color={props.color}/>
            <Button id={`${props.rowNumber}_17`} color={props.color}/>
            <Button id={`${props.rowNumber}_18`} color={props.color}/>
            <Button id={`${props.rowNumber}_19`} color={props.color}/>
            <Button id={`${props.rowNumber}_20`} color={props.color}/>
        </div>
    )
}

ButtonRow.propTypes = {
    rowNumber: PropTypes.number,
    color: PropTypes.string
}