// Form Validation and Alert
document.getElementById('applicationForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!name || !email || !phone) {
        event.preventDefault();
        alert('Please fill out all required fields.');
    } else {
        alert('Form submitted successfully!');
    }
});
