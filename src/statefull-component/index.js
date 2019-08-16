import React from 'react';

export default class Conteador extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      contador: 0
    }
  }

  incrementar() {
    // this.setState({
    //   contador: this.state.contador + 1
    // })

    //esta forma previene la asincronía en la obtención del estado del componente
    this.setState( prevState => {
      return {
        contador: prevState.contador +1
      }
    });
  }

  render() {
    return (
      <div>
        <span>Cuenta actual {this.state.contador}</span>
        <button onClick={this.incrementar.bind(this)}>+</button>
      </div>
    )
  }
}