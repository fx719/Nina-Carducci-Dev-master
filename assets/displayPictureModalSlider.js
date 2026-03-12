/**
 * Displays a clicked picture from the homepage gallery into a modal-window-slider.
 * @param {MouseEvent} e 
 * @param {HTMLDialogElement} modalWindow 
 * @param {HTMLImageElement} displayedImg 
 */
export const displayPictureModalSlider = (e, modalWindow, displayedImg) => {
    try {
        e.preventDefault()
        const pictureToShowSrc = e.target.attributes.src.value
        const pictureToShowId = e.target.dataset.pictureGalleryId
        modalWindow.showModal()
        modalWindow.addEventListener("click", () => { modalWindow.close() })
        modalWindow.querySelector('.modal-stop-propagation').addEventListener("click", (event) => { event.stopPropagation() })
        displayedImg.setAttribute("src", pictureToShowSrc)
        displayedImg.dataset.modalPictureId = pictureToShowId
        displayedImg.setAttribute("style", "width: 466px;")
    } catch (error) {
        console.error(error)
    }

}