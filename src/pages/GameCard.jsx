import React from 'react';
import styles from './GamesPage.module.css';

const GameCard = ({ game }) => {
    return (
        <div className={styles.gameContainer}>
            <div className={styles.gameCard}>
                <h2 id={game.ID}>{game.titulo}</h2>
                <h4>Género: {game.genero}</h4>
                <p>{game.descripcion}</p>
            </div>
        </div>
    );
};

export default GameCard;