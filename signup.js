function validateform()
    {
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    
    if (email === "") {
        alert("Username is required");
        return false;
    }
    if (password === "") {
        alert("Password is required");
        return false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }
    if (confirmpassword === "") {
        alert("Please confirm your password");
        return false;
    }
    if (password !== confirmpassword) {
        alert("Passwords do not match");
        return false;
    }
      var emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
 
    alert("signup successful!"); 
    return true; 
}