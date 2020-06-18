import React from 'react'
import Main from "./Main";
import {connect} from "react-redux";
import {addListActionCreator, updateTextActionCreator} from "../../redux/reducers/checkReducer";

const mapStateToProps = (state) => {
    return {
        textValue: state.checkPage.newText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addList: (name) => {
            let action = addListActionCreator()
            dispatch(action)
        },

        updateText: (text) => {
            let action = updateTextActionCreator(text)
            dispatch(action)
        }
    }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainContainer