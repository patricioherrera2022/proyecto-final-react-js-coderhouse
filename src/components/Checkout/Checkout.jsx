import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { getFirestore } from '../../firebase/config'
import firebase from "firebase";
import 'firebase/firestore'

export const Checkout = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)
    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Nombre:", nombre);
        console.log("Apellido:", apellido);
        console.log("Telefono:", telefono);

        const orden = {
            buyer: {
                email,
                nombre,
                apellido,
                telefono
            },
            items: carrito,
            total_price: precioTotal(),
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }
        console.log(orden)
        
        const db = getFirestore()

        const orders = db.collection('orders')

        orders.add(orden)
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Su compra fue registrada con éxito',
                    text: `Guarde su numero de compra: ${res.id}`,
                    willClose: () => {
                        vaciarCarrito()
                    }
                })
            })
            .finally(() => {
                console.log('Operacion final')
            })

        carrito.forEach((item) => {
            const docRef = db.collection('productos').doc(item.id)
            docRef.get()
                .then((doc) => {
                    docRef.update({
                        stock: doc.data().stock - item.counter
                    })
                })
        })
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-3">
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="ingrese su email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" placeholder="ingrese su nombre" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" placeholder="ingrese su apellido" className="form-control" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="telefono">Telefono:</label>
                <input type="tel" placeholder="ingrese su celular" className="form-control" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-success">Finalizar</button>
            <Link to='/cart' className='btn btn-info'>Volver al carrito</Link>
        </form>
    );
};





