//Task 1 

//Method 1 
/*
const inf = document.getElementById("test");
inf.textContent = 'Last';

//Method 2
const inf = document.querySelector('#test');
inf.textContent = 'Last';
*/

//Task2
/*
const photo = document.querySelector("img.image")
photo.src="cat.jpg";
window.alert(photo.src);
*/

//Task3
/*
 let element = document.querySelectorAll("#text p");
 element.forEach(function(paragraph, index) {
     console.log(`Selector text ${index}: ${paragraph.textContent}`);
 });
*/

//Task4
/*
function showModal() {
     let unnumbered_list=document.getElementById("list").getElementsByTagName('li');
     let newList=[];
     newList.push(unnumbered_list[0].textContent);
     newList.push(unnumbered_list[unnumbered_list.length-1].textContent);
     newList.push(unnumbered_list[1].textContent);
     newList.push(unnumbered_list[3].textContent);
     newList.push(unnumbered_list[2].textContent);
     alert(newList.join(', '));
}
*/

//Task5
/*
let header=document.querySelector('h1');
    header.style.backgroundColor="lightgreen";

let paragraph = document.getElementById("myDiv");
    paragraph.firstElementChild.style.fontWeight = "bold";
    paragraph.children[1].style.color = "red";
    paragraph.children[2].style.textDecoration = "underline";
    paragraph.lastElementChild.style.fontStyle = "italic";

let listItems = document.querySelectorAll("#myList li");
let text = '';
    listItems.forEach(function(li) {
    text += li.textContent.trim();
    text += '\n';
});
    listItems[0].parentNode.innerHTML = text;

let span=document.querySelector('span');
    span.style.visibility="hidden";
*/

//Task6
/*
let message1 = prompt('Please, enter text');
let message2 = prompt('Please, enter new text');

let firstInput = document.getElementById("input1");
let secondInput = document.getElementById("input2");
    firstInput.value = message1;
    secondInput.value = message2;

let newMessage=firstInput.value;
    firstInput.value = secondInput.value;
    secondInput.value = newMessage;
*/

//Task7
/*
let body = document.body;
let main = document.createElement('main');
let div = document.createElement('div');
let p = document.createElement('p');

main.className = 'mainClass check item';
div.id = 'myDiv';
p.textContent = 'First paragraph';

div.appendChild(p);
main.appendChild(div);
body.appendChild(main);
*/


