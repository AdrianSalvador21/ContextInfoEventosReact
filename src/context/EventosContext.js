import React, {Component} from 'react';
import axios from 'axios';

// Crear el context
const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component{

  token = '6VNRYZA6RM5LSJOEFWX3';
  ordenar = 'date';

  state = {
    eventos: []
  };

  obtenerEventos = async (busqueda) => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;

    // Consultar api

    const eventos = await axios.get(url);

    console.log(eventos);
    this.setState({
      eventos : eventos.data.events
    });
  };


  render() {
    return (
      <EventosContext.Provider
        value={{
          eventos: this.state.eventos,
          obtenerEventos : this.obtenerEventos
        }}
      >
        {this.props.children}
      </EventosContext.Provider>
    );
  }
}

export default EventosProvider;
