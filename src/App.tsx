import { useState, useEffect, useRef } from "react";
import Container from "./components/Container/Container";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMore";
import ImageModal from "./components/ImageModal/ImageModal";
import getImages from "./api";
// import handleLoadMoreScroll from "./scroll";
import { ModalData } from "./types";
import { Images } from "./types";


export default function App() {
  const [images, setImages] = useState<Images>([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalData>({});


  // const galleryItemRef = useRef();

  function openModal(modalData: ModalData) {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
    setModalData(modalData);
  }

  // !!! add typization ???
  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "visible";
  }

  useEffect(() => {
    async function handleSearch() {
      try {
        if (currentQuery !== "") {
          setIsLoading(true);
          setError(false);
          // !!! add typization
          const imageData = await getImages(currentQuery, currentPage);
          if (!imageData.results.length) {
            setIsEmpty(true);
            return;
          }
          if (currentPage === 1) {
            setTotalPages(imageData.total_pages);
          }
          setImages((prevImages) => [...prevImages, ...imageData.results]);
        }
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    handleSearch();
  }, [currentQuery, currentPage]);


  function handleSubmit(query: string) {
    setIsEmpty(false);
    setCurrentQuery(query);
    setCurrentPage(1);
    setImages([]);
  }

  function handleLoadMoreBtnClick() {
    setCurrentPage(currentPage + 1);
  }



  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <main>
        <Container notHeader>
          {!images.length && !isLoading && !isEmpty && (
            <p>Let's begin search!🤗</p>
          )}
          {isEmpty && <p>No images found! Sorry!</p>}
          {images.length > 0 && (
            <ImageGallery
              images={images}
              onOpenModal={openModal}
            />
          )}
          {isLoading && <Loader />}
          {error && <ErrorMessage />}
          {images.length > 0 && !isLoading && currentPage !== totalPages && (
            <LoadMoreBtn onClick={handleLoadMoreBtnClick} />
          )}
          {modalIsOpen && (
            <ImageModal
              onCloseModal={closeModal}
              modalIsOpen={modalIsOpen}
              modalData={modalData}
            />
          )}
        </Container>
      </main>
    </div>
  );
}







// useEffect(() => {
//   if (currentPage === 1) return;
//   handleLoadMoreScroll(galleryItemRef.current);
// }, [images, currentPage]);








  // return (
  //   <div>
  //     <SearchBar onSubmit={handleSubmit} />
  //     <main>
  //       <Container notHeader>
  //         {!images.length && !isLoading && !isEmpty && (
  //           <p>Let's begin search!🤗</p>
  //         )}
  //         {isEmpty && <p>No images found! Sorry!</p>}
  //         {images.length > 0 && (
  //           <ImageGallery
  //             ref={galleryItemRef}
  //             images={images}
  //             onOpenModal={openModal}
  //           />
  //         )}
  //         {isLoading && <Loader />}
  //         {error && <ErrorMessage />}
  //         {images.length > 0 && !isLoading && currentPage !== totalPages && (
  //           <LoadMoreBtn onClick={handleLoadMoreBtnClick} />
  //         )}
  //         {modalIsOpen && (
  //           <ImageModal
  //             onCloseModal={closeModal}
  //             modalIsOpen={modalIsOpen}
  //             modalData={modalData}
  //           />
  //         )}
  //       </Container>
  //     </main>
  //   </div>
  // );

