import { Images } from "../../types";
import { ModalData } from "../../types";
import { OnOpenModalCallback } from "../../types";

export interface ImageGalleryProps {
    images: Images;
    onOpenModal: OnOpenModalCallback;
  }