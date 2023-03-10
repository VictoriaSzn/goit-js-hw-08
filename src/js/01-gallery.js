// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryDivEl = document.querySelector('.gallery');
const cardsMarkup = CreateMarkup(galleryItems);
galleryDivEl.insertAdjacentHTML('beforeend', cardsMarkup);

function CreateMarkup (cards) {
    return cards
        .map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
            `;
    }).join('');
}
    let gallery = new SimpleLightbox('.gallery__item', {
        animationSlide: false,
        captionsData: "alt",
        captionDelay: 250,
    });



