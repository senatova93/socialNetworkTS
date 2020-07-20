import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../profile";

type PropsType = {
   posts: Array<PostType>
}

export function MyPosts(props:PropsType) {

    let PostElements = props.posts.map (post => <Post message = {post.message} id={post.id}/>)





    return (

        <div className={s.postBlock}>
            <h3>my posts </h3>
            <div>
                <div> <textarea></textarea></div>
              <div> <button>Add post</button></div>

            </div>


            <div className={s.posts}>
                {PostElements}

            </div>
        </div>)

}

export default MyPosts