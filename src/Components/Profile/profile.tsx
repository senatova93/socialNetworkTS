import React from 'react'
import s from './profile.module.css'
import MyPosts from "./My posts/MyPosts";
import {ProfileInfo} from "./My posts/Post/ProfileInfo";

export type PostType = {
    id: number
    message: string
}

export function Profile() {
    let posts: Array<PostType> = [
        {id:1 ,message:"It is my first post" },
        {id:2 ,message:'Hi, how are you?'}

    ]

    return (
        <div>
       <ProfileInfo/>
<MyPosts posts={posts}/>
        </div>
  )

}
export default Profile