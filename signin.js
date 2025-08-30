function validateSignIn()
    {
    var email= document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    
    if (email=== "") {
        alert("email is required");
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
      var emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
 
    alert("signin successful!"); 
    return true; 
}