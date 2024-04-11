// this code is meant to make the navbar disappear when you scroll down

let prevScrollPos = window.pageYOffset

window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    document.querySelector(".navbar").classList.remove("-translate-y-full")
    document.querySelector(".navbar").classList.add("translate-y-0")
  } else {
    // Scrolling down
    document.querySelector(".navbar").classList.remove("translate-y-0")
    document.querySelector(".navbar").classList.add("-translate-y-full")
  }

  prevScrollPos = currentScrollPos
})

// toggle menu function

const toggleMenu = (toggleId, navId) => {
  const toggle = document.querySelector(toggleId)
  const nav = document.querySelector(navId)
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu")
    toggle.classList.toggle("show-icon")
  })
}

toggleMenu("#nav-toggle", "#drop-menu")

// Image slider moves automatically after 5 seconds

let slideIndex = 1
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n))
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  let i
  let slides = document.getElementsByClassName("my__slides")
  let dots = document.getElementsByClassName("dot")
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" image__active", "")
  }
  slides[slideIndex - 1].style.display = "block"
  dots[slideIndex - 1].className += " image__active"
}

// Automatic Slides
setInterval(() => {
  plusSlides(1)
}, 5000)

// FAQ Accordion

const faqs = document.querySelectorAll(".faq")

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqs.forEach((otherFaq) => {
      if (otherFaq !== faq && otherFaq.classList.contains("active__faq")) {
        otherFaq.classList.remove("active__faq")
        const toggleArrow = otherFaq.querySelector("i")
        const heading = otherFaq.querySelector("h4")
        toggleArrow.style.transform = "rotate(0deg)"
        toggleArrow.style.color = ""
        heading.style.color = ""
      }
    })

    faq.classList.toggle("active__faq")

    const toggleArrow = faq.querySelector("i")
    const heading = faq.querySelector("h4")

    if (faq.classList.contains("active__faq")) {
      toggleArrow.style.transform = "rotate(180deg)"
      toggleArrow.style.color = "#ff346c"
      heading.style.color = "#ff346c"
    } else {
      toggleArrow.style.transform = "rotate(0deg)"
      toggleArrow.style.color = ""
      heading.style.color = ""
    }
  })
})
