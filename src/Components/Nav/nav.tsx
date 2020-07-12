import React from 'react'
import s from './nav.module.css'
import {NavLink} from "react-router-dom";
export function Nav() {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to ='/profile' activeClassName={s.active} >Profile</NavLink></div>
            <div className={s.item}>
                <NavLink to='/dialogs'activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.item}>
                <NavLink to = '/news'activeClassName={s.active}>News</NavLink></div>
            <div className={s.item}>
                <NavLink to = '/music'activeClassName={s.active}>Musics</NavLink></div>
            <div className={s.item}>
                <NavLink to = '/settings'activeClassName={s.active}>Settings </NavLink></div>

        </nav>)

}
export default Nav