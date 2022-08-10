import  React, {useState , useEffect} from "react";
import "./styles.css";
import ItemList from "../ItemList/ItemList";
import {useParams} from 'react-router-dom';
import {db} from "../../firebase/firebase";
import {getDocs, collection, query, where} from "firebase/firestore";
import { CircularProgress } from "@mui/material";
import { getRedirectResult } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase";

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading]=useState(true)

  const {categoryId} = useParams();

  useEffect (() => {

    const q = categoryId 
    ? query(collection(db,'ItemCollection'), where("category", "==", categoryId))
    : collection(db, 'ItemCollection');

    getDocs(q)
    .then(res => {
      const list = res.docs.map(product => {
        return {
          id: product.id,
          ...product.data(),
        }
      })
      setProducts(list);
    })
    .finally(() => {
      setLoading(false);})

    getDocs(collection(db,'ventas'))
  .then(res => {
    const ventas = res.docs.map(venta => {
      return {
        idVenta: venta.id,
        ...venta.data()
      }
    })
    console.log(ventas)
  })

  },[categoryId])

  return (
    <div>
    <div className="landing">

      <span>{greeting}</span>

    </div>
    
    <div className="container">
      {loading 
        ? 
        <CircularProgress color="inherit" size="4rem"/> 
        : 
        <ItemList productList={products}/>
       } 
    </div>

    </div>
  );
};

export default ItemListContainer;