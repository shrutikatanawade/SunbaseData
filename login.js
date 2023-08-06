// Function to authenticate user and get bearer token
function authenticate() {
    const loginId = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const authData = {
        login_id: loginId,
        password: password
    };

    fetch('https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(authData)
    })
    .then(response => {
        if (response.status === 401) {
            alert('Authentication failed.');
        } else {
            return response.json();
        }
    })
    .then(data => {
        if (data.token) {
            // Store the token for future API calls
            bearerToken = data.token;
            alert('Authentication successful. Token received.');
             window.location.href = 'customerList.html';
        } else {
            alert('Authentication failed.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
