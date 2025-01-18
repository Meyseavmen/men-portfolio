'use strict';
const videos = [
  { title: "Freelancer Video : ហេតុអ្វីអ្នកគួរជ្រើសរើសឧបករណ៍​ Onn Google TV 4K មួយនេះ?", url: "../video/video1.mp4" },
  { title: "Freelancer Video :ដុំឧបករណ៍​ ​Onn Google TV 4K មួយនេះអាចកែប្រែទូរទស្សន៍អ្នកពីធម្មតាអោយក្លាយទៅជា Smart TV ទូរទស្សន៍ឆ្លាតវៃ​បាន", url: "../video/video2.mp4" },
  { title: "Freelancer Video :កម្មវិធីល្បីៗដែលក្មេងៗអាចប្រើសម្រាប់សិក្សាបានដោយឥតគិតថ្លៃនៅក្នុងដុំឧបករណ៍​ Onn Google TV 4K", url: "../video/video3.mp4" },
  { title: "Freelancer Video :ចូលដល់ឆ្នាំថ្មី 2025 ហើយអ្នកគួរតែពិចារណាតម្លើងទូរទស្សន៍របស់អ្នកអោយក្លាយជាឆ្លាតវៃដូចទូរទស្សន៍ថ្មី ជាមួយនឹងដុំឧបករណ៍ onn Google TV 4K", url: "../video/video4.mp4" },
  { title: "Freelancer Video :អាចទស្សនារឿងល្បីៗនិងថ្មីៗជាច្រើនបានដោយឥតគិតថ្លៃនៅលើដុំ onn Google TV 4K នេះបានហើយ", url: "../video/video5.mp4" },
  { title: "Freelancer Video :ដៃហ្គេម PXN Wireless Gaming Controller P5 ដែលអាចប្រើបានជាមួយឧបករណ៍ជាច្រើនប្រភេទ ជាពិសេសអាចប្រើប្រាស់បានជាមួយដុំឧបករណ៍ onn Google TV 4K", url: "../video/video6.mp4" },
  { title: "Freelancer Video :ដុំឧបករណ៍​ ​Onn Google TV 4K មួយនេះអាចកែប្រែទូរទស្សន៍អ្នកពីធម្មតាអោយក្លាយទៅជា Smart TV ទូរទស្សន៍ឆ្លាតវៃ​បាន", url: "../video/video7.mp4" },
  { title: "Content Creator Video : Car video Landscap video motion", url: "../video/New video adjusted.mp4" },
  { title: "Content Creator Video : Car video Effect Motion", url: "../Video/Carporttrait.mp4" },
  { title: "Content Creator Video : Car video with 3D video Animation", url: "../Video/BMW car new video .mp4" },

];

// Load videos into the list
function loadVideos() {
  const videoList = document.getElementById("video-list");
  videoList.innerHTML = ""; // Clear existing content

  videos.forEach((video, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
                <span class="video-title">${video.title}</span>
                <button class="video-button" onclick="playVideo(${index})">Play Video</button>
            `;
    videoList.appendChild(listItem);
  });
}

// Play video
function playVideo(index) {
  const videoPlayerContainer = document.getElementById("video-player-container");
  const videoPlayer = document.getElementById("video-player");
  const videoSource = document.getElementById("video-source");

  videoSource.src = videos[index].url;
  videoPlayer.load();
  videoPlayerContainer.style.display = "block";
  videoPlayer.play();
}

// Close video player
function closeVideo() {
  const videoPlayerContainer = document.getElementById("video-player-container");
  const videoPlayer = document.getElementById("video-player");

  videoPlayer.pause();
  videoPlayerContainer.style.display = "none";
}

// Load the video list when the page loads
document.addEventListener("DOMContentLoaded", loadVideos);
// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}