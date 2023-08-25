import './CampoTexto.css';

const Campos = (props) =>{
    const placeholderModificado = `${props.placeholder}...`
    return <div className='campo-texto'>
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificado}/>
    </div>
}

export default Campos