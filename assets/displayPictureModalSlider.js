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
        //const pictureToShowAlt = e.target.attributes.alt.value should be used when images'alt attributes will be completed
        modalWindow.showModal()
        displayedImg.setAttribute("src", pictureToShowSrc)
        displayedImg.setAttribute("style", "width: 466px;")
        //displayedImg.setAttribute("alt", pictureToShowAlt) should be used when images'alt attributes will be completed
    } catch (error) {
        console.error(error)
    }

}