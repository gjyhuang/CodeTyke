import React from 'react';
import {BsX} from 'react-icons/bs';

const Modal = (props) => {
  if (!props.showingModal) return null;
  return (
    <>
      <div className="darkeningOverlay">
      </div>
      <div className="infoModal">
        <BsX onClick={props.handleInfoBtn}/>
        <div className="modalText">
        <h4>Rules</h4>
        {props.modalText}
        </div>
      </div>
    </>
  )
}

export default Modal;
