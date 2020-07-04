import React from 'react'
import style from './CheckLists.module.css'
import CheckListItemContainer from "./CheckListItem/CheckListItemContainer";
import MainToDo from "../ToDoLists/Main/MainToDo";
import {Route} from "react-router-dom";

const CheckLists = (props) => {

    let checkItems = props.lists.map(check => {
        return <CheckListItemContainer key={check.id} id={check.id} name={check.name}/>
    })

    let checkNames = props.lists.map(check => {
        return <Route key={check.id} path={`/${check.name}`} render={() => <MainToDo key={check.id} id={check.id} name={check.name}/>}/>
    })

    return (
        <div className={style.check}>
            {checkNames}
            {checkItems}
        </div>
    )
}

export default CheckLists