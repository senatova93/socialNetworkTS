import React from 'react'
import s from './../Dialogs.module.css'


type AnswerType = {
    name: string
    answer: string,
    id: number
}

const Answer = (props: AnswerType) => {
    return <div className={s.answer}>
        <button>{props.answer} to {props.name}</button>
    </div>
}


export default Answer