function Validation(values) {
    let errors = {};
    const emailPattern = /^\S+@\S+\.\S+$/; // Basic email format validation
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // Password pattern: At least 8 characters, one uppercase letter, one lowercase letter, and one digit
  
    // Check if the email is empty
    if (!values.email==="") {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(values.email)) {
      errors.email = 'Invalid email format';
    }
  
    // Check if the password is empty
    if (!values.password==="") {
      errors.password = 'Password is required';
    } else if (!passwordPattern.test(values.password)) {
      errors.password = 'Password must be at least 8 characters,';
    }
  
    return errors;
  }
  export default Validation;