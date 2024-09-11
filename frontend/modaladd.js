document.getElementById('modalform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const employeeData = {
        name: document.getElementById('name').value,
        photo: document.getElementById('photo').value,
        role: document.getElementById('role').value,
        category: document.getElementById('category').value
    };

    // Use fetch to send a POST request to the server
    fetch('/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData), // Send the employee data as JSON
    })
    .then(response => response.json())
    .then(data => {
        // Display a success message
        document.getElementById('resultMessage').innerHTML = `<div class="alert alert-success">${data.message}</div>`;
    })
    .catch(error => {
        // Display an error message
        document.getElementById('resultMessage').innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
    });
    location.reload()
});