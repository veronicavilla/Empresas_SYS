import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const apiClientes = "http://localhost:2002/clientes";

const FormularioClientes = () => {
    const [nombre, setNombre] = useState("") 
    const [documento, setDocumento] = useState("") 
    const [correo, setCorreo] = useState("") 
    const [direccion, setDireccion] = useState("") 
    const [barrio, setBarrio] = useState("") 
    const [telefono, setTelefono] = useState("") 
    const navigate = useNavigate();

    const agregarCliente = async(e) => {
        e.preventDefault()
        const cliente = {
            nombre, documento, correo, direccion, barrio, telefono
        }
        await axios.post(apiClientes, cliente)
        navigate('/clientes/tablaClientes')
    }

    return(
        <section>
            <Header />
                <section className="registro">
                    <form onSubmit={agregarCliente} action="">
                        <h1 className="titulo">Registrando Clientes</h1>
                        <input value={nombre}  className="form-item" placeholder="Nombre" type="text" />
                        <input value={documento} className="form-item" placeholder="Documento" type="text" />
                        <input value={correo}  className="form-item" placeholder="Correo" type="email" />
                        <input value={direccion}  className="form-item" placeholder="Dirección" type="text" />
                        <input value={barrio}  className="form-item" placeholder="Barrio" type="text" />
                        <input value={telefono}  className="form-item" placeholder="Teléfono" type="tel" />
                        <input className="btn-form-clientes" type="submit" value={"Agregar"} />
                    </form>
                </section>
            <Footer />
        </section>
    )
}
export default FormularioClientes;