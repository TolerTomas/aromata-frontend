import './Product.css';

import { LocalStorageAPI } from '../../utils/LSapi';

export default function Product({product}) {

    const LSapi = new LocalStorageAPI();

    return (
        <div className="product">
            <img src={`http://127.0.0.1:5000/productImageByImgName/${product.image}`} alt="" />
            <p className="product-name">{product.name}</p>
            <p className="product-price">${product.price}</p>
            <button className="add-btn"
                    onClick={() => {
                        LSapi.addProduct(product.id);
            }}>
                Añadir
            </button>
        </div>
    )
}