// FAQ Accordion

const faqContainer = document.querySelector(".faq-content");

faqContainer.addEventListener("click", (e) => {
  const groupHeader = e.target.closest(".faq-group-header");

  //   This code essentially asks the question "When the user interacts with any element, what is the closest element with the class name '.faq-group-header'?" The answer is assigned to the variable groupHeader.

  if (!groupHeader) {
    return;
  }

  const group = groupHeader.parentElement;
  const groupBody = group.querySelector(".faq-group-body");
  const icon = groupHeader.querySelector("i");

  // Toggle Icon
  icon.classList.toggle("fa-plus");
  icon.classList.toggle("fa-minus");

  // Toggle answer visibility
  groupBody.classList.toggle("open");

  // We don't want to open multiple answer at the same time. We want one answer to display.

  // For that select all elements with class faq-group
  const otherGroups = faqContainer.querySelectorAll(".faq-group");

  // We want to display the answer of the question we clicked on. We set the display of answer to none on all others. For that make sure we are not setting display none to the one we are clicking.
  otherGroups.forEach((otherGroup) => {
    if (otherGroup !== group) {
      const otherGroupBody = otherGroup.querySelector(".faq-group-body");
      const otherIcon = otherGroup.querySelector(".faq-group-header i");

      otherGroupBody.classList.remove("open");
      otherIcon.classList.remove("fa-minus");
      otherIcon.classList.add("fa-plus");
    }
  });
});

// Mobile Menu

const hamburgerButton = document.querySelector(".hamburger-button");
const mobileMenu = document.querySelector(".mobile-menu");

hamburgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
