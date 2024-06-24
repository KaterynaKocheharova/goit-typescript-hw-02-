import { Photo } from "./App.types";

export type StandardCallBack = () => void;

export type Images = Photo[] | [];

export type ModalData = {
  src?: string;
  alt?: string;
};

export interface PhotoUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export type OnOpenModalCallback = (modalData: ModalData) => void;
