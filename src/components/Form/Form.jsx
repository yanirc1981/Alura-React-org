import './Form.css';
import Campos from '../Campo/Campo';
import ListaOpciones from '../ListaOpciones/ListaOpciones';
import Boton from '../Button/Button';
import { useState } from "react"

const Form = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props
    
    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
        
    }
    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
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
             equipos={props.equipos}
            />
            <Boton texto="Crear" />
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campos
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campos
                titulo="Color"
                placeholder="Ingresar el color en Hex"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton texto="Registrar equipo" />
        </form>
    </section>
}

export default Form 