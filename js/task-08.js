const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const emailInput = event.target.elements.email;
    const passwordInput = event.target.elements.password;

    if (emailInput.value === '' || passwordInput.value === '') {
        alert('Please enter all data in the fields');
        return;
    }
    const loginFormData = {
        email: emailInput.value,
        password: passwordInput.value,
    };
    console.log(loginFormData);

    loginForm.reset();
}
