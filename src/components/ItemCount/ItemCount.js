import { Button } from "@mui/material";
import {React, useState }from "react";
import "./styles.css";

const ItemCount = ({product, onAdd}) => {

    const [contador, setContador] = useState(0);
    
    const count = (value) => {
        const result = contador + value;
        if(result<=stock && result >= 0){
            setContador(contador + value)
        };
    };

    const {stock} = product

    return(
        <div>
            
            <div className="container">

                <Button sx={{m: 1, p: 1}} style={{backgroundColor: "#696969"}} variant="contained" className="btn" onClick={() => count(-1)}>-</Button>
                <h1 className="contador">{contador} | {stock}</h1>
                <Button sx={{m: 1, p: 1}} style={{backgroundColor: "#696969"}} variant="contained" className="btn" onClick={() => count(+1)}>+</Button>
                <Button sx={{m: 1, p: 1}} style={{backgroundColor: "#696969"}} variant="contained" className="btn-agregar" onClick={() => {onAdd(contador); setContador(0)}}>Agregar item</Button>

            </div>

        </div>
    )
}

export default ItemCount;