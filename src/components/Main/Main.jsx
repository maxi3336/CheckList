import React from 'react'
import style from './Main.module.css'
import CheckListsContainer from "../CheckLists/CheckListsContainer";

const Main = (props) => {

    let onTextChange = (event) => {
        props.updateText(event.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            props.addList()
        }
    }

    return(
        <main>
            <h1 className={style.name}>CheckList</h1>
            <div className={style.main}>
                <div className={style.addList}>
                    <input className={style.area}
                           placeholder='Name of check list'
                           onChange={onTextChange}
                           value={props.textValue}
                           onKeyDown={handleKeyDown}
                    />
                    <button className={style.add} onClick={props.addList}>Add</button>
                </div>
                <CheckListsContainer />
            </div>
        </main>
    )
}

export default Main