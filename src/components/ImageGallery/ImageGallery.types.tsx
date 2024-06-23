import { Images } from "../../types";
import { ModalData } from "../../types";

export interface ImageGalleryProps {
    images: Images;
    onOpenModal: (modalData: ModalData) => void;
  }