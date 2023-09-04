import './Form.css';
import Campos from '../CampoTexto/CampoTexto';
import '../ListaOpciones/ListaOpciones';
import ListaOpciones from '../ListaOpciones/ListaOpciones';
import Boton from '../Button/Button';

const Form = () => {

    const manejarEnvio = (event) =>{
        event.preventDefault();
    }

    return <section className='form'>
        <form onSubmit={manejarEnvio}>
            <h2>Completa el formulario para crear el colaborador.</h2>
            <Campos titulo="Nombre" placeholder="Ingresar nombre" required />
            <Campos titulo="Puesto" placeholder="Ingresar puesto" required/>
            <Campos titulo="Foto" placeholder="Ingresar enlace de foto" required/>
            <ListaOpciones />
            <Boton texto="Crear" />
        </form>
    </section>
}

export default Form 