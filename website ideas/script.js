document.addEventListener('DOMContentLoaded', function() {
  // Form submission handler
  document.getElementById('inputForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Get input value
      const name = document.getElementById('nameInput').value;

      // Display result
      document.getElementById('result').textContent = `Hello, ${name}!`;

      // Optional: Store input in localStorage
      localStorage.setItem('username', name);
  });

  // Check if there's a stored username and display a greeting
  const storedName = localStorage.getItem('username');
  if (storedName) {
      document.getElementById('result').textContent = `Welcome back, ${storedName}!`;
  }
});
