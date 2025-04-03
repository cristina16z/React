import './Cart.css'

export function Cart(props) {

    
    const name = props.name;
    const preu = props.preu;
    const desc = props.desc;

    const preuIva = function(preu){
        return (preu * 1.21).toFixed(2);
    }

    return (
        <div className='div-producte'>
            <h1>{name}</h1>
            <h3>Preu: {preuIva(preu)}€</h3>
            <p>{desc}</p>
        </div>
    )  
}
  