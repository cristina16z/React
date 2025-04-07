import { useState } from "react";

export function Comptador() {

    //HOOKS 
    const [comp, setComp] = useState(0);


    // JAVASCRIPT
    
    
    //let comp = 0;

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
        </div>
    )  
}
  