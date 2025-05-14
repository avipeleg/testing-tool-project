console.log("Test page");

fetch('http://localhost:3000/endpoint1')
    .then(res => res.text())
    .then(console.log);