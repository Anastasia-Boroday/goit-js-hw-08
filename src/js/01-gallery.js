// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector('.gallery');
const imgsBlock = createImageBlock(galleryItems);


galleryRef.insertAdjacentHTML('beforeend', imgsBlock);

function createImageBlock(img) {
    return img.map(({ preview, original, description }) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
             />
        </a>
    </div>
`
    ).join('');
};
// -----------------------------------------------------------------------------
new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: "img",
    captionsData: "alt",
    captionDelay: 250,
});


