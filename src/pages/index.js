// * * * IMPORTS * * *
import '../pages/index.css'; // connecting the font table

import gsap from 'gsap/dist/gsap.min.js'; // GSAP
import Draggable from 'gsap/dist/Draggable.min.js'; // GSAP Draggable
import '../vendor/gsap/InertiaPlugin.min.js'; // GSAP Inertia Plugin

import { selectors } from '../utils/constants.js';

// * * * CONSTS * * *
const headerElement = document.querySelector(selectors.header);
const galleryElement = document.querySelector(selectors.gallery);

// * * * MAIN CODE * * *
gsap.registerPlugin(Draggable);

window.onload = function () {
  headerElement.classList.add('header_close');
  galleryElement.classList.add('gallery_open');
  Draggable.create(selectors.gallery, {
    bounds: 'body',
    inertia: true
  });
};
