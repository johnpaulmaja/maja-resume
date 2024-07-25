// src/Modal.js
import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root'); // This is necessary for screen readers

const Modal = ({ isOpen, onRequestClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <button onClick={onRequestClose} style={{ float: 'right', fontSize: '20px' }}>×</button>
      <img src="https://i.imgflip.com/8y521w.jpg" alt="Modal Content" />
    </ReactModal>
  );
};

export default Modal;
