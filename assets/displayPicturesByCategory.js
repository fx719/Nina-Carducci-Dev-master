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

        for (let i = 0; i < pictures.length; i++) {
            pictures[i].setAttribute("style", "display: block;")
            pictures[i].dataset.pictureGalleryId = i
        }

    } else {

        let picturesToDisplay = pictures.filter(picture => picture.dataset.galleryTag === buttonCategoryName)
        pictures.forEach(picture => {
            picture.setAttribute("style", "display: none;")
            picture.dataset.pictureGalleryId = ""
        })
        for (let i = 0; i < picturesToDisplay.length; i++) {
            picturesToDisplay[i].setAttribute("style", "display: block;")
            picturesToDisplay[i].dataset.pictureGalleryId = i

        }

    }


}