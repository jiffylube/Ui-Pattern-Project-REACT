import "./Modal.css";

function Modal(display) {

  return (

    <div className={"Modal"}>
      <div className={"backdrop"} onClick={display.closeModal}>
        <div className={"content"}>
          {display.joke}
        </div>
      </div>
    </div>
  )
}

export default Modal