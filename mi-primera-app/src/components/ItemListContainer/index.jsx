import React, { useEffect, useState } from 'react';
import Title from '../Title';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({greeting}) =>{
    const [Products, setProducts]= useState([])

    useEffect(() =>{
        getProducts()
        .then(response =>{
            setProducts(response)
        })
        .catch (error=>{
            console.error(error)
        })
    },[])

    return (
        <div>
    <Title greeting='Bienvenidos'/>
    <ItemList Products={Products}/>
    </div>
 );

} 

export default ItemListContainer;