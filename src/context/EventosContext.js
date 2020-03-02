import React, { Component } from "react";
import axios from "axios";

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {
  token = "ZVFDDPM7GABKLFQRWIXU";
  orderBy = "date";
  state = {
    eventos: []
  };

  getEventos = async busqueda => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.orderBy}&token=${this.token}&locale=es_es`;
    let eventos = await axios.get(url);
    console.log(eventos);
    this.setState({ eventos: eventos.data.event });
  };
  render() {
    return (
      <EventosContext.Provider
        value={{ eventos: this.state.eventos, getEventos: this.getEventos }}
      >
        {this.props.children}
      </EventosContext.Provider>
    );
  }
}

export default EventosProvider;
