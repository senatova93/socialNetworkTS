import React from 'react'
import s from './ProfileInfo.module.css'


export function ProfileInfo() {

    return (
        <div className={s.content}>
            <img src ='https://www.rgo.ru/sites/default/files/styles/full_view/public/umpyr-582.jpg?itok=FMZhVUpM'/>
            <div className={s.discriptionBlock}>

               Hello, world) It's my page</div>
            </div>
    )

}

export default ProfileInfo