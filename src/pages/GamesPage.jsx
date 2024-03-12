import styles from './GamesPage.module.css'
import gamesData from '../videogames.json'
//import GameCard from './GameCard'

function GamesPage() {
    return (
        <div>
            <header>
                <nav className={styles.navbar}>
                    <ul className={styles.pages}>
                        <li><a href="./home">Home</a></li>
                        <li><a href="./login">Sign In</a></li>
                        <li><a href="./signup">Sign Up</a></li>
                    </ul>
                </nav>
            </header>
            
        </div>
    )
}

export default GamesPage