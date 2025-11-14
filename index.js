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



function login(userName, password){
    let user =[
        {username:"emp123", password:"emp@123"},
        {username:"emp456", password:"emp@456"},
        {username:"emp789", password:"emp@789"}
    ];
    let userFound = null;
    for(let i=0; i<user.length; i++){
        if(user[i].username === userName){
            userFound = user[i];
        }
    }
    if(userFound === null){
        return "Please Signup";
    } if(userFound.password !== password){
        return "Wrong Password";
    }
    return "Login Successful";
}

console.log(login("emp123", "emp@123")); // Login Successful
console.log(login("emp999", "emp@999")); // Please Signup
console.log(login("emp456", "wrongpass")); // Wrong Password