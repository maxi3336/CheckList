import React from 'react'
import {updateMarkActionCreator} from "../../../../../redux/reducers/checkReducer";
import UnMarked from "./UnMarked";
import {connect} from "react-redux";

const mapStateToProps = () => {return {}}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        markChange: () => {
            let action = updateMarkActionCreator(ownProps.listId, ownProps.doId, true)
            dispatch(action)
        }
    }
}

const UnMarkedContainer = connect(mapStateToProps, mapDispatchToProps)(UnMarked)


export default UnMarkedContainer