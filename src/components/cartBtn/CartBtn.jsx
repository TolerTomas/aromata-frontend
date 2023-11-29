import { LocalStorageAPI } from "../../utils/LSapi";
import "./cartBtn.css";
import { useState } from "react";
import { obtenerTotal } from "../../utils/ObtenerTotal";

export default function CartBtn() {
	const LSapi = new LocalStorageAPI();
	const [visibilityMenu, setVisibilityMenu] = useState(false);

	return (
		<>
			<button className="cartBtn" onClick={() => setVisibilityMenu(true)}>
				<img src="/carrito.png" alt="cart img" />
			</button>

			{visibilityMenu ? (
				<aside className="cartMenu">
					<button
						className="aside-btn"
						onClick={() => setVisibilityMenu(false)}
					>
						close
					</button>

					<div className="products-cart-container">
						{Object.entries(LSapi.getProducts()).map(
							([idx, cant]) => {
								return (
									<CartProduct
										info={{ ProductID: idx, cant: +cant }}
										key={idx}
									/>
								);
							}
						)}
					</div>

					<button className="aside-btn" onClick={() => {
						LSapi.deleteCart()
						setVisibilityMenu(false)
					}}>Vaciar</button>

					<button className="aside-btn" onClick={() => obtenerTotal()}>
						Comprar
					</button>

				</aside>

			) : null}

		</>
	);
}

function CartProduct({ info }) {
	const LSapi = new LocalStorageAPI();
	const ProductID = info.ProductID;
	let cant = +info.cant;

	let [count, setCount] = useState(cant);

	return (
		<>
			{count > 0 ? (
				<div className="cartProduct">
					<img
						src={`http://127.0.0.1:5000/productImageById/${ProductID}`}
						alt=""
					/>

					<div className="cantidad">
						<p> Cantidad: {count}</p>
					</div>

					<div className="buttons">
						<button
							className="opBtn"
							onClick={() => {
								console.log("+ pressed");
								LSapi.addProduct(ProductID);
								++count
								setCount(count++);
							}}
						>
							+
						</button>
						<button
							className="deleteBtn"
							onClick={() => {
								LSapi.deleteProduct(ProductID);
								count=0
								setCount(0)
							}}
						>
							Delete
						</button>
						<button
							className="opBtn"
							onClick={() => {
								LSapi.removeProduct(ProductID);
								--count
								setCount(count--)
							}}
						>
							-
						</button>
					</div>
				</div>
			) : null}
		</>
	);
}
