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
