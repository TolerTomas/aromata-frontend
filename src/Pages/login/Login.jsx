import Header from "../../components/header/Header";
import { useState } from "react";
import './Login.css'
import axios from "axios";

export default function Login() {

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post('http://127.0.0.1:5000/login', {formData})

            if (res.status == 200 && res.data === 'User authenticated') {
                alert('Usuario logueado');
            }
            else if (res.data === 'Email or Password Error') alert('Email or Password Error')
            else alert ('Email or Password Error')
            return redirect('/');

        } catch (err) {
            alert('error');
            console.log(err);
        }
    }

    return (
        <>
            <Header />
            <main className="container">
                <div className="form-container">
                    <form action="http://127.0.0.1:5000/login" method="post" autoComplete="off" onSubmit={handleSubmit}>
                        <h2>Accedé</h2>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" onChange={handleChange}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange}/>
                        <button type="submit">Accedé</button>
                    </form>
                </div>
            </main>
        </>
    )
}