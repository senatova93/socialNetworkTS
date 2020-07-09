import React from 'react';
import './App.css';
import Header from "./Components/Header/header";
import Nav from "./Components/Nav/nav";
import Profile from "./Components/Profile/profile";
import Dialogs from "./Components/Dialogs/Dialogs";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='appWrapperContent'>
                {/*<Profile/>*/}
                <Dialogs/>
            </div>
        </div>
    );
}

export default App;
