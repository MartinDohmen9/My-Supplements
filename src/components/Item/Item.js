import {React}from "react";
import "./styles.css";
import {Link} from 'react-router-dom'

const Item = ({product}) => {

    const {producto, url, id, precio} = product;

    return(

        <div className="inline">
            <div>
                <Link to={`/product/${product.id}`} key={id}>
                    <div>
                        <img className="item" src={url} alt={producto}/>
                    </div>
                </Link>
            </div>
            <div className="detalle">
                <h2>{producto}</h2>
                <h3>${precio}</h3>
                <p></p>
            </div>
            <div>
                
            </div>
            
        </div>
    )
}

export default Item;