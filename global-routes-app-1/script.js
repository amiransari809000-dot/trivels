// This file contains the JavaScript code that adds interactivity to the web application.

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departure-date').value;
    const passengers = document.getElementById('passengers').value;

    // Validate input
    if (!departure || !destination || !departureDate || passengers <= 0) {
        document.getElementById('searchMessage').textContent = 'Please fill in all fields correctly.';
        return;
    }

    // Display search message
    document.getElementById('searchMessage').textContent = `Searching for flights from ${departure} to ${destination} on ${departureDate} for ${passengers} passenger(s)...`;

    // Here you can add further functionality to handle the search logic
});