const signupHnadler = async () => {
    const first_name = document.getElementById('firstname').value.trim();
    const last_name = document.getElementById('lastname').value.trim();
    const account_name = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if(first_name && last_name && account_name && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, account_name, password}),
            headers: { "Content-Type": "application/json"}
        });
    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert("Failed to signup");
    }
    }
}
document.getElementById('signup-form').addEventListener('submit', signupHnadler);