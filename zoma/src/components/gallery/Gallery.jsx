// import SectionTitle from "../title/SectionTitle";
// import { gallery } from "../../Data";
// import { RiAddLargeLine } from "react-icons/ri";

// import "./gallery.css";

// const Gallery = () => {
//   return (
//     <section className="gallery section">
//       <SectionTitle
//         subtitle="Nuestra galería de fotos"
//         title={
//           <>
//             Mirá nuestras <span>fotos</span>
//           </>
//         }
//       />

//       <div className="gallery-container container">
//         {gallery.map((gallery, index) => {
//           return (
//             <div className="gallery-item" key={index}>
//               <img src={gallery} alt="" className="gallery-img" />
//               <a href={gallery} className="gallery-link">
//                 <RiAddLargeLine />
//               </a>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Gallery;

import { useState } from "react";
import SectionTitle from "../title/SectionTitle";
import { gallery } from "../../Data";
import {
  RiAddLargeLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCloseLine,
} from "react-icons/ri";

import "./gallery.css";

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGalleryModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeGalleryModal = () => {
    setModalOpen(false);
  };

  const goToPrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="gallery section">
      <SectionTitle
        subtitle="Nuestra galería de fotos"
        title={
          <>
            Mirá nuestras <span>fotos</span>
          </>
        }
      />

      <div className="gallery-container container">
        {gallery.map((galleryImage, index) => {
          return (
            <div
              className="gallery-item"
              key={index}
              onClick={() => openGalleryModal(index)}
            >
              <img src={galleryImage} alt="" className="gallery-img" />
              <div className="gallery-link">
                <RiAddLargeLine />
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal de galería con carrusel */}
      {modalOpen && (
        <div className="gallery-modal" onClick={closeGalleryModal}>
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="gallery-modal-close" onClick={closeGalleryModal}>
              <RiCloseLine />
            </span>

            {/* Controles de navegación */}
            <button
              className="gallery-carousel-arrow gallery-carousel-arrow-left"
              onClick={goToPrevImage}
            >
              <RiArrowLeftSLine />
            </button>

            <button
              className="gallery-carousel-arrow gallery-carousel-arrow-right"
              onClick={goToNextImage}
            >
              <RiArrowRightSLine />
            </button>

            {/* Imagen actual */}
            <img
              src={gallery[currentImageIndex]}
              alt="Imagen ampliada"
              className="gallery-modal-image"
            />

            {/* Miniaturas en la parte inferior */}
            <div className="gallery-thumbnails-container">
              {gallery.map((image, index) => (
                <div
                  key={index}
                  className={`gallery-thumbnail ${
                    index === currentImageIndex
                      ? "active-gallery-thumbnail"
                      : ""
                  }`}
                  onClick={() => goToImage(index)}
                >
                  <img src={image} alt={`Miniatura ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
