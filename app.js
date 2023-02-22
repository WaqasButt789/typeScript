function greet(name) {
    return "Hello, ".concat(name, "!");
}
document.getElementById("greeting").textContent = greet("world");
