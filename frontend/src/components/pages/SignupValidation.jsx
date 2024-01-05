function validation(values){
    let error = {}
    const username_pattern = /^.{4,}$/
    if (values.username === ""){
        error.username = "Username can not be empty"
    }
    else if(!username_pattern.test(values.username)){
        error.username = "Username must be at least 4 characters"
    }
    else{
        error.username = "";
    }
    return error;
}

export default validation;