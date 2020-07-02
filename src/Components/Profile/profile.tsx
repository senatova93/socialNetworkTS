import React from 'react'
import s from './profile.module.css'
import MyPosts from "./My posts/MyPosts";

export function Profile() {
    return (
        <div className={s.content}>
            <img src ='https://lh3.googleusercontent.com/proxy/yqinNVknJocidBXs5UEMHKlDcw_LEk8WvA0vZgfJZ2khJbljrSFKSIZ_AKruvp8ZzlJAlfq9a7i6bthfsiLHDWnLLiKAqmZNbXAUKi9lsxUdJpB2Hqdc1kDs9SmKg-KXu7ok4H7UOleDuoTX3Yu3VHgRf64JvKrDI2uw31I8cVMHD70kGpE2Vf_-jk3kfvJqmH1VCWYWN2nfn2Yh8g'/>

    <div className={s.item} >ava + discription</div>
    <MyPosts/>
        </div>)

}
export default Profile