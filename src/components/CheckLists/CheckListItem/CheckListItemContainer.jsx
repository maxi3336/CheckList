import React from 'react'
import {connect} from "react-redux";
import CheckListItem from "./CheckListItem";
import {deleteListActionCreator} from "../../../redux/reducers/checkReducer";

const mapStateToProps = (state, ownProps) => {
    return {
        name: ownProps.name
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dltCheck: () => {
            let action = deleteListActionCreator(ownProps.id)
            dispatch(action)
        }
    }
}

const CheckListItemContainer = connect(mapStateToProps, mapDispatchToProps)(CheckListItem)

export default CheckListItemContainer