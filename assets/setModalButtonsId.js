/**
 * Sets ids to the modal-window pictures' slider navigation buttons, 
 * so the next or previous picture's id can already be known.
 * @param {number} pictureId 
 * @param {HTMLButtonElement} navPreviousElement 
 * @param {HTMLButtonElement} navNextElement 
 * @param {number} sumOfPictures 
 */
export const setModalButtonsId = (pictureId, navPreviousElement, navNextElement, sumOfPictures) => {
    //if the displayed picture is the first one shown in the gallery, then the previous picture will be the last one.
    if (pictureId === 0) {
        navPreviousElement.setAttribute('id', `go-to-picture-${sumOfPictures - 1}`)
        navNextElement.setAttribute('id', `go-to-picture-${pictureId + 1}`)
    }
    //if the displayed picture is the last one  shown in the gallery, then the next picture will be the first one.
    else if (pictureId === sumOfPictures - 1) {
        navPreviousElement.setAttribute('id', `go-to-picture-${pictureId - 1}`)
        navNextElement.setAttribute('id', `go-to-picture-${0}`)
    } else {
        navPreviousElement.setAttribute('id', `go-to-picture-${pictureId - 1}`)
        navNextElement.setAttribute('id', `go-to-picture-${pictureId + 1}`)
    }
}