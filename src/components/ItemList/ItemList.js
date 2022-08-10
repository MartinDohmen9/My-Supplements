import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"
import { Container} from '@mui/system'

const ItemList = ({productList}) => {
  return (
    <Container fixed>
        <table>
          {productList.map((product)=>
            <div className='itemList' key={product.id}>
              <tr className='hoverEffect'>
                <div className='box'>
                  <Item key={product.id} product={product}/>
                </div>
              </tr>
              <br></br>
            </div>)}
        </table>
    </Container>
  )
}

export default ItemList