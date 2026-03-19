import { displayPictureModalSlider } from './displayPictureModalSlider.js'
import { displayPicturesBycategory } from './displayPicturesByCategory.js'
import { getTotalPictures } from './getTotalPictures.js'
import { setModalButtonsId } from './setModalButtonsId.js'

const portfolioGallery = document.querySelector('.gallery')
const categoriesButtonsDiv = document.querySelector('.pictures-categories-buttons')
const galleryPictures = document.querySelectorAll(".gallery-item")
const pictureModalSlider = document.getElementById('picture-modal-slider')
const allPicturesButton = document.getElementById('all-pictures-button')
const displayedModalPicture = document.getElementById('modal-picture')
let previousImgButton = document.querySelector('.modal-previous-picture')
let nextImgButton = document.querySelector('.modal-next-picture')
let modalSliderButtons = document.querySelectorAll('#picture-modal-slider button')

// This array is used to create categories' buttons
let categories = []

// Used to navigate between pictures in the modal-window pictures' slider
let numberOfPictures = portfolioGallery.children.length

// Puts the focus on the 'Tous' button in the gallery 
allPicturesButton.focus({ preventScroll: true })


// Besides adding clickable event listener on each picture,
// this loop retrieves pictures' categories  using their src attributes, to dynamically create categories' buttons.
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



// Creates categories' buttons using the categories Array
for (let category of categories) {
    let categoryButton = document.createElement("button")
    categoryButton.setAttribute("class", "picture-category-button")
    categoryButton.dataset.categoryName = category
    categoryButton.innerText = category[0].toUpperCase() + category.slice(1)
    categoriesButtonsDiv.appendChild(categoryButton)

}

// Filters pictures' display using button's category name
const categoriesButtons = document.querySelectorAll(".picture-category-button")
categoriesButtons.forEach(categoriesButton => categoriesButton.addEventListener("click", (e) => {
    displayPicturesBycategory(e, portfolioGallery, numberOfPictures)
    numberOfPictures = getTotalPictures(numberOfPictures)
}))



pictureModalSlider.addEventListener('toggle', (e) => {
    if (e.newState === "open") {
        let zoomedInPicture = pictureModalSlider.children[0].children[1]
        let zoomedInPictureId = parseInt(zoomedInPicture.dataset.modalPictureId)
        setModalButtonsId(zoomedInPictureId, previousImgButton, nextImgButton, numberOfPictures)

    }
})

// Displays next or previous picture in the modal-window pictures' slider, by changing the img's attributes. 
modalSliderButtons.forEach(modalSliderButton => {
    modalSliderButton.addEventListener("click", (e) => {
        let buttonIdAttribute = e.target.attributes.id.value
        let targetedImgId = buttonIdAttribute.slice(14)
        let targetedImg = document.querySelector(`img[data-picture-gallery-id="${targetedImgId}"]`)
        displayedModalPicture.setAttribute("src", targetedImg.src)
        displayedModalPicture.dataset.modalPictureId = targetedImgId
        setModalButtonsId(parseInt(displayedModalPicture.dataset.modalPictureId), previousImgButton, nextImgButton, numberOfPictures)
    })
})

