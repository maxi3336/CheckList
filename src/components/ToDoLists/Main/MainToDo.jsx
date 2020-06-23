import React from 'react'
import style from './MainToDo.module.css'
import {Link} from "react-router-dom";
import CreateContainer from "../Create/CreateContainer";
import DoingsContainer from "../Doings/DoingsContainer";

const MainToDo = (props) => {
    return <div className={style.main}>
        <Link className={style.close} to='/'/>
        <h1 className={style.title}>{props.name}</h1>
        <CreateContainer id={props.id}/>
        <DoingsContainer id={props.id}/>
    </div>
}

export default MainToDo