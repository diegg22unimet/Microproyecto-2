import React from 'react';
import styles from './HomePage.module.css';
import clubsData from '../clubs.json';
import ClubCard from './ClubCard';

function HomePage(){
    return (
        <div>
            <div className={styles.navbar}>
                <nav>
                    <div className={styles.pages}>
                        <a href="./login">Sign In</a>
                        <a href="./signup">Sign Up</a>
                    </div>
                </nav>
            </div>
            <div className={styles.clubsContainer}>
                {clubsData.map((club) => (
                    <ClubCard key={club.ID} club={club} />
                ))}
            </div>
        </div>
    )
}
export default HomePage