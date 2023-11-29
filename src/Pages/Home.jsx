import Header from "../components/header/Header";
import ProductContainer from "../components/productContainer/ProductContainer";

export default function Home() {
    return (
        <>
            <Header/>
            <main className="container">
                <ProductContainer />
            </main>
        </>
    )
}