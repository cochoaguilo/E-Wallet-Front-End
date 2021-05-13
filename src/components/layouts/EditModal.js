import React, { useContext, useState } from "react";
import "../../assets/css/modal.css";
import AlertaContext from "../../components/alertas/alertaContext";

const ModalEdit = (props) => {
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const [data, saveData] = useState({
    amount: "",
    concept: "",
    date: "",
  });

  const onChange = (e) => {
    saveData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.amount === "" ||
      this.state.concept === "" ||
      this.state.date === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    const baseURL = process.env.REACT_APP_BACKEND;
    const token = sessionStorage.getItem("token");
    const idOperation = this.props.id;
    console.log(JSON.stringify(data));
    fetch(baseURL + "operations/" + idOperation, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
    });
    window.location.reload();
  };

  return (
    <div>
      <div className="modal fade" id="Modal-Edit">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edite su registro</h4>
              {alerta ? (
                <div className={` ${alerta.categoria}`}> {alerta.msg} </div>
              ) : null}
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <label htmlFor="concept">Concepto</label>
                <input
                  type="text"
                  value={props.concept}
                  onChange={onChange}
                ></input>
                <label htmlFor="amount">Monto</label>
                <input
                  type="number"
                  value={props.amount}
                  onChange={onChange}
                ></input>
                <label htmlFor="date">Fecha</label>
                <input
                  type="date"
                  value={props.date}
                  onChange={onChange}
                ></input>
                <label htmlFor="tipo">Tipo</label>
                <select className="form-control" value={props.tipo} disabled>
                  <option>Ingreso</option>
                  <option>Egreso</option>
                </select>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
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
};

export default ModalEdit;
