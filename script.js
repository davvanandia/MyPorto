document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you! I'll be in touch soon.");
  this.reset();
});
