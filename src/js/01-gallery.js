// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const list = document.querySelector(".gallery");

const listEl = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
).join("");

list.insertAdjacentHTML("afterbegin", listEl);

console.log(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: "250",
    close: true,
});
console.log(galleryItems);
