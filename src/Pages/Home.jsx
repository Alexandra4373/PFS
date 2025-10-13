import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import '../styles/main.css';

function Home () {
    return (
        <div className="homepage">
            <Header />
            <main>
                <ProductList />
            </main>
            <Footer />
        </div>
    );
};

export default Home;