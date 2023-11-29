import { useState } from "react";
import Header from "../../components/header/Header";
import axios from "axios";

import './Signup.css'

export default function Signup() {

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Las contraseñas no coinciden')
        } else {
            try {
                const res = await axios.post('http://127.0.0.1:5000/signup', {formData})

                if (res.status == 200 && res.data === 'user registered') {
                    alert('Usuario registrado');
                }
                else if (res.data === 'Email usado') alert('Email usado')
                else alert ('error')
                return redirect('/');

            } catch (err) {
                alert('error');
                console.log(err);
            }
        }
    }

    return (
        <>
            <Header />
            <main className="container">
                <div className="form-container">
                    <form action="http://127.0.0.1:5000/signup" method="post" autoComplete="off" onSubmit={handleSubmit}>
                        <h2>Registrate</h2>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="Username" id="username" onChange={handleChange}/>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email" id="email" onChange={handleChange}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" id="password" onChange={handleChange}/>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" placeholder="ConfirmPassword" id="confirmPassword" onChange={handleChange}/>
                        <button type="submit">Registrate</button>
                    </form>
                </div>
            </main>
        </>
    )
}