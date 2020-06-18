import React from 'react'
import style from './CheckListItem.module.css'

const CheckListItem = (props) => {

    return (
        <div className={style.checkItem}>
            <div className={style.name}>{props.name}</div>
            <div className={style.delete} onClick={props.dltCheck}/>
        </div>
    )
}

export default CheckListItem