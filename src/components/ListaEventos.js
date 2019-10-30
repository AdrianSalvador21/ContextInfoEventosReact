import React from  'react';
import {EventosConsumer} from "../context/EventosContext";
import Evento from "./Evento";


const ListaEventos = () => {
  return (
    <div className="uk-child-width-1-3@m" uk-grid="true">
      <h1>Resultados</h1>

      <EventosConsumer>
        {(value) => {
          console.log(value);
          return value.eventos.map(evento => (
            <Evento
              key={evento.id}
              evento={evento}
            />
          ));
        }}
      </EventosConsumer>
    </div>
  );
};

export default ListaEventos;