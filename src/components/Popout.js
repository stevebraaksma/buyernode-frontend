import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


function Popout(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    console.log(props)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="btn btn-warning"onClick={openModal}>View Notes</button>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false} 
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h4 ref={(_subtitle) => (subtitle = _subtitle)}>Notes</h4>
        <div className="notes-display">{props.task.notes}</div>
        <br />
        <button className="btn btn-info" onClick={closeModal}>close</button>
        
      </Modal>
      <br />
      <br />
    </div>
  );
}

export default Popout;