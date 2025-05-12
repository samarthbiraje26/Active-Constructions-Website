// Example JavaScript for form submission alert
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting Active Constructions! We'll get back to you soon.");
  this.reset();
});
