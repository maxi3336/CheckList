import React from 'react'
import style from './CheckListItem.module.css'
import {NavLink, Route} from "react-router-dom";
import MainToDo from '../../ToDoLists/Main/MainToDo'

const CheckListItem = (props) => {

    return (
        <div className={style.checkItem}>
            <NavLink to={`/${props.name}`} className={style.name} activeClassName={style.active}>{props.name}</NavLink>
            <div className={style.delete} onClick={props.dltCheck}/>
        </div>
    )
}

export default CheckListItem