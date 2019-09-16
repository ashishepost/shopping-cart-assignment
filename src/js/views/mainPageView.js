import {
  elements
} from './base'

export const renderMainPage = () => {
  const markup = `
  
  <section>
    <div class="container">
      <img class="img-shadow" src="assets/images/slides/02.webp" alt="Fruits & Vegetables" style="width:100%">

      <span class="caption-right">Fruits & vegetables</span>
      <span class="sub-caption-right">A variety of fresh fruits & vegetables</span>
      <button class="btn-right container__category--one">Explore fruit-and-veg</button>
    </div>
    <div class="container">
      <img class="img-shadow" src="assets/images/slides/03.webp" alt="Beauty & Hygiene" style="width:100%">

      <span class="caption-left">Beauty & Hygiene</span>
      <span class="sub-caption-left">Buy Beauty & Personal Care Products online in India at Best Prices</span>
      <button class="btn-left container__category--two" value="5b6899123d1a866534f516de"> Explore Bakery & Cakes</button>
    </div>
    <div class="container">
      <img class="img-shadow" src="assets/images/slides/02.webp" alt="Fruits & Vegetables" style="width:100%">

      <span class="caption-right">Fruits & vegetables</span>
      <span class="sub-caption-right">A variety of fresh fruits & vegetables</span>
      <button class="btn-right container__category--three">Explore fruit-and-veg</button>
    </div>
    <div class="container">
      <img class="img-shadow" src="assets/images/slides/03.webp" alt="Beauty & Hygiene"style="width:100%">

      <span class="caption-left">Beauty & Hygiene</span>
      <span class="sub-caption-left">Buy Beauty & Personal Care Products online in India at Best Prices</span>
      <button class="btn-left container__category--four">Explore fruit-and-veg</button>
    </div>
    </section>
  </div>
    `
  elements.landingPage.mainContent.innerHTML = markup
  addElements()
}

const addElements = () => {
  elements.mainPage = {
    categoryOne: document.querySelector('.' + 'container__category--one'),
    categoryTwo: document.querySelector('.' + 'container__category--two'),
    categoryThree: document.querySelector('.' + 'container__category--three'),
    categoryFour: document.querySelector('.' + 'container__category--four')
  }
}
