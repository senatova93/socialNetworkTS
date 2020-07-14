import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to={'/dialogs/1'}>Nanni</NavLink>


                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Ari-nari</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Misha</NavLink>
                </div>


            </div>
            <div className={s.messages}>
                <div className={s.message}> Hi, how are you</div>
                <div className={s.message}> Good day)</div>
                <div className={s.message}> I have panic attack</div>

            </div>
            {/*<div className={s.textareas}>*/}
            {/*    <div className={s.textarea}> <textarea></textarea> </div>*/}
            {/*    <div className={s.textarea}> <textarea></textarea> </div>*/}
            {/*    <div className={s.textarea}> <textarea></textarea> </div>*/}

            {/*</div>*/}

            <div className={s.answers}>
                <div className={s.answer}>
                    <button>Answer</button>
                </div>
                <div className={s.answer}>
                    <button>Answer</button>
                </div>
                <div className={s.answer}>
                    <button>Answer</button>
                </div>
            </div>

        </div>)

}

export default Dialogs