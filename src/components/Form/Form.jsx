import './Form.css';
import Campos from '../CampoTexto/CampoTexto';

const Form = () => {

    return <section className='form'>
        <form>
            <h2>Completa el formulario para crear el colaborador.</h2>
            <Campos titulo="Nombre" placeholder="Ingresar nombre"/>
            <Campos titulo="Puesto" placeholder="Ingresar puesto"/>
            <Campos titulo="Foto" placeholder="Ingresar enlace de foto"/>
        </form>
    </section>
}

export default Form 