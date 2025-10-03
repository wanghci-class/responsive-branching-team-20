let dark = document.getElementById("dark");
let light = document.getElementById("light");
let def = document.getElementById("default");

dark.addEventListener("click", function(event) {
    event.preventDefault();
    const body = document.querySelector("body");
    body.classList.add("dark");
    body.classList.remove("light");
});

light.addEventListener("click", function(event) {
    event.preventDefault();
    const body = document.querySelector("body");
    body.classList.add("light");
    body.classList.remove("dark");
});

def.addEventListener("click", function(event) {
    event.preventDefault();
    const body = document.querySelector("body");
    body.classList.remove("dark");
    body.classList.remove("light");
});