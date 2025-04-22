import slideImg1 from "./assets/slider-1.jpg";
import slideImg2 from "./assets/slider-2.jpg";
import slideImg3 from "./assets/slider-3.jpg";

import featureImg1 from "./assets/canguro.png";
import featureImg2 from "./assets/remera.png";
import featureImg3 from "./assets/billetera.png";
import featureImg4 from "./assets/carrito.png";

import galleryImg1 from "./assets/gallery-1.jpg";
import galleryImg2 from "./assets/gallery-2.jpg";
import galleryImg3 from "./assets/gallery-3.jpg";
import galleryImg4 from "./assets/gallery-4.jpg";
import galleryImg5 from "./assets/gallery-5.jpg";
import galleryImg6 from "./assets/gallery-6.jpg";
import galleryImg7 from "./assets/gallery-7.jpg";

import testimonialImg1 from "./assets/testimonial-1.jpg";
import testimonialImg2 from "./assets/testimonial-2.jpg";
import testimonialImg3 from "./assets/testimonial-3.jpg";
import testimonialImg4 from "./assets/testimonial-4.jpg";

import menuImg1 from "./assets/bee.png";
import menuImg2 from "./assets/globos.png";
import menuImg3 from "./assets/mountain.png";
import menuImg4 from "./assets/manos.png";
import menuImg5 from "./assets/bee.png";
import menuImg6 from "./assets/globos.png";
import menuImg7 from "./assets/mountain.png";
import menuImg8 from "./assets/manos.png";

export const navLinks = ["home", "about", "menu", "gallery", "testimonials"];

export const homeSlide = [
  {
    img: slideImg1,
    title:
      "Lorem ipsum <span>Dolor Sit Amet</span> consectetur adipiscing elit",
    description:
      "There are many variations of passages orem psum available but the majority have suffered alteration readable content looking page in some form by injected humour.",
  },

  {
    img: slideImg2,
    title:
      "Lorem ipsum <span>Dolor Sit Amet</span> consectetur adipiscing elit",
    description:
      "There are many variations of passages orem psum available but the majority have suffered alteration readable content looking page in some form by injected humour.",
  },

  {
    img: slideImg3,
    title:
      "Lorem ipsum <span>Dolor Sit Amet</span> consectetur adipiscing elit",
    description:
      "There are many variations of passages orem psum available but the majority have suffered alteration readable content looking page in some form by injected humour.",
  },
];

export const featureItem = [
  {
    id: 1,
    img: featureImg1,
    title: "Vestirse es un acto político",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words.",
  },

  {
    id: 2,
    img: featureImg2,
    title: "Caos creativo",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words.",
  },

  {
    id: 3,
    img: featureImg3,
    title: "Somos comunidad",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words.",
  },

  {
    id: 4,
    img: featureImg4,
    title: "Rupturismo",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words.",
  },
];

export const gallery = [
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  galleryImg6,
  galleryImg7,
];

export const testimonialItem = [
  {
    img: testimonialImg1,
    name: "Niesha Phips",
    description:
      "There are many variations passage available the majority have suffered of the alteration in some form by injected humour or randomised words which look even slightly believable.",
    stars: 4.5,
  },

  {
    img: testimonialImg2,
    name: "Daniel Porter",
    description:
      "There are many variations passage available the majority have suffered of the alteration in some form by injected humour or randomised words which look even slightly believable.",
    stars: 5,
  },

  {
    img: testimonialImg3,
    name: "Ebony Swihart",
    description:
      "There are many variations passage available the majority have suffered of the alteration in some form by injected humour or randomised words which look even slightly believable.",
    stars: 4.8,
  },

  {
    img: testimonialImg4,
    name: "Loreta Jones",
    description:
      "There are many variations passage available the majority have suffered of the alteration in some form by injected humour or randomised words which look even slightly believable.",
    stars: 4.4,
  },
];

export const menu = [
  {
    id: 1,
    img: menuImg1,
    images: [menuImg1, galleryImg1],
    category: "Hoodies",
    title: "Abejita",
    description: "It is long established of fact that reader will distracted.",
    price: 50.25,
    reviews: 1600,
    stars: 5,
  },

  {
    id: 2,
    img: menuImg2,
    images: [menuImg2, galleryImg2],
    category: "Hoodies",
    title: "Nubes",
    description: "It is long established of fact that reader will distracted.",
    price: 29.65,
    reviews: 1500,
    stars: 4.9,
  },

  {
    id: 3,
    img: menuImg3,
    images: [menuImg3, galleryImg3],
    category: "Remeras",
    title: "Amanecer montañoso",
    description: "It is long established of fact that reader will distracted.",
    price: 60.35,
    reviews: 1800,
    stars: 4.5,
  },

  {
    id: 4,
    img: menuImg4,
    images: [menuImg4, galleryImg4],
    category: "Hoodies",
    title: "Manos",
    description: "It is long established of fact that reader will distracted.",
    price: 40.79,
    reviews: 1300,
    stars: 4.8,
  },

  {
    id: 5,
    img: menuImg5,
    images: [menuImg5, galleryImg5],
    category: "Remeras",
    title: "Abejita pero diferente",
    description: "It is long established of fact that reader will distracted.",
    price: 25.49,
    reviews: 1700,
    stars: 4.4,
  },

  {
    id: 6,
    img: menuImg6,
    images: [menuImg6, galleryImg6],
    category: "Remeras",
    title: "Nubes pero diferente",
    description: "It is long established of fact that reader will distracted.",
    price: 45.19,
    reviews: 1900,
    stars: 4.5,
  },

  {
    id: 7,
    img: menuImg7,
    images: [menuImg7, galleryImg7, galleryImg2],
    category: "Hoodies",
    title: "Montañas",
    description: "It is long established of fact that reader will distracted.",
    price: 69.25,
    reviews: 1400,
    stars: 4.4,
  },

  {
    id: 8,
    img: menuImg8,
    images: [menuImg8, galleryImg4, galleryImg3],
    category: "Remeras",
    title: "Lift Your Skinny Fists like Antennas to Heaven",
    description: "It is long established of fact that reader will distracted.",
    price: 35.62,
    reviews: 1200,
    stars: 5.0,
  },
];

export const footerLinks = ["about", "menu", "testimonials"];
