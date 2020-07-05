import React from 'react'
import s from './profile.module.css'
import MyPosts from "./My posts/MyPosts";

export function Profile() {
    return (
        <div className={s.content}>
            <img src ='https://www.rgo.ru/sites/default/files/styles/full_view/public/umpyr-582.jpg?itok=FMZhVUpM'/>
    <div className={s.item} >ava + discription</div>
    <MyPosts/>
        </div>)

}
export default Profile