import React from 'react'
import style from './CheckLists.module.css'
import CheckListItem from "./CheckListItem/CheckListItem";

const CheckLists = () => {

    //checkItems = CheckListsArray.map((check) => {<CheckListItem />})

    return (
        <div className={style.check}>
            {/*checkItems*/}
            <CheckListItem />
            <CheckListItem />
            <CheckListItem />
            <CheckListItem />
            <CheckListItem />
        </div>
    )
}

export default CheckLists