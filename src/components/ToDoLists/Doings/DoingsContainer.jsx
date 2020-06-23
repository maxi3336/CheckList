import React from 'react'
import {connect} from "react-redux";
import Doings from "./Doings";
import Do from "./Do/Do";

let findIdOfList = (state, id) => {
    let listId
    for(let i = 0; i < state.checkPage.lists.length; i++) {
        if(state.checkPage.lists[i].id === id)
            listId = i
    }
    return listId
}


const mapStateToProps = (state, ownProps) => {

    let id = findIdOfList(state, ownProps.id)

    return {
        doData: state.checkPage.lists[id].paragraph.map(doData => <Do key={doData.id} listId={ownProps.id} doId={doData.id} doContent={doData.name} isMarked={doData.mark}/>)
    }
}


const DoingsContainer = connect(mapStateToProps)(Doings)

export default DoingsContainer