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
