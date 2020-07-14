import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";



export function MyPosts() {
    return (

        <div className={s.postBlock}>
            <h3>my posts </h3>
            <div>
                <div> <textarea></textarea></div>
              <div> <button>Add post</button></div>

            </div>


            <div className={s.posts}>
               <Post message = 'It is my first post' likesCount = 's'/>
               <Post message = 'Hi, how are you?' likesCount = 'v'/>

            </div>
        </div>)

}

export default MyPosts