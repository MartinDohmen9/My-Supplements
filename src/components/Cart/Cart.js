import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { Link } from 'react-router-dom';
import { Button, TextField, MuiThemeProvider } from '@mui/material';
import { UserAuth } from "../../context/AuthContext";

const Cart = () => {
    const { cart, deleteItem, calcularTotal, terminarCompra } = useContext(CartContext);

    const {user} = UserAuth();
    const [addres, setAddres] = useState("");

    const agregarVenta = () => {
        const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection, {
            items: cart,
            total: calcularTotal(),
            date: serverTimestamp(),
            cliente: user?.displayName,
            email: user?.email,
            direccion: addres
        });
        console.log(user)
    }

    if (cart.length === 0) {
        return <h2>Está vacío tu carrito, andá a comprar</h2>;
    }

    return (
        <div>
            <div>
                {cart.map((prod) => (
                    <div
                        key={prod.id}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            border: '2px solid black',
                            margin: '10px',
                            padding: '10px',
                        }}> 
                     <div style={{display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',}}>
                        <div>
                            <img src={prod.url} width="70px" alt="product" />
                        </div>
                        <div className='cartMap'>
                            <h5>Producto: {prod.producto}</h5>
                            <h5>$ {prod.precio}</h5>
                            <h5>Cantidad: {prod.cantidad}</h5>
                        </div>
                        </div>
                        <Button sx={{m: 1, p: 1}} style={{backgroundColor: "#696969"}} variant="contained" className="btn"  onClick={() => deleteItem(prod.id)}>
                            Delete
                        </Button>
                    </div>
                ))}
                <div style={{
                        display: 'inline-block',
                        margin: '10px',
                        padding: '10px',
                    }}>
                <h3>Total: $ {calcularTotal()} </h3>
                    <div>
                        <h4>Ingrese su dirección</h4>
                        <input  style={{marginBottom:"15px", paddingBottom: "0px"}}
                                type={'text'} value={addres} 
                                onChange={e => setAddres(e.target.value)}/>
                    </div>
                {user
                ?
                    addres ? 
                    <Link to="/"><button onClick={() => {agregarVenta(); terminarCompra()}}>Finalizar Compra</button></Link>
                    : <button onClick={() => {alert('Ingrese una dirección')}}>Finalizar Compra</button>
                : 
                <div>
                    <h4 style={{ color:"black"}}>Inicie sesión para continuar con la compra</h4>
                    <Link to='/login' style={{textDecoration:'none', color:"azure"}}><Button sx={{m: 0, p: 1}} style={{backgroundColor: "#696969"}} variant="contained">Iniciar sesión</Button></Link>
                </div>
                }
                </div>
            </div>
        </div>
    );
};

export default Cart;