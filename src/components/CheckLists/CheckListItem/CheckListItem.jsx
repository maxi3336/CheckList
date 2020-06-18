import React from 'react'
import style from './CheckListItem.module.css'

const CheckListItem = () => {

    //checkItems = CheckListsArray.map((check) => {<CheckListItem />})

    return (
        <div className={style.checkItem}>
            <div className={style.name}>Films</div>
            <div className={style.delete}/>
        </div>
    )
}

export default CheckListItem