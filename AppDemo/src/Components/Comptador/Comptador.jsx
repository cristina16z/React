import { useState, useEffect } from "react";

export function Comptador() {

    //HOOKS 
    const [comp, setComp] = useState(0);
    const [pokemon, setPokemon] = useState("Pendent de carregar informació...");


    useEffect(()=> {

        console.log("Renderitzar component")
        const getPokemon = async function(){

            const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    
            if (!response.ok){
                throw new Error("Pokemon no trobat");
            }
    
            const data = await response.json();

            setPokemon(data.name);
         //   return data.name
    
        }
        getPokemon();

    }, []);



    // JAVASCRIPT

    const inc = function(){
        setComp(comp + 1);
        console.log(comp)
    }

    const dec = function(){
        setComp(comp - 1);
        console.log(comp)
    }

    const res = function(){
        setComp(0);
        console.log(comp)
    }


    return (
        <div className='div-comptador'>Comptador és: {comp}
            <button onClick={() => inc()}>Incrementar</button>
            <button onClick={() => dec()}>Decrementar</button>
            <button onClick={() => res()}>Reiniciar</button>

            <p>Nom {pokemon}</p> 
        </div>
    )  
}
  