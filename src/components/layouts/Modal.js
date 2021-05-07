import React, {Component} from 'react';
import '../../assets/css/modal.css';
class Modal extends Component{

    render(){
        return(
            <div>

  <div className="modal fade" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
      
        <div className="modal-header">
          <h4 className="modal-title">Ingrese un nuevo registro</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
          <form>
              <label for="concept">Concepto</label><input type="text"></input>
              <label for="amount">Monto</label><input type="number"></input>
              <label for="date">Fecha</label><input type="date"></input>
              <label for="tipo">Tipo</label>
                <select>
                    <option>Ingreso</option>
                    <option>Egreso</option>
                </select>
          </form>
        </div>
        
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
            </div>
        )
    }
}

export default Modal;