import { Photo } from "./App.types";

export interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: Photo[];
}
