import React from 'react';
import ModalEdit from './layouts/EditModal';
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
            <ModalEdit />
        </div>
    )
}

export default Home