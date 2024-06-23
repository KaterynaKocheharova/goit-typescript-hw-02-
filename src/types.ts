import { Photo } from "./App.types";

export type Images = Photo[] | [];

export type ModalData =
  | {}
  | {
      src: string;
      alt: string;
    };

