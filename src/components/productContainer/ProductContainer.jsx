import { useState, useEffect } from 'react';
import './ProductContainer.css'
import axios from 'axios';
import Product from '../product/Product';

export default function ProductContainer() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        // axios.get('http://127.0.0.1:5000/products')
        //     .then(res => res.data)
        //     .then(data => setProducts(data))
        setProducts([])
    }, []);
    
    return (
        <section className="product-container">
            {products.map(p => {
                return <Product product={p} key={p.id} />
            })}
        </section>
    )
}