import Card from "../Card";
import { useClubs } from "../hooks/api"

export default function ClubsPage(){
    const clubs = useClubs();

    return (

        <div>

            {clubs.isLoading && <div>Se estan cargando los clubes </div>}

            {clubs.isLoading ? (

                <div> Cargando....</div>

            ):(

                clubs.data.map(({title,description,games}) =>(
                    <Card key={title} name={title} description={description} games={games}/>


                ))
            )}


        </div>
    )
}