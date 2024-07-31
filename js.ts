document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the default form submission behavior

            // Basic form validation (optional)
            const name = form.querySelector('#name').value.trim();
            const email = form.querySelector('#email').value.trim();
            const message = form.querySelector('#message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                return;
            }

            // Form submission handling
            alert('Thank you for reaching out! We will get back to you shortly.');

            // Reset the form fields
            form.reset();
        });
    } else {
        console.error('Form with ID "contact-form" not found.');
    }
});
