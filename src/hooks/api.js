import { useEffect, useState } from "react";
import { getClubs } from "../controllers/clubs";

export function useClubs(){
    const [data, setData] = useState(null)

    useEffect(() =>{
        async function cargarDatos(){

            const clubes = await getClubs();
            setData(clubes);
        }


        cargarDatos();

    });

    const isLoading = data === null;
    return{data,isLoading};

}