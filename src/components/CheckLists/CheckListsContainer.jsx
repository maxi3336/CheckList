import React from 'react'
import {connect} from "react-redux";
import CheckLists from "./CheckLists";

const mapStateToProps = (state) => {
    return ({
        lists: state.checkPage.lists
    })
}

const CheckListsContainer = connect(mapStateToProps)(CheckLists)

export default CheckListsContainer