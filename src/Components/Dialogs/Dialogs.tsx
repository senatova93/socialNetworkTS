import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import Message from './Message/Message'
import DialogItem from "./DialogItem/DialogItem";
import Answer from "./Answers/Answers";

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


export function Dialogs() {
    let DialogData = [
        {id: 1, name: "Nanii"},
        {id: 2, name: "Ari-Nari"},
        {id: 3, name: "Misha"}
    ]
    let DialogsElements = DialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let MessageData = [
        {id: 1, message: "Hi, how are you???"},
        {id: 2, message: 'Good day'},
        {id: 3, message: 'I have panic attack'}
    ]
    let MessageElements = MessageData.map(message => <Message message={message.message} id={message.id}/>)
    let AnswerData = [
        {id: 1, name: "Nanni", answer: 'Answer'},
        {id: 2, name: 'Ari-nari', answer: 'Answer'},
        {id: 3, name: 'Misha', answer: 'Answer'}
    ]
    let AnswerElements = AnswerData.map(answer => <Answer name={answer.name} id={answer.id} answer={answer.answer}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                {MessageElements}
            </div>

            <div className={s.answers}>
                {AnswerElements}

            </div>
        </div>)

}

export default Dialogs