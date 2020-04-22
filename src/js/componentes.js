import '../css/componentes.css'

//tenemos que poner la plabra export para poder acceder a esta funcion dentro de otro archivo exportando este mismo
export const saludar = (nombre) => {
    console.log('Creando una etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}`;

    document.body.append(h1);
}