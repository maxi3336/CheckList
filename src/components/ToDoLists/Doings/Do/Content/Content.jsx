import React from 'react'
import style from './Content.module.css'
import DoContent from './ContentKinds/DoContent'
import DoneContent from './ContentKinds/DoneContent'

const Content = (props) => {
    return (
        <div className={style.content}>
            {props.isMarked?<DoneContent doneContent={props.doContent}/>:<DoContent doContent={props.doContent}/>}
        </div>
    )
}

export default Content