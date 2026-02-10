const button = document.getElementById("myButton");
const message = document.getElementById("message");

if (button && message){
    button.addEventListener("click", () => {
        if (message.textContent === "Current Mode: Light Mode"){
            message.textContent = "Current Mode: Dark Mode";
            button.textContent = "Light Mode"
        }
        else {
            message.textContent = "Current Mode: Light Mode";
            button.textContent = "Dark Mode"
        }
        document.body.classList.toggle("darkMode");
    });
}