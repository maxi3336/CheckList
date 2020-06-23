import React from 'react'
import Create from './Create'
import {addDoActionCreator, updateDoTextActionCreator} from '../../../redux/reducers/checkReducer';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {newDoText: state.checkPage.newDoText}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateNewDoText: (text) => {
            let action = updateDoTextActionCreator(text)
            dispatch(action)
        },

        addDo: () => {
            let action = addDoActionCreator(ownProps.id)
            dispatch(action)
        }
    }
}

const CreateContainer = connect(mapStateToProps, mapDispatchToProps)(Create)

export default CreateContainer