import React, { Component } from "react";

import { CategoriasConsumer } from "../../context/CategoriasContext";
import { EventosConsumer } from "../../context/EventosContext";

class Formulario extends Component {
  state = { nombre: "", categoria: "" };

  getDatosEvento = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <EventosConsumer>
        {value => {
          console.log(value);
          return (
            <form>
              <fieldset className="uk-fieldset uk-margin">
                <legend className="uk-legend uk-text-center">
                  Filtrar Evento
                </legend>
              </fieldset>
              <div className="uk-column-1-3@m uk-margin">
                <div className="uk-margin" uk-margin="true">
                  <input
                    name="nombre"
                    className="uk-input"
                    type="text"
                    placeholder="Nombre de Evento o Ciudad"
                    onChange={this.getDatosEvento}
                  ></input>
                </div>
                <div className="uk-margin" uk-margin="true">
                  <select
                    className="uk-select"
                    name="categoria"
                    onChange={this.getDatosEvento}
                  >
                    <option value=""> ---Seleccione Categoria---</option>
                    <CategoriasConsumer>
                      {value =>
                        value.categorias.map(categoria => (
                          <option
                            key={categoria.id}
                            value={categoria.id}
                            data-uk-form-select
                          >
                            {categoria.name_localized}
                          </option>
                        ))
                      }
                    </CategoriasConsumer>
                  </select>
                </div>
                <div>
                  <input
                    type="submit"
                    className="uk-button uk-button-danger"
                    value="Buscar Eventos"
                  />
                </div>
              </div>
            </form>
          );
        }}
      </EventosConsumer>
    );
  }
}

export default Formulario;
