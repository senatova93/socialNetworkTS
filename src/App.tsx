import React from 'react';
import './App.css';
import Header from "./Components/Header/header";
import Nav from "./Components/Nav/nav";
import Profile from "./Components/Profile/profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";


function App() {
    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                <Header/>
                <Nav/>
                <div className='appWrapperContent'>

                    <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>

                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
