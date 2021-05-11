import React, { useState, useContext } from "react";
import "../../assets/css/modal.css";
import AlertaContext from '../../components/alertas/alertaContext';



const Modal =() => {

  const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;
  

    const [data, saveData] = useState({
      amount: '',
      concept: '',
      date: '',
      tipo: '',
    })
   
    const { amount, concept, date, tipo} = data

  const onChange = e=> {
    saveData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  const onSubmit = e=> {
    e.preventDefault();

    if(amount === '' || concept === '' || date === '') {
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
      return
  }
  
  const baseURL = "http://localhost:4700";
  const token = sessionStorage.getItem("token");
  const id = sessionStorage.getItem("id")
  console.log(JSON.stringify(data));
    fetch(
      baseURL + "/operations/"+ id,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: "Bearer " + token,
        }, body: JSON.stringify(data)
      }
      
    )
    window.location.reload();
  }

  
    return (
      <div>
        <div className="modal fade" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Ingrese un nuevo registro</h4>
                { alerta ? ( <div className={` ${alerta.categoria}`}> {alerta.msg} </div> )  : null }
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form  onSubmit={onSubmit}>
                  <label htmlFor="concept">Concepto</label>
                  <input
                    type="text"
                    onChange={onChange}
                    name="concept"
                    value={concept}
                  ></input>
                  <label htmlFor="amount">Monto</label>
                  <input
                    type="number"
                    onChange={onChange}
                    name="amount"
                    value={amount}
                  ></input>
                  <label htmlFor="date">Fecha</label>
                  <input
                    type="date"
                    onChange={onChange}
                    name="date"
                    value={date}
                  ></input>
                  <label htmlFor="tipo">Tipo</label>
                  <select onChange={onChange} name="tipo" value={tipo}>
                    <option>Ingreso</option>
                    <option>Egreso</option>
                  </select>
                  <div className="modal-footer">
                    <button
                      type="submit"
                      className="btn btn-primary"
                     
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default Modal;
