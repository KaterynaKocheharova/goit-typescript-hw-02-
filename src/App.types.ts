import { PhotoUrls } from "./types";

export interface Photo {
  id: string;
  likes: number;
  description: string;
  urls: PhotoUrls;
}
