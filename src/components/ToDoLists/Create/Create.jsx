import React from 'react'
import style from './Create.module.css'

const Create = (props) => {
    const onDoChange = (event) => {
        let text = event.target.value
        props.updateNewDoText(text)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            props.addDo()
        }
    }

    return (
        <div className={style.create}>
            <input
                className={style.textEnter}
                placeholder="Write what you need to do"
                onChange={onDoChange}
                value={props.newDoText}
                onKeyDown={handleKeyDown}
            />
            <button className={style.btn} onClick={props.addDo}>Add</button>
        </div>
    )
}

export default Create