document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // This is where you'd send the email. For now, we'll just simulate it.
    document.getElementById('form-status').innerText = "Sending message...";

    // Replace with actual email sending logic
    setTimeout(() => {
        document.getElementById('form-status').innerText = "Message sent successfully!";
        document.getElementById('contact-form').reset();
    }, 2000);
});