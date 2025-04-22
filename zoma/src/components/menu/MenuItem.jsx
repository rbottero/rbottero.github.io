// const MenuItem = ({ menuItems }) => {
//   return (
//     <>
//       {menuItems.map(({ id, img, title, description, price }) => {
//         return (
//           <article className="menu-item" key={id}>
//             <div className="menu-data">
//               <img src={img} alt="" className="menu-img" />
//             </div>
//             <h3 className="menu-title">{title}</h3>
//             <span className="menu-price">${price}</span>
//             <p className="menu-description">{description}</p>
//           </article>
//         );
//       })}
//     </>
//   );
// };

// export default MenuItem;

const MenuItem = ({ menuItems, openImageModal }) => {
  // Función para obtener todas las imágenes de un item
  const getItemImages = (item) => {
    // Si el item ya tiene un array de imágenes, lo usamos
    if (item.images && Array.isArray(item.images)) {
      return item.images;
    }

    // Si no tiene un array de imágenes, usamos la imagen principal
    // y simulamos imágenes adicionales (esto deberías reemplazarlo por tus datos reales)
    return [item.img];
  };

  return (
    <>
      {menuItems.map((item) => {
        const { id, img, title, description, price } = item;
        const itemImages = getItemImages(item);

        return (
          <article className="menu-item" key={id}>
            <div className="menu-data">
              <img
                src={img}
                alt={title}
                className="menu-img"
                onClick={() => openImageModal(itemImages)}
                style={{ cursor: "pointer" }}
              />
              {/* Si hay más de una imagen, mostramos un indicador */}
              {itemImages.length > 1 && (
                <span className="image-counter">+{itemImages.length - 1}</span>
              )}
            </div>
            <h3 className="menu-title">{title}</h3>
            <span className="menu-price">${price}</span>
            <p className="menu-description">{description}</p>
          </article>
        );
      })}
    </>
  );
};

export default MenuItem;
