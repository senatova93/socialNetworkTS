import React from 'react'
import s from './nav.module.css'
export function Nav() {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}><a>Profile</a></div>
            <div className={s.item}><a>Messages</a></div>
            <div className={s.item}><a>News</a></div>
            <div className={s.item}><a>Musics</a></div>
            <div className={s.item}>Settings</div>

        </nav>)

}
export default Nav