import './Home.scss';
import React from 'react';
import Card from '../../components/card/Card';

function HomePage() {
    return (
        <main className="home">
            <h1 className="heading__main">PokeStadium</h1>
            <Card>
                <p>Welcome to my site</p>
            </Card>
        </main>
    );
}

export default HomePage;