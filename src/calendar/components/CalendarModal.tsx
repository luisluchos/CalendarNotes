import { useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { differenceInSeconds } from "date-fns";
//import 'sweetalert2/src/sweetalert2.scss'
import Swal from "sweetalert2";
import { useUiStore } from "../../hooks";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export const CalendarModal = () => {

 const {isDateModalOpen, closeDateModal}= useUiStore()

  const [formValues, setFormValues] = useState({
    title: "",
    notes: "",
    start: new Date(),
    end: new Date(),
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleDateChange = (e, changing) => {
    setFormValues({ ...formValues, [changing]: e });}

  const onCloseModal = () => {
    closeDateModal()
    console.log("close modal");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit", formValues);
    
    const difference = differenceInSeconds(formValues.end, formValues.start);
    if (isNaN(difference) || difference <= 0) {
      Swal.fire('Error', 'La fecha de finalización debe ser mayor a la de inicio', 'error');
      return;
    }

    if (formValues.title.length === 0) {
        Swal.fire('Error', 'El título es obligatorio', 'error');
      return;
    }
}

    
  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={500}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker
          selected={formValues.start}
          className="form-control"
          dateFormat="Pp"
          onChange={(e) => handleDateChange(e, 'start')}
          showTimeSelect

          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
          minDate={formValues.start}
          selected={formValues.end}
          className="form-control"
          dateFormat="Pp"
          onChange={(e) => handleDateChange(e, 'end')}
          showTimeSelect

          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            className="form-control"
            placeholder="Notas"
            rows={5}
            name="notes"
            value={formValues.notes}
            onChange={handleChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
