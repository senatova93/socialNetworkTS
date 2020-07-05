import React from 'react'
import s from './Post.module.css'
type PropsType = {
message:string
}

export function Post(props:PropsType) {
    return (
        <div className={s.item}>
            <img src='data:image/jpeg;base64,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'/>
           <h5>{props.message}</h5>
            <span className={s.like}><img src = "https://s1.iconbird.com/ico/2013/9/452/w512h4481380476860heart.png"/></span>

                </div>
    )

}

export default Post