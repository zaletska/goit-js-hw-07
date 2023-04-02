import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");
const arrStrImade = [];
function creatSrtElmGallImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
    })
    .join("");
}
gallery.insertAdjacentHTML("beforeend", creatSrtElmGallImg(galleryItems));
gallery.addEventListener("click", openModalImage);
function openModalImage(elv) {
  elv.preventDefault();
  if (elv.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${elv.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  if (instance.visible()) {
    gallery.addEventListener("keydown", onEsc);
  }
  function onEsc(evt) {
    if (evt.key === "Escape") {
      instance.close();
      gallery.removeEventListener("keydown", onEsc);
    }
  }
}
