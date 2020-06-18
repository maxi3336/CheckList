import React from 'react'
import style from './CheckLists.module.css'
import CheckListItemContainer from "./CheckListItem/CheckListItemContainer";

const CheckLists = (props) => {

    let checkItems = props.lists.map(check => <CheckListItemContainer id={check.id} name={check.name}/>)

    return (
        <div className={style.check}>
            {checkItems}
        </div>
    )
}

export default CheckLists