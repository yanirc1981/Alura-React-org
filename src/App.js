import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg/MiOrg';

function App() {

  
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario);
  }
  
  return (
    <div >
   
    <Header />
    {mostrarFormulario === true ? <Form /> : <div></div>}
    
    <MiOrg cambiarMostrar={cambiarMostrar} /> 
    </div>
  );
}

export default App;
