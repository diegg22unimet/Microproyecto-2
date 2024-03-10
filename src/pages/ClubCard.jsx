import React from 'react';
import styles from './HomePage.module.css';

const ClubCard = ({ club }) => {
  return (
    <div className={styles.container}>
        <div className={styles.clubCard}>
            <h2>{club.nombre}</h2>
            <p>{club.descripcion}</p>
            <h4>Videojuegos:</h4>
            <ul>
                {club.videojuegos.map((videojuegoId) => (
                <li key={videojuegoId}>{videojuegoId}</li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default ClubCard;