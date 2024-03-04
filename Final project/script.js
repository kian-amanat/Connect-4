function getUserName() {
const inputElement = document.querySelector('.name');
const name1 = inputElement.value;
genrateNum()
const mainDiv = document.createElement('div');
const pIndex = document.createElement('p');
pIndex.id = 'index';
pIndex.textContent = "#"+num ;
mainDiv.appendChild(pIndex);
const innerDiv = document.createElement('div');
const h2Name = document.createElement('h2');
h2Name.textContent = name1;
innerDiv.appendChild(h2Name);
mainDiv.appendChild(innerDiv);
const h3Element = document.createElement('h3');
h3Element.textContent = point ;
mainDiv.appendChild(h3Element);
const button = document.createElement('button');
button.id = 'card-btn';
const anchor = document.createElement('a');
anchor.href = 'index.html';
anchor.textContent = 'Start';
button.appendChild(anchor);
mainDiv.appendChild(button);
document.body.appendChild(mainDiv);
mainDiv.style.marginBottom = "-150px";
}


let num = 0
let point = 0
function genrateNum(){
num++
point++
}


