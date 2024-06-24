import { StandardCallBack } from "../../types";
import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

export default function ImageCard({
  imageData: {
    likes,
    description,
    urls: { small, regular },
  },
  onOpenModal,
}: ImageCardProps) {
  const handleModalClick: StandardCallBack = (): void => {
    onOpenModal({ src: regular, alt: description });
  };

  return (
    <>
      <p>Likes: {likes}</p>
      <div className={css["image-container"]}>
        <img
          className={css.image}
          src={small}
          alt={description}
          onClick={handleModalClick}
        />
      </div>
    </>
  );
}
