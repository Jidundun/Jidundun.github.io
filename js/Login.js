const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const logoutBtn = document.createElement("button");
logoutBtn.innerText = "Logout";
logoutBtn.classList.add(HIDDEN_CLASSNAME);


function onLoginsubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function logout() {
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload(); 
}

logoutBtn.addEventListener("click", logout);


function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    if (!logoutBtn.isConnected) {
        greeting.after(logoutBtn); 
    }
    logoutBtn.classList.remove(HIDDEN_CLASSNAME); 
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginsubmit);
} else {
    paintGreetings(savedUsername);
}

document.querySelector("#greeting-wrapper").classList.remove(HIDDEN_CLASSNAME);
