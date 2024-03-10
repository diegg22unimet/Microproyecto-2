import Card from "../Card";
import  { useClubs } from "../hooks/api";





export default function Cardpage(){
    const clubs = useClubs();


    return(
        

        
        clubs.data.map(({title,description,games}) => (
            <Card key={title} title = {title} description = {description} games = {games}></Card>

        ))
        
    )

}