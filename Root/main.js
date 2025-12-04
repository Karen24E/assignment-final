function showPage(pageName) {
  // hide all pages
  document
    .querySelectorAll("dashboard-page, task-page, community-page")
    .forEach((page) => (page.style.display = "none"));

  // show selected page
  const pageToShow = document.querySelector(pageName);
  if (pageToShow) {
    pageToShow.style.display = "block";
  }
}

// show dashboard by default
document.addEventListener("DOMContentLoaded", () => {
  showPage("dashboard-page");
});
