import React, { Component } from "react";
import axios from "axios";

const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {
  token = "ZVFDDPM7GABKLFQRWIXU";
  state = { categorias: [] };

  componentDidMount() {
    this.getCategorias();
  }

  getCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=ES_es`;
    let categorias = await axios.get(url);
    this.setState({ categorias: categorias.data.categories });
  };

  render() {
    return (
      <CategoriasContext.Provider value={{ categorias: this.state.categorias }}>
        {this.props.children}
      </CategoriasContext.Provider>
    );
  }
}

export default CategoriasProvider;
