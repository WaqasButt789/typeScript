function greet(name: string): string {
  return `Hello, ${name}!`;
}

document.getElementById("greeting").textContent = greet("world");
