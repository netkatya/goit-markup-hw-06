document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeButton = document.querySelector(".mobile-menu-close");

  // Open menu
  menuButton.addEventListener("click", function () {
    mobileMenu.classList.add("open");
    mobileMenu.classList.remove("closing");
  });

  // Close menu function with animation
  function closeMenu() {
    mobileMenu.classList.add("closing");
    setTimeout(() => {
      mobileMenu.classList.remove("open", "closing");
    }, 300); // Matches the transition duration (0.3s)
  }

  // Close when clicking the close button
  closeButton.addEventListener("click", closeMenu);

  // Close menu when clicking outside of it
  document.addEventListener("click", function (event) {
    if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
      closeMenu();
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
    const orderButton = document.getElementById("orderServiceButton");
    const modalOverlay = document.querySelector(".modal-overlay");
    const closeButton = document.querySelector(".modal-icon");

    // Function to open the modal
    function openModal() {
        modalOverlay.classList.add("is-open");
    }

    // Function to close the modal
    function closeModal() {
        modalOverlay.classList.remove("is-open");
    }

    // Event listeners
    orderButton.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);
    
    // Close modal when clicking outside of it
    modalOverlay.addEventListener("click", function (event) {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });
});