import React, {Component} from 'react';

class Main extends Component{
    constructor(props){
      super(props);
      this.state ={
        items: [],
        suma: 0
      }
    }
  componentDidMount() {

    let token = sessionStorage.getItem('token')
    fetch('http://localhost:4700/operations',{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': 'Bearer '+ token
    }
  }).then(res=> res.json())
    .then(json =>{
      console.log(json);
      for (let index = 0; index < json.length; index++) {
        if (json[index].name === 'Ingreso') {
          this.setState({
            suma: this.state.suma + json[index].amount
          })
        }

        if (json[index].name === 'Egreso') {
          this.setState({
            suma: this.state.suma - json[index].amount
          })
        }
        
      }
      this.setState({
        items: json
      })
    })
  }
    
    render(){
        return(
            <div className ='main'>
                <h1>Saldo</h1>
                <div>{this.state.suma}</div>
                <div>
                    <div className="container">
  <h2>Ultimos movimientos</h2>       
  <table className="table table-dark table-striped"
  >
    <thead>
      <tr>
        <th>Concepto</th>
        <th>Monto</th>
        <th>Fecha</th>
        <th>Tipo</th>
        <th>Edit/Delete</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
</div>
                </div>
            </div>
        );
    }
}

export default Main;