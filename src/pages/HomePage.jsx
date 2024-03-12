import React, { useState } from 'react';
import styles from './HomePage.module.css';
import clubsData from '../clubs.json';
import ClubCard from './ClubCard';
import gamesData from '../videogames.json'




function HomePage(){
    const [searchTerm, setSearchTerm] = useState('');
    const [showResults, setShowResults] = useState(false);

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        if (term.trim() !== '') {
            setShowResults(true);
        } else {
            setShowResults(false);
        }
    };

    const filteredGames = gamesData.filter(game =>
        game.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <header>
                <nav className={styles.navbar}>
                    <ul className={styles.pages}>
                        <li><a href="./login" className={styles.nav_links}>Sign In</a></li>
                        <li><a href="./" className={styles.nav_links}>Sign Up</a></li>
                        <li>
                            <div className={styles.search_bar}>
                                <input type="text" placeholder="Buscar..." value={searchTerm} onChange={handleSearch} />
                                {showResults && (
                                <div className={styles.search_results}>
                                    <ul>
                                        {filteredGames.map(game => (
                                            <li key={game.ID}><a href={`./games#${game.ID}`}>{game.titulo}</a></li>
                                        ))}
                                    </ul>
                                </div>
                                )}
                            </div>
                        </li>
                        <li><a href="./profile" className={styles.nav_links}>Profile</a></li>
                    </ul>
                </nav>
            </header>
            <h1 className={styles.title}>Lista de clubes</h1>
            <div className={styles.clubsContainer}>
                {clubsData.map((club) => (
                    <ClubCard key={club.ID} club={club} />
                ))}
            </div>
        </div>
    )
}
export default HomePage