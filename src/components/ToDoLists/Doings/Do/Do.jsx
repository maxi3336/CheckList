import React from 'react'
import style from './Do.module.css'
import Content from "./Content/Content";
import MarkedContainer from "./Mark/MarkedContainer";
import UnMarkedContainer from "./Mark/UnMarkedContainer";
import DeleteContainer from "./Delete/DeleteContainer";

const Do = (props) => {

    return (
        <div className={style.do}>
            {props.isMarked?<MarkedContainer listId={props.listId} doId={props.doId}/>:<UnMarkedContainer listId={props.listId} doId={props.doId}/>}
            <Content doContent={props.doContent} isMarked={props.isMarked}/>
            <DeleteContainer listId={props.listId} doId={props.doId}/>
        </div>
    )
}

export default Do
