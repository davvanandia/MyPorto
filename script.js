function openModal(project) {
  const modal = document.getElementById("modal");
  const title = document.getElementById("modal-title");
  const description = modal.querySelector("p");

  if (project === "Project 1") {
    title.textContent = "Project 1: Responsive Web App";
    description.textContent =
      "This responsive Website are built using MERN stack (Mongodb, Express, React, Node.js)";
  } else if (project === "Project 2") {
    title.textContent = "Project 2: UI Dashboard Design";
    description.textContent =
      "Design UI/UX Website with Figma for Monitoring Agent on Intern at PT. Exatama Mitra Inovasi.";
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}


const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 4 }
  }
});


