import './Home.scss';
import React from 'react';
import PokeballLoading from '../../components/loading-pokeball/PokeballLoading';
import Card from '../../components/card/Card';

function HomePage() {
    return (
        <main className="home">
            HOME PAGE
            <Card>
                <p>Hello</p>
            </Card>
        </main>
    );
}

export default HomePage;