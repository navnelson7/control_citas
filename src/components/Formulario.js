import React, {Fragment, useState} from 'react';
const Formulario = () => {
    //crear el state de citas
    const [cita,actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [ error, actualizarError] = useState(false);
    //funcion actualizar state
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    //extraer los valores con destructurin
    const { mascota,propietario, fecha, hora, sintomas} = cita;
    //cuando presionemos agregar cita
    const submitCita = e =>{
        e.preventDefault();
        //validar el formulstop
        if(mascota.trim() === '' || propietario.trim()=== '' || fecha.trim()=== '' || hora.trim()=== '' || sintomas.trim()=== ''){
            actualizarError(true);
            return;
        }
        
        //asignar un ID



        //crear la cita 



        //reinicar el form
    }
    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Masctoa</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder= "Nombres de Macota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre del Dueno</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre propietario de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                 <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                 <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Guardar Cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;