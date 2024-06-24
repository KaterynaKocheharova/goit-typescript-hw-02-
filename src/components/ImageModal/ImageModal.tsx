import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
import { ImageModalPropTypes } from "./ImageModal.types";

ReactModal.setAppElement("#root");

export default function ImageModal({ onCloseModal, modalIsOpen, modalData } : ImageModalPropTypes) {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      className={css.content}
      overlayClassName={css["ReactModal__Overlay"]}
    >
      <img className={css.image} src={modalData.src} alt={modalData.alt} />
    </ReactModal>
  );
}
