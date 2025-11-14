function signup(userName){
    let user =["emp123","emp456","emp789"];
    let userFound = false;
    
    for(let i=0; i<user.length; i++){
        if(user[i] === userName){
            userFound = true;
        }
    }

    if(userFound === true){
        return "User Already Registered, Please Login";
    }else{
        user.push(userName);
        return "Signup Successful, Please Login";
    }

}
console.log(signup("emp123")); // User Already Registered, Please Login
console.log(signup("emp999")); // Signup Successful, Please Login