import React from 'react'
import style from './Main.module.css'
import CheckLists from "../CheckLists/CheckLists";

const Main = () => {
    const addChecklist = () => {
        console.log('addChecklist')
    }

    return(
        <main className={style.main}>
            <h1 className={style.name}>CheckList</h1>
            <div className={style.add} onClick={addChecklist}/>
            <CheckLists />
        </main>
    )
}

export default Main