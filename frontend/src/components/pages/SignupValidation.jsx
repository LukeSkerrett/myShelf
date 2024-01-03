function validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^.{8,}$/

    if (values.name === ""){
        error.name = "Name should not be empty"
    }
    else{
        error.name = "";
    }
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
        error.password = "Password must be at least 8 characters"
    }
    else{
        error.password = ""
    }

    return error;
}

export default validation;