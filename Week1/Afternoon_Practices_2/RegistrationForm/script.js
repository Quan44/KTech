document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    // Clear all errors
    [
        'fullNameError', 'emailError', 'passwordError', 'confirmPasswordError', 'phoneError', 'genderError', 'dobError', 'countryError', 'hobbiesError', 'profilePicError', 'bioError'
    ].forEach(id => document.getElementById(id).textContent = '');

    // Full Name
    const fullName = document.getElementById('fullName').value.trim();
    if (fullName === '') {
        document.getElementById('fullNameError').textContent = 'Full Name is required.';
        valid = false;
    } else if (fullName.length < 3) {
        document.getElementById('fullNameError').textContent = 'Full Name must be at least 3 characters.';
        valid = false;
    }
    // Email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address.';
        valid = false;
    }
    // Password
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters.';
        valid = false;
    } else if (!/[A-Za-z]/.test(password) || !/\d/.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must contain both letters and numbers.';
        valid = false;
    }
    // Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        valid = false;
    }
    // Phone
    const phone = document.getElementById('phone').value.trim();
    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Phone number is required.';
        valid = false;
    } else if (!/^\d+$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must contain digits only.';
        valid = false;
    } else if (phone.length < 10) {
        document.getElementById('phoneError').textContent = 'Phone number must be at least 10 digits.';
        valid = false;
    }
    // Gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('genderError').textContent = 'Please select your gender.';
        valid = false;
    }
    // Date of Birth
    const dob = document.getElementById('dob').value;
    if (!dob) {
        document.getElementById('dobError').textContent = 'Date of Birth is required.';
        valid = false;
    } else {
        const dobDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - dobDate.getFullYear();
        const m = today.getMonth() - dobDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
            age--;
        }
        if (age < 18) {
            document.getElementById('dobError').textContent = 'You must be at least 18 years old.';
            valid = false;
        }
    }
    // Country
    const country = document.getElementById('country').value;
    if (!country) {
        document.getElementById('countryError').textContent = 'Please select your country.';
        valid = false;
    }
    // Hobbies
    const hobbies = document.querySelectorAll('.hobby:checked');
    if (hobbies.length === 0) {
        document.getElementById('hobbiesError').textContent = 'Select at least one hobby.';
        valid = false;
    }
    // Profile Picture (optional, but if provided must be jpg/jpeg/png)
    const profilePic = document.getElementById('profilePic');
    if (profilePic.files && profilePic.files.length > 0) {
        const file = profilePic.files[0];
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!allowedTypes.includes(file.type)) {
            document.getElementById('profilePicError').textContent = 'Profile picture must be a JPG or PNG image.';
            valid = false;
        }
    }
    // Bio
    const bio = document.getElementById('bio').value.trim();
    if (bio.length > 300) {
        document.getElementById('bioError').textContent = 'Bio must be at most 300 characters.';
        valid = false;
    }
    if (valid) {
        alert('Registration successful!');
        this.reset();
    }
});