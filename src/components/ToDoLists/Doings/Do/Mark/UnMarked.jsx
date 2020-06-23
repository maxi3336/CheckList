import React from 'react'
import style from './Mark.module.css'

const UnMarked = (props) => {

    return (
        <div className={style.mark} onClick={props.markChange}/>
    )
}

export default UnMarked