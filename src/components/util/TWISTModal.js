import Modal from 'react-modal'

export const TWISTModal = (props) => (
    <Modal
      isOpen={props.showModal}
      ariaHideApp={false}
      contentLabel="Selected Option"
    >
      {props.children}
    </Modal>
  );