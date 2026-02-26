import { displayPictureModalSlider } from './displayPictureModalSlider.js'
import { displayPicturesBycategory } from './displayPicturesByCategory.js'

const portfolioGallery = document.querySelector('.gallery')
const categoriesButtonsDiv = document.querySelector('.pictures-categories-buttons')
const galleryPictures = document.querySelectorAll(".gallery-item")
const pictureModalSlider = document.getElementById('picture-modal-slider')
const displayedModalPicture = document.getElementById('modal-picture')
let categories = []

for (let galleryPicture of galleryPictures) {
    let picturePathCategory = galleryPicture.getAttribute("src").slice(24)
    let slashToEnd = picturePathCategory.indexOf("/")
    let pictureCategory = picturePathCategory.slice(0, slashToEnd)
    galleryPicture.dataset.galleryTag = pictureCategory
    if (categories.indexOf(pictureCategory) === -1) {
        categories.push(pictureCategory)
    }
    galleryPicture.addEventListener('click', (e) => {
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
    displayPicturesBycategory(e, portfolioGallery)
}))