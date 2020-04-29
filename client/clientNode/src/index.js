const hello = require("./hello");
console.log("indexjs",hello())

const cros = require("./cros");


document.querySelector('#root').appendChild(hello());
// document.querySelector('#root').appendChild(cros());