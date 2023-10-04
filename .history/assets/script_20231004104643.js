const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
]

const bannerImg = document.querySelector('.banner-img')
const bannerTagLine = document.querySelector('#banner p')

let currentIndex = 0

// Fonction pour changer la diapositive
function changeSlide(index) {
  if (index < 0) {
    index = slides.length - 1
  } else if (index >= slides.length) {
    index = 0
  }
  bannerImg.src = './assets/images/slideshow/' + slides[index].image
  bannerTagLine.innerHTML = slides[index].tagLine

  document
    .querySelectorAll('.dot')
    .forEach((dot) => dot.classList.remove('dot_selected'))

  const activeDot = dotsContainer.children[index]
  activeDot.classList.add('dot_selected')

  currentIndex = index
}

document.getElementById('left-arrow').addEventListener('click', function () {
  changeSlide(currentIndex - 1)
})
document.getElementById('right-arrow').addEventListener('click', function () {
  changeSlide(currentIndex + 1)
})
