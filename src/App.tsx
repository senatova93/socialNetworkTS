import React from 'react';
import './App.css';

function App() {
  return (
 <div className='app-wrapper'>
    <header className='header'>
        <img src = 'https://i.pinimg.com/originals/36/5c/a2/365ca272e06580fbfc49fca845835825.jpg'/>

    </header>
     <nav className='nav'>
         <div><a>Profile</a></div>
         <div><a>Messages</a></div>
         <div><a>News</a></div>
         <div><a>Musics</a></div>
         <div>Settings</div>

     </nav>
     <div className='content'>
         <img src ='https://klike.net/uploads/posts/2019-06/1561182999_17.jpg'/>
     </div>
     <div>ava + discription</div>
     <div>my posts
     <div>new posts</div>
     <div>post1</div>
     <div>post2</div></div>

    </div>
  );
}

export default App;
