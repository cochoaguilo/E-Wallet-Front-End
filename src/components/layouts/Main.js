import React, {Component} from 'react';
const baseURL = 'http://localhost:4700';
const token = sessionStorage.getItem('token')

class Main extends Component{
    constructor(props){
      super(props);
      this.state ={
        items: [],
        suma: 0
      }
    }
    
  componentDidMount() {

    let id = sessionStorage.getItem('id');
    
    fetch(baseURL+'/operations/'+id,{
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
    deleteOperation(id){
      if (window.confirm('Estas seguro?')) {
        fetch(baseURL+'/operations/'+id,{
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'Bearer '+ token
          }
        })
        window.location.reload();
      }
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
      {this.state.items.map(item=>(
      <tr>
        <th>{item.concept}</th>
      <th>{item.amount}</th>
      <th>{item.date}</th>
      <th>{item.name}</th>
      <th>
        <button data-toggle="modal" data-target="#Modal-Edit"><em className="fa fa-edit"></em></button>
        <button onClick={()=>this.deleteOperation(item.id_operation)}
          variant="danger">
          <em className="fa fa-trash"></em>
          </button>
      </th>
      </tr>
      ))}
    </tbody>
  </table>
</div>
                </div>
            </div>
        );
    }
}

export default Main;