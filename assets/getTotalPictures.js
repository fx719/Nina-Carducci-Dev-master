/**
 * Updates the numberOfPictures to correctly navigate between pictures in the modal-window pictures' slider
 * @param {number} totalPictures 
 * @returns {number}
 */
export const getTotalPictures = (totalPictures) => {
    totalPictures = document.querySelectorAll('.gallery img[style="display: block;"]').length
    return totalPictures
}