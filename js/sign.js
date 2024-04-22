// Show Password and Icon

const eyeIcon = document.querySelector("#eye-icon")
console.log("🚀 ~ eyeIcon:", eyeIcon)
const password = document.querySelector("#password")

eyeIcon.onclick = () => {
  if (password.type === "password") {
    password.type = "text"
    eyeIcon.classList.toggle("show__eye")
  } else {
    password.type = "password"
    eyeIcon.classList.toggle("show__eye")
  }
}

// Lazy load welcome back image

const blurDiv = document.querySelector(".blur__div")
const img = blurDiv.querySelector("img")
function loaded() {
  blurDiv.classList.add("loaded")
}
if (img.complete) {
  loaded()
} else {
  img.addEventListener("load", loaded)
}
