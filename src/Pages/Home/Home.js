import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import AnnounceForm from './AnnounceForm';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AnnounceForm></AnnounceForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;