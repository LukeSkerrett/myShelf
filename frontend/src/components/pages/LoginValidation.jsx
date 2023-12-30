function validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === ""){
        error.email = "Email can not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email does not exist"
    }
    else{
        error.email = ""
    }

    if(values.password === ""){
        error.password = "Password can not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Incorrect password. Please try again"
    }
    else{
        error.password = ""
    }

    return error;
}

export default validation;