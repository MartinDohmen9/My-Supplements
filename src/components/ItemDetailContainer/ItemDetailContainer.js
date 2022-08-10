import  React, {useState , useEffect} from "react";
import "./styles.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams} from 'react-router-dom'
import {doc, getDoc, collection} from 'firebase/firestore'
import {db} from "../../firebase/firebase";
import { CircularProgress } from "@mui/material";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)


const {productId} = useParams()

    useEffect(() => {

      const itemCollection = collection(db,"ItemCollection");
      const refDoc = doc(itemCollection,productId);

      getDoc(refDoc)
      .then(res => {
        setProduct({
          id: res.id,
          ...res.data(),
        })
      })
      .finally(() => {
        setLoading(false);
      });
    },[productId])

  return (

    <div className="containerDetail">
      
      {loading 

        ? <CircularProgress color="inherit" size="4rem"/> 
        : <ItemDetail product={product}/>} 

    </div>

  );
};

export default ItemDetailContainer;
