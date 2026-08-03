// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:

//     another <h1> that says “I’m in a div”
//     a <p> that says “ME TOO!”
//     Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.



const body = document.querySelector("body");
const redParagraph = document.createElement("p");
const blueHeader3 = document.createElement("h3");
const div = document.createElement("div");
const divChildHeader1 = document.createElement("h1");
const divChildParagraph = document.createElement("p");

redParagraph.classList.add("redParagraph");
redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = "red";
body.appendChild(redParagraph);

blueHeader3.classList.add("blueHeader3");
blueHeader3.textContent = "I'm blue h3!";
blueHeader3.style.color = "blue";
body.appendChild(blueHeader3);

div.classList.add("parentDiv");
div.style.backgroundColor = "pink";
div.style.border = "solid";
body.appendChild(div);

divChildHeader1.classList.add("divChildHeader1");
divChildHeader1.textContent = "I'm in a div!";
div.appendChild(divChildHeader1);

divChildParagraph.classList.add("divChildParagraph");
divChildParagraph.textContent = "ME TOO!";
div.appendChild(divChildParagraph);