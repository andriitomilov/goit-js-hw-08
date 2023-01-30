// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const createGalleryMarkup = array =>
  array
    .map(
      ({ original, preview, description }) =>
        `<a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>`
    )
    .join('');

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


