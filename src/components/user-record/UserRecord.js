
import './UserRecord.scss';
import React from 'react';

// {
//     "player": {
//         "date": "1627596168713",
//         "firstName": "James",
//         "lastName": "King"
//     },
//     "battleRecord": {
//         "total": 0,
//         "won": 0
//     },
//     "_id": "610325acecd4e41978b49af4",
//     "playerId": "0c5311bb-a6f1-4b27-9672-ed2d8a822786",
//     "username": "HotGuy94",
//     "email": "test@test.com",
//     "password": "password",
//     "pokemonParties": [],
//     "__v": 0
// }

function UserRecord({ userData }) {

    const { username, player, battleRecord } = userData;

    return (
        <section className="user-record">
            <div className="user-record__card">
                <header className="user-record__card-header">
                    <h2>Trainer Card</h2>
                </header>
                <div>
                    <div className="user-record__player-info">
                        <div>
                            <p>UserName: {username}</p>
                            <p>First Name: {player.firstName}</p>
                            <p>Last Name: {player.lastName}</p>
                        </div>
                        <div>
                            <img src="#" alt="profile image" />
                        </div>
                    </div>
                    <div>
                        <h3>Battle Record</h3>
                        <div>
                            <p>Wins: {battleRecord.won}</p>
                            <p>Losses: {battleRecord.total - battleRecord.won}</p>
                        </div>
                        <p>Total Matches: {battleRecord.total}</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default UserRecord;