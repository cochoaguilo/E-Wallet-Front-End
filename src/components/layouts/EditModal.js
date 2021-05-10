import React, {Component} from 'react';
import '../../assets/css/modal.css';
class ModalEdit extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>

  <div className="modal fade" id="Modal-Edit">
    <div className="modal-dialog">
      <div className="modal-content">
      
        <div className="modal-header">
          <h4 className="modal-title">Ingrese un nuevo registro</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
          <form>
              <label htmlFor="concept">Concepto</label>
              <input type="text" ></input>
              <label htmlFor="amount">Monto</label><input type="number"></input>
              <label htmlFor="date">Fecha</label><input type="date"></input>
              <label htmlFor="tipo">Tipo</label>
                <select className='form-control' disabled>
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

export default ModalEdit;