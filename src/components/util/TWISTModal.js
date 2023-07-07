import Modal from 'react-modal'

export const TWISTModal = (props) => (
    <Modal
      isOpen={props.showModal}
      contentLabel="Selected Option"
    >
      {props.children}
    </Modal>
  );