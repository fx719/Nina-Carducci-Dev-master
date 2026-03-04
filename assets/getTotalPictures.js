export const getTotalPictures = (totalPictures) => {
    totalPictures = document.querySelectorAll('.gallery img[style="display: block;"]').length
    return totalPictures
}