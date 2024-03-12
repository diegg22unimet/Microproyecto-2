import styles from "./Card.module.css"

export default function Card({name,description,games}){
    return (
        <div className = {styles.card}>
            <div className = {styles.title}> {name} </div>
            <div className = {styles.description}> {description} </div>
            <div className = {styles.games}> {games} </div>

        </div>
    )
}