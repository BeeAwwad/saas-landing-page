// Lazy load images

const blurDivArray = document.querySelectorAll(".blur__div")

blurDivArray.forEach((blurDiv) => {
  const img = blurDiv.querySelector("img")
  function loaded() {
    blurDiv.classList.add("loaded")
  }
  if (img.complete) {
    loaded()
  } else {
    img.addEventListener("load", loaded)
  }
})

// Scroller Testimonials

const scrollers = document.querySelectorAll(".scroller")

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation()
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true)
  })
}
