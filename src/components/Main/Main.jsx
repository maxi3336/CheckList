import React from 'react'
import style from './Main.module.css'
import CheckListsContainer from "../CheckLists/CheckListsContainer";

const Main = (props) => {

    let onTextChange = (event) => {
        props.updateText(event.target.value)
    }

    return(
        <main className={style.main}>
            <h1 className={style.name}>CheckList</h1>
            <div className={style.addList}>
                <input className={style.area}
                       placeholder='Name of check list'
                       onChange={onTextChange}
                       value={props.textValue}
                />
                <button className={style.add} onClick={props.addList}>Add</button>
            </div>
            <CheckListsContainer />
        </main>
    )
}

export default Main