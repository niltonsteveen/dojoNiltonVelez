import React, {Component} from 'react';
import './App.css';
import Resultado from './resultado';

class App extends Component {

	funcionCambio(elem){
		console.log('valor:',elem.target.value, ' nilton');
		this.buscar(elem.target.value);
	}

	constructor(props){
		super(props);
		this.buscar('audifonos');
		this.state={
			resultados:[]
		}
	}

	buscar(busqueda){
		fetch('https://api.mercadolibre.com/sites/MCO/search?q=' + busqueda)
		.then((resultado) => {
			return resultado.json()
		})
		.then((resultado)=>{
				this.setState({resultados: resultado.results})
			});
	}

    render() {
        return (
            <div>
            <h1>Nilton Steveen Velez Garcia</h1><p></p>
            <input id="ipt" type="text" placeholder="escriba aca" onChange={this.funcionCambio.bind(this)}></input>
            {this.state.resultados.map(function(resultado){
            	return <Resultado resultado={resultado}></Resultado>;
            })}
            </div>
        );
    }
}

export default App;
