const portfolioGallery = document.getElementById('gallery')
const categoriesButtonsDiv = document.querySelector('.pictures-categories-buttons')
const galleryPictures = document.querySelectorAll(".gallery-item")
let categories = []

for (let galleryPicture of galleryPictures) {
    let picturePathCategory = galleryPicture.getAttribute("src").slice(24)
    let slashToEnd = picturePathCategory.indexOf("/")
    let pictureCategory = picturePathCategory.slice(0, slashToEnd)
    galleryPicture.dataset.galleryTag = pictureCategory
    if (categories.indexOf(pictureCategory) === -1) {
        categories.push(pictureCategory)
    }

}

for (let category of categories) {
    let categoryButton = document.createElement("button")
    categoryButton.setAttribute("class", "picture-category-button")
    categoryButton.dataset.categoryName = category
    categoryButton.innerText = category[0].toUpperCase() + category.slice(1)
    categoriesButtonsDiv.appendChild(categoryButton)

}
