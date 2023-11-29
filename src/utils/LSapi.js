// Local Storage API for storing products
let instance;

export class LocalStorageAPI {

    constructor() {
        if (instance) return instance;
        this.productsAdded = [];
        localStorage.clear()
        instance = this;
    }

    addProduct(ProductID) {
        let product = localStorage.getItem(ProductID);
        if (product) {
            localStorage.removeItem(ProductID)
            localStorage.setItem(ProductID, ++product);
        }
        else {
            this.productsAdded.push(ProductID)
            localStorage.setItem(ProductID, 1);
        }
    
        console.clear()
        this.showProducts()
        console.log('product added');
    }

    deleteProduct(ProductID) {
        localStorage.removeItem(ProductID);
    }

    removeProduct(ProductID) {
        let count = localStorage.getItem(ProductID);
        
        console.log(count);

        localStorage.removeItem(ProductID);
        if (count <= 0 ) { 
            this.productsAdded.fillter(idx => idx !== ProductID);
            return;
        }
        localStorage.setItem(ProductID, --count);

    }

    deleteCart() {
        localStorage.clear();
        this.productsAdded = [];
    }

    showProducts() {
        this.productsAdded.forEach(idx => {
            console.log(idx, 'cant: ', localStorage.getItem(idx));
        })
    }

    getProducts(){
        let products = {}
        this.productsAdded.forEach(idx => {
            products[idx] = localStorage.getItem(idx);
        });
        return products;
    }

    getTotal() {
        let productosCarrito = []
        let totalCarrito = 0
        
        let ps = this.getProducts();

        let ids = Object.keys(ps);
        let cantidades = Object.values(ps);
        
        

    }

}