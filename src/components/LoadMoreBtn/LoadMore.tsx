import css from "./LoadMore.module.css";
import { LoadMoreBtnTypes } from "./LoadMore.types";

export default function LoadMoreBtn({ onClick }: LoadMoreBtnTypes) {
  return (
    <button className={css.btn} onClick={onClick}>
      Load more
    </button>
  );
}
