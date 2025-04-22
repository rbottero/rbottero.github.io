// import SectionTitle from "../title/SectionTitle";
// import MenuList from "./MenuList";
// import MenuItem from "./MenuItem";
// import { menu } from "../../Data";

// import "./menu.css";
// import { useState } from "react";

// const allMenuList = ["Todos", ...new Set(menu.map((menu) => menu.category))];

// const Menu = () => {
//   const [menuList, setMenuList] = useState(allMenuList);
//   const [menuItems, setMenuItems] = useState(menu);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const filterItems = (category) => {
//     if (category === "Todos") {
//       setMenuItems(menu);
//       return;
//     }

//     const newMenuItems = menu.filter((item) => item.category === category);
//     setMenuItems(newMenuItems);
//   };

//   const openImageModal = (image) => {
//     setSelectedImage(image);
//     setModalOpen(true);
//   };

//   const closeImageModal = () => {
//     setModalOpen(false);
//     setSelectedImage(null);
//   };

//   return (
//     <section className="menu section">
//       <div className="container">
//         <div className="menu-header">
//           <SectionTitle
//             subtitle="En stock"
//             title={
//               <>
//                 Nuestros <span>productos</span>
//               </>
//             }
//           />

//           <ul className="menu-list">
//             <MenuList menuList={menuList} filterItems={filterItems} />
//           </ul>
//         </div>

//         <div className="menu-container grid">
//           <MenuItem menuItems={menuItems} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Menu;

import SectionTitle from "../title/SectionTitle";
import MenuList from "./MenuList";
import MenuItem from "./MenuItem";
import { menu } from "../../Data";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import "./menu.css";
import { useState } from "react";

const allMenuList = ["Todos", ...new Set(menu.map((menu) => menu.category))];

// Modificamos el componente Menu para manejar múltiples imágenes
const Menu = () => {
  const [menuList] = useState(allMenuList);
  const [menuItems, setMenuItems] = useState(menu);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItemImages, setCurrentItemImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filterItems = (category) => {
    if (category === "Todos") {
      setMenuItems(menu);
      return;
    }

    const newMenuItems = menu.filter((item) => item.category === category);
    setMenuItems(newMenuItems);
  };

  // Modificamos para manejar múltiples imágenes
  const openImageModal = (itemImages, initialIndex = 0) => {
    // Si solo recibimos una imagen como string, la convertimos en array
    const images = Array.isArray(itemImages) ? itemImages : [itemImages];
    setCurrentItemImages(images);
    setCurrentImageIndex(initialIndex);
    setModalOpen(true);
  };

  const closeImageModal = () => {
    setModalOpen(false);
    setCurrentItemImages([]);
    setCurrentImageIndex(0);
  };

  const goToPrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? currentItemImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === currentItemImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="menu section">
      <div className="container">
        <div className="menu-header">
          <SectionTitle
            subtitle="En stock"
            title={
              <>
                Nuestros <span>productos</span>
              </>
            }
          />
          <ul className="menu-list">
            <MenuList menuList={menuList} filterItems={filterItems} />
          </ul>
        </div>

        <div className="menu-container grid">
          <MenuItem menuItems={menuItems} openImageModal={openImageModal} />
        </div>
      </div>

      {/* Modal mejorado con carrusel de imágenes */}
      {modalOpen && (
        <div className="image-modal" onClick={closeImageModal}>
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-modal" onClick={closeImageModal}>
              &times;
            </span>

            {/* Controles de navegación */}
            {currentItemImages.length > 1 && (
              <>
                <button
                  className="carousel-arrow carousel-arrow-left"
                  onClick={goToPrevImage}
                >
                  <RiArrowLeftSLine />
                </button>

                <button
                  className="carousel-arrow carousel-arrow-right"
                  onClick={goToNextImage}
                >
                  <RiArrowRightSLine />
                </button>
              </>
            )}

            {/* Imagen actual */}
            <img
              src={currentItemImages[currentImageIndex]}
              alt="Imagen ampliada"
              className="modal-image"
            />

            {/* Miniaturas en la parte inferior */}
            {currentItemImages.length > 1 && (
              <div className="thumbnails-container">
                {currentItemImages.map((image, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${
                      index === currentImageIndex ? "active-thumbnail" : ""
                    }`}
                    onClick={() => goToImage(index)}
                  >
                    <img src={image} alt={`Miniatura ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;
