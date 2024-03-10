import styles from "./Card.module.css"

export default function Card({title,description,games}){
    return (
        <div className = {styles.card}>
            <div className = {styles.title}> {title} </div>
            <div className = {styles.description}> {description} </div>
            <div className = {styles.games}> {games} </div>

        </div>
    )
}