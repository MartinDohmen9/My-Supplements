import {React, useState, useContext }from "react";
import "./styles.css";
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({product}) => {
    
    const { addToCart } = useContext(CartContext);

    const {producto, url} = product;
    const [finalizado, setFinalizado] = useState(false)

    const onAdd = (cant) => {
        setFinalizado(true);
        addToCart(product, cant);
        console.log('se agregaron ' + cant);
    }

    return(
        <div className="inlineDetail">
            <div>                
                <img className="itemDetail" src={url} alt={producto}/>
            </div>            
            <div>
                <div className="detalle">
                    <h1 className="menosMargen">{producto}</h1>
                    <br></br>
                    <p className="menosMargen">Detalle del producto</p>
                    <br></br>
                </div>
                <ItemCount product={product} onAdd={onAdd}></ItemCount>
            </div>
        </div>
    )
}

export default ItemDetail;