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

    const scrollerInner = scroller.querySelector(".scroller__inner")
    const scrollerContent = Array.from(scrollerInner.children)

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      duplicatedItem.setAttribute("aria-hidden", true)
      scrollerInner.appendChild(duplicatedItem)
    })
  })
}
