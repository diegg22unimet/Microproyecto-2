import React from 'react';
import styles from './HomePage.module.css';
import clubsData from '../clubs.json';
import ClubCard from './ClubCard';

function HomePage(){
    return (
        <div>
            <header>
                <nav className={styles.navbar}>
                    <ul className={styles.pages}>
                        <li><a href="./login">Sign In</a></li>
                        <li><a href="./signup">Sign Up</a></li>
                        <li>
                            <div className={styles.search_bar}>
                                <input type="text" placeholder="Buscar..." />
                            </div>
                        </li>
                        <li>
                            <button type="submit" className={styles.search_button}></button>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className={styles.clubsContainer}>
                {clubsData.map((club) => (
                    <ClubCard key={club.ID} club={club} />
                ))}
            </div>
        </div>
    )
}
export default HomePage