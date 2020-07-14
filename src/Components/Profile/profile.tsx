import React from 'react'
import s from './profile.module.css'
import MyPosts from "./My posts/MyPosts";
import {ProfileInfo} from "./My posts/Post/ProfileInfo";

export function Profile() {
    return (
        <div>
       <ProfileInfo/>
    <MyPosts/>
        </div>
  )

}
export default Profile