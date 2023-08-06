// Function to create a new customer
function createCustomer() {
    const createFirstName = document.getElementById("createFirstName").value;
    const createLastName = document.getElementById("createLastName").value;
    const createEmail = document.getElementById("createEmail").value;
    // ... other customer input fields ...

    const formData = {
        first_name: createFirstName,
        last_name: createLastName,
        email: createEmail,
        // ... other customer fields ...
    };

    fetch('https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.status === 201) {
            alert('Customer created successfully.');
        } else {
            alert('Customer creation failed.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

