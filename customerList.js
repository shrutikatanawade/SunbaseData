// Function to load customer list
function loadCustomerList() {
    fetch('https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${bearerToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const customerList = document.getElementById("customerList");
        customerList.innerHTML = ''; // Clear existing data

        data.forEach(customer => {
            const row = customerList.insertRow();
            row.innerHTML = `
                <td>${customer.first_name}</td>
                <td>${customer.last_name}</td>
                <td>${customer.email}</td>
            `;
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
