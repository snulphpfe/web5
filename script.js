document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulate API call
  setTimeout(() => {
    document.getElementById('response').innerText = `Thanks, ${name}! Your message has been received.`;
  }, 1000);
});
