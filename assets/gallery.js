import { displayPictureModalSlider } from './displayPictureModalSlider.js'
import { displayPicturesBycategory } from './displayPicturesByCategory.js'
import { getTotalPictures } from './getTotalPictures.js'
import { setModalButtonsId } from './setModalButtonsId.js'

const portfolioGallery = document.querySelector('.gallery')
const categoriesButtonsDiv = document.querySelector('.pictures-categories-buttons')
const galleryPictures = document.querySelectorAll(".gallery-item")
const pictureModalSlider = document.getElementById('picture-modal-slider')
const displayedModalPicture = document.getElementById('modal-picture')
let previousImgButton = document.querySelector('.modal-previous-picture')
let nextImgButton = document.querySelector('.modal-next-picture')
let categories = []
let numberOfPictures = portfolioGallery.children.length



for (let i = 0; i < galleryPictures.length; i++) {
    galleryPictures[i].dataset.pictureGalleryId = i
    let picturePathCategory = galleryPictures[i].getAttribute("src").slice(24)
    let slashToEnd = picturePathCategory.indexOf("/")
    let pictureCategory = picturePathCategory.slice(0, slashToEnd)
    galleryPictures[i].dataset.galleryTag = pictureCategory
    if (categories.indexOf(pictureCategory) === -1) {
        categories.push(pictureCategory)
    }
    galleryPictures[i].addEventListener('click', (e) => {
        displayPictureModalSlider(e, pictureModalSlider, displayedModalPicture)
    })
}




for (let category of categories) {
    let categoryButton = document.createElement("button")
    categoryButton.setAttribute("class", "picture-category-button")
    categoryButton.dataset.categoryName = category
    categoryButton.innerText = category[0].toUpperCase() + category.slice(1)
    categoriesButtonsDiv.appendChild(categoryButton)

}

const categoriesButtons = document.querySelectorAll(".picture-category-button")
categoriesButtons.forEach(categoriesButton => categoriesButton.addEventListener("click", (e) => {
    displayPicturesBycategory(e, portfolioGallery, numberOfPictures)
    numberOfPictures = getTotalPictures(numberOfPictures)
    console.log(numberOfPictures)
}))


pictureModalSlider.addEventListener('toggle', (e) => {
    if (e.newState === "open") {
        let zoomedInPicture = pictureModalSlider.children[0].children[1]
        let zoomedInPictureId = parseInt(zoomedInPicture.dataset.modalPictureId)
        setModalButtonsId(zoomedInPictureId, previousImgButton, nextImgButton, numberOfPictures)
        // if (zoomedInPictureId === 0) {
        //     previousImgButton.setAttribute('id', `go-to-picture-${numberOfPictures - 1}`)
        //     nextImgButton.setAttribute('id', `go-to-picture-${zoomedInPictureId + 1}`)
        // }
        // else if (zoomedInPictureId === numberOfPictures - 1) {
        //     previousImgButton.setAttribute('id', `go-to-picture-${zoomedInPictureId - 1}`)
        //     nextImgButton.setAttribute('id', `go-to-picture-${0}`)
        // } else {
        //     previousImgButton.setAttribute('id', `go-to-picture-${zoomedInPictureId - 1}`)
        //     nextImgButton.setAttribute('id', `go-to-picture-${zoomedInPictureId + 1}`)
        // }

    }
})


