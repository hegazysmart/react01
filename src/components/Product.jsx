import React from 'react';
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';


const Product = () => {
    const [product, setProduct] = useState(null);
    useEffect(() =>{
        fetchSingleProduct();
    },[]);

    const fetchSingleProduct = async ()=>{
        await fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json()).then(json=>setProduct(json));
    }
    const exist=value=>{
        if (value){
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <div className="product"> 
            {exist(product)
            ?
            <div class="row mt-5">
                <img class="col-12 col-lg-4 col-md-6" src={product.image} alt=""></img>
                <div class="col-12 col-lg-4 col-md-6 mt-5">
                    <h2>{product.title}</h2>
                    <h3 class="text-primary">{product.category}</h3>
                    <p>{product.price} $</p>
                </div>
            
            </div>
            :
            <Spinner animation="grow" />
            }
        </div>
    )
}

export default Product
