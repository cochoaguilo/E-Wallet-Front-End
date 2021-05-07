import React, {Component} from 'react';

class Main extends Component{
    
    
    render(){
        return(
            <div className ='main'>
                <h1>Saldo</h1>
                <div>
                    <div className="container">
  <h2>Ultimos movimientos</h2>       
  <table className="table table-dark table-striped"
    /*style={{width: '70%', position: 'relative'}}*/
  >
    <thead>
      <tr>
        <th>Operación</th>
        <th>Concepto</th>
        <th>Monto</th>
        <th>Fecha</th>
        <th>Tipo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
</div>
                </div>
            </div>
        );
    }
}

export default Main;