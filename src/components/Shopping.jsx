import React from 'react'
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';


const Shopping = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetchProducts();
    },[]);

    const fetchProducts = async ()=>{
        await fetch('https://fakestoreapi.com/products')
        .then(res=>res.json()).then(json=>setProducts(json));
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
        <div>
            <h1 className="text-center text-secondary">Welcome to MBird shopping</h1>
            <div className="row align-items-stretch mt-3">
            {
                exist(products.length)
                ?
                products.map(product =>{
                    return <Link key={product.id} to={`/shop/${product.id}`}> 
                                <div className='col-4'>
                                    <div className="card">
                                        <img className="card-img-top" style={{height: '300px'}} src={product['image']} alt="Card cap"></img>
                                        <div className="card-body">
                                            <h6 className="card-title" style={{height:'75px'}}>{product.title}</h6>
                                            <p className="text-primary">{product.category}</p>
                                            <p className="card-text fixed-hight">{product.price} </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                })
                :<p>there is no data</p>
            }
            </div>
        </div>
    )
}

export default Shopping
