import { OnOpenModalCallback } from "../../types";
import { PhotoUrls } from "../../types";

interface ImageData {
    likes: number;
    description: string;
    urls: PhotoUrls;
}

export interface ImageCardProps {
    onOpenModal: OnOpenModalCallback;
    imageData: ImageData;
}