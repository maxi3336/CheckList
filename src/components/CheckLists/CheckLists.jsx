import React from 'react'
import style from './CheckLists.module.css'
import CheckListItemContainer from "./CheckListItem/CheckListItemContainer";
import MainToDo from "../ToDoLists/Main/MainToDo";
import {Route} from "react-router-dom";

const CheckLists = (props) => {

    let checkItems = props.lists.map(check => {
        return <CheckListItemContainer id={check.id} name={check.name}/>
    })

    let checkNames = props.lists.map(check => {
        return <Route path={`/${check.name}`} render={() => <MainToDo id={check.id} name={check.name}/>}/>
    })

    return (
        <div className={style.check}>
            {checkNames}
            {checkItems}
        </div>
    )
}

export default CheckLists