import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'

type DialogType = {
    name: string,
    id: number
}
type MessageType = {
    message: string,
    id: number
}
type AnswerType = {
    name: string
    answer: string,
    id: number
}
const Dialog = (props: DialogType) => {
    return <div className={`${s.dialog} ${s.active}`}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}
const Message = (props: MessageType) => {
    return <div className={s.message}> {props.message}</div>
}
const Answer = (props: AnswerType) => {
    return <div className={s.answer}>
        <button>{props.answer} to {props.name}</button>
    </div>
}

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <Dialog name={"Nanni"} id={1}/>
                <Dialog name={"Ari-Nari"} id={2}/>
                <Dialog name={"Misha"} id={3}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi, how are you??? '} id={1}/>
                <Message message={'Good day'} id={1}/>
                <Message message={'I have panic attack'} id={1}/>
            </div>
            {/*<div className={s.textareas}>*/}
            {/*    <div className={s.textarea}> <textarea></textarea> </div>*/}
            {/*    <div className={s.textarea}> <textarea></textarea> </div>*/}
            {/*    <div className={s.textarea}> <textarea></textarea> </div>*/}

            {/*</div>*/}

            <div className={s.answers}>
                <Answer name={'Nanni'} answer={'Answer'} id={1}/>
                <Answer name={"Ari-Nari"} answer={'Answer'} id={2}/>
                <Answer name={"Misha"} answer={'Answer'} id={3}/>
            </div>
        </div>)

}

export default Dialogs