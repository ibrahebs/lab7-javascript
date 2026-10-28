const form = document.querySelector("#color-form");
const heading = document.querySelector("#heading");
const colorInput = document.querySelector("#color");
const message = document.querySelector("#message");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const color = colorInput.value.trim();

    if (color === "" || !CSS.supports("color", color)) {
        message.textContent = "Please enter a valid color.";
        return;
    }

    heading.style.color = color;
    message.textContent = "";
});
