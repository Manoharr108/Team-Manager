// JavaScript for submitting the form using fetch
document.getElementById('categoryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission


    // Get form data
    const employeeData = {
        // name: document.getElementById('name'). = "",
        // photo: document.getElementById('photo'). = "",
        // role: document.getElementById('role') = "",
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
});
//delete starts now

    // document.getElementById('employeeDeleteForm').addEventListener('submit', function(event) {
    //     event.preventDefault(); // Prevent default form submission
        
    //     // Get form data
    //     const employeeData = {
    //         id: document.getElementById('id').value
    //     };
        
    //     // Use fetch to send a DELETE request to the server
    //     fetch(`/delete/${employeeData.id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         // Display a success message
    //         document.getElementById('resultMessage').innerHTML = `<div class="alert alert-success">${data.message}</div>`;
    //     })
    //     .catch(error => {
    //         // Display an error message
    //         document.getElementById('resultMessage').innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
    //     });
    // });
    
    
    // //this is modify/edit section
    
    // document.getElementById('employeeModifyForm').addEventListener('submit',async function(event) {
    //     event.preventDefault(); // Prevent default form submission
        
    //     // Get form data
    //     const employeeData = {
    //         id: document.getElementById('id').value,
    //         name: document.getElementById('name').value,
    //         photo: document.getElementById('photo').value,
    //         role: document.getElementById('role').value,
    //         category: document.getElementById('category').value
    //     };
        
    //     // Use fetch to send a PUT request to the server
    //     fetch('/edit', {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(employeeData), // Send the employee data as JSON
    //     })
    //     .then(data => {
    //         // Display a success message
    //         document.getElementById('resultMessage').innerHTML = `<div class="alert alert-success">${data.message}</div>`;
    //         console.log(data)
    //     })
    //     .catch(error => {
    //         // Display an error message
    //         document.getElementById('resultMessage').innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
    //         console.error('Error:', error);
    //     });
    // });
    