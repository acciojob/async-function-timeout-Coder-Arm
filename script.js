//your JS code here. If required.

const btn = document.getElementById("btn");
const output = document.getElementById("output");

async function display(){
	// event.preventDefault();
	let text = document.getElementById("text").value;
let delay = document.getElementById("delay").value;
  const response = await new Promise((resolve) => {
	  setTimeout(() => {
		  output.innerText = text;
	  },delay)
  });
	return response;
}
btn.addEventListener("click",display);