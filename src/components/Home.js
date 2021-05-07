import React from 'react';
import Header from './layouts/Header'
import Main from './layouts/Main'
import Modal from './layouts/Modal'
//import '../assets/css/modal';

const Home = ()=> {
    return(
        <div>
            <Header></Header>
            <Main />
            <Modal />
        </div>
    )
}

export default Home