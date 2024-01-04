// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const cardsMarkup = createImageGalleryMarkup(galleryItems);
galleryList.innerHTML = cardsMarkup;

galleryList.addEventListener('click', onGalleryItemsClick);

function createImageGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `    
      <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`
    )
    .join('');
}

function onGalleryItemsClick(event) {
  event.preventDefault();
  const lightbox = new SimpleLightbox('.gallery a', {
    captionData: 'alt',
    captionsDelay: 250,
  });
}



console.log(galleryItems);
