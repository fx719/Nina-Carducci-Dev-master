/**
 * Filters the gallery's pictures' display using categories' buttons' attribute data-category-name's value 
 * and pictures' attribute data-gallery-tag's value.
 * @param {MouseEvent} e 
 * @param {HTMLElement} parentGalleryElement 
 */
export const displayPicturesBycategory = (e, parentGalleryElement) => {
    let buttonCategoryName = e.target.dataset.categoryName
    const pictures = Array.from(parentGalleryElement.children)
    if (buttonCategoryName === 'tous') {
        pictures.forEach(picture => picture.setAttribute("style", "display: block;"))
    } else {
        let picturesToDisplay = pictures.filter(picture => picture.dataset.galleryTag === buttonCategoryName)
        pictures.forEach(picture => picture.setAttribute("style", "display: none;"))
        picturesToDisplay.forEach(pictureToDisplay => pictureToDisplay.setAttribute("style", "display: block;"))
    }

}