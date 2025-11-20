const loginScreen = document.getElementById("login-screen");
const jarvisScreen = document.getElementById("jarvis-screen");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const consoleOutput = document.getElementById("console-output");
const commandInput = document.getElementById("command");

document.getElementById("loginBtn").addEventListener("click", () => {
    const user = usernameInput.value.trim();
    const pass = passwordInput.value.trim();

    if (user === "admin" && pass === "1234") {
        startJarvis("ADMIN");
    } else {
        alert("Invalid login!");
    }
});

document.getElementById("guestBtn").addEventListener("click", () => {
    startJarvis("GUEST");
});

function startJarvis(mode) {
    loginScreen.classList.add("hidden");
    jarvisScreen.classList.remove("hidden");

    typeText(`> JARVIS ONLINE  
> ACCESS LEVEL: ${mode}  
> How can I assist you today?`);
}

function typeText(text) {
    let i = 0;
    const speed = 20;

    const line = document.createElement("div");
    consoleOutput.appendChild(line);

    function typing() {
        if (i < text.length) {
            line.innerHTML += text.charAt(i);
            i++;
            consoleOutput.scrollTop = consoleOutput.scrollHeight;
            setTimeout(typing, speed);
        }
    }
    typing();
}

document.getElementById("sendBtn").addEventListener("click", () => {
    runCommand();
});

commandInput.addEventListener("keydown", e => {
    if (e.key === "Enter") runCommand();
});

function runCommand() {
    const cmd = commandInput.value.trim();
    if (!cmd) return;

    typeText("> " + cmd);

    if (cmd.toLowerCase() === "hello") {
        typeText("Hello, user.");
    } else if (cmd.toLowerCase() === "help") {
        typeText("Available commands: hello, help, clear");
    } else if (cmd.toLowerCase() === "clear") {
        consoleOutput.innerHTML = "";
    } else {
        typeText("Unknown command.");
    }

    commandInput.value = "";
}
