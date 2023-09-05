import './Form.css';
import Campos from '../CampoTexto/CampoTexto';
import '../ListaOpciones/ListaOpciones';
import ListaOpciones from '../ListaOpciones/ListaOpciones';
import Boton from '../Button/Button';
import { useState } from "react"

const Form = () => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosAEnviar)
    }

    return <section className='form'>
        <form onSubmit={manejarEnvio}>
            <h2>Completa el formulario para crear el colaborador.</h2>
            <Campos 
            titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required 
            valor={nombre}
            actualizarValor={actualizarNombre}
            />
            <Campos
             titulo="Puesto" 
             placeholder="Ingresar puesto" 
             required
             valor={puesto}
             actualizarValor={actualizarPuesto}
             />
            <Campos
             titulo="Foto" 
             placeholder="Ingresar enlace de foto"
            required
            valor={foto}
            actualizarValor={actualizarFoto}
              />
            <ListaOpciones 
             valor={equipo}
             actualizarEquipo={actualizarEquipo}
            />
            <Boton texto="Crear" />
        </form>
    </section>
}

export default Form 