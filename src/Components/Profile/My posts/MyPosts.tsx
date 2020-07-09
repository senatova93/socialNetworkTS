import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";



export function MyPosts() {
    return (
        <div className={s.item}>my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
               <Post message = 'It is my first post' likesCount = 's'/>
               <Post message = 'Hi, how are you?' likesCount = 'v'/>

            </div>
        </div>)

}

export default MyPosts