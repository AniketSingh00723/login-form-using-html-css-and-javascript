let isLogin = true;

function toggleForm()
{
    const title = document.getElementById("title");
    const button = document.querySelector("button");
    const toogleText = document.querySelector(".toggle");
    document.getElementById("message").innerText = "";

    if(isLogin)
    {
        title.innerText = "Signup";
        button.innerText = "Signup";
        toggleText.innerText = "Already have an account?Login";
    }
    else
    {
        title.innerText = "Login";
        button.innerText = "Login";
        toggleText.innerText = "Don't have an account?SignUp";
    }
    isLogin = !isLogin;
}

function login()
{
    const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
        const message = document.getElementById("message");

        if(username === "" || password === "")
        {
            message.innerText = "please fill all fields!";
            return;
        }
        if(isLogin)
        {
            const storedUser = localStorage.getItem("username");
            const storedPass = localStorage.getItem("password");

            if(username === storedUser && password == storedPass)
            {
                message.style.color = "green";
                message.innerText = "login successful!";
            }
            else{
                message.style.color = "red";
                message.innerText = "Invalid username or password!";
            }
        }
        else{
            localStorage.setItem("username",username);
            localStorage.setItem("password",password);
            message.style.color = "green";
            message.innerText = "signup successful!please login.";
            toggleForm();
        }
}