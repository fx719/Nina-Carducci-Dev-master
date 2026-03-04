export const setModalButtonsId = (pictureId, navPreviousElement, navNextElement, sumOfPictures) => {
    if (pictureId === 0) {
        navPreviousElement.setAttribute('id', `go-to-picture-${sumOfPictures - 1}`)
        navNextElement.setAttribute('id', `go-to-picture-${pictureId + 1}`)
    }
    else if (pictureId === sumOfPictures - 1) {
        navPreviousElement.setAttribute('id', `go-to-picture-${pictureId - 1}`)
        navNextElement.setAttribute('id', `go-to-picture-${0}`)
    } else {
        navPreviousElement.setAttribute('id', `go-to-picture-${pictureId - 1}`)
        navNextElement.setAttribute('id', `go-to-picture-${pictureId + 1}`)
    }
}