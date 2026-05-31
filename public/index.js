let activePage = 0
const slidesBtns = document.querySelector('.cards-swapper')
const track = document.querySelector('.cards__list')
const cards = document.querySelectorAll('.cards__item')
const viewPort = document.querySelector('.slider__viewport')
const gap = parseInt(
  getComputedStyle(track).columnGap || getComputedStyle(track).gap,
)
const cardWidth = cards[0].offsetWidth + gap
const clientWidth = viewPort.offsetWidth
const visibleCards = Math.floor(clientWidth / cardWidth)
const slideCount = document.getElementById('slide-counter')
const maxIndex = cards.length - visibleCards - 1
slideCount.textContent = `${activePage + 1} из ${maxIndex + 1}`
slidesBtns.addEventListener('click', (e) => {
  if (!e.target.closest('#prev') && !e.target.closest('#next')) {
    console.log(NaN)
    return
  }
  if (e.target.closest('#prev')) {
    if (activePage === 0) return
    activePage -= 1
  }
  if (e.target.closest('#next')) {
    if (activePage === maxIndex) return
    activePage += 1
  }
  track.style.transform = `translateX(-${activePage * cardWidth}px)`
  slideCount.textContent = `${activePage + 1} из ${maxIndex + 1}`
})

console.log(track.offsetWidth)
