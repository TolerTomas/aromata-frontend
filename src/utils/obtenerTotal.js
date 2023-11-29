import axios from "axios";
import { LocalStorageAPI } from "./LSapi";

export async function obtenerTotal() {
	const LSapi = new LocalStorageAPI();
    
    const ps = LSapi.getProducts();
    const indices = Object.keys(ps)
	
    let productos = []
	let total = 0
	
    for (let i = 0; i > indices.length; i++) {

        let pPrecio = await axios.get(`http://127.0.0.1:5000/productPriceById/${indices[i]}`)

        productos[i] = {
            id: indices[i],
            cantidad: parseInt(productos[indices[i]]),
            precio: parseInt(pPrecio.data) * parseInt(productos[indices[i]])
        }
        total += parseInt(pPrecio.data) * parseInt(productos[indices[i]])
    }

    // for (let idx of indices) {

    //     let pPrice = await axios.get(`http://127.0.0.1:5000/productPriceById/${idx}`);

    //     productos[idx] = {
    //         id: idx,
    //         cantidad: parseInt(products[idx]),
    //         price: parseInt(products[idx]) * parseInt(pPrice.data)
    //     };

    //     total = total + parseInt(products[idx]) * parseInt(pPrice.data)
    // }

    console.log(productos, total)

    // return {
    //     productos,
    //     total
    // }

}