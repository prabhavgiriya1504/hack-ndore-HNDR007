document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    const goToLoginButton = document.getElementById('goToLogin');
    const goToSignupButton = document.getElementById('goToSignup');
    const mainContent = document.getElementById('main-content');

    let userCredentials = {};

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('reg-name').value;
        const password = document.getElementById('reg-password').value;
        const dob = document.getElementById('reg-dob').value;
        const email = document.getElementById('reg-email').value;


        userCredentials = { name, password, dob, email };

        document.getElementById('registration-message').textContent = 'Registration successful!';
        document.getElementById('registration-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'block';
    });

    goToLoginButton.addEventListener('click', () => {
        document.getElementById('registration-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'block';
    });

    goToSignupButton.addEventListener('click', () => {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('registration-container').style.display = 'block';
    });

    // Login Form Handling
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email === userCredentials.email && password === userCredentials.password) {
            document.getElementById('login-message').textContent = '';
            document.getElementById('login-container').style.display = 'none';
            mainContent.style.display = 'block';
        } else {
            document.getElementById('login-message').textContent = 'Incorrect email or password.';
        }
    });

    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);

            document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
            section.style.display = "block";
        });
    });
});