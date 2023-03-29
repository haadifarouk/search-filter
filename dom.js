/* var items = document.getElementsByClassName('list-group-item');

for (var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = 'pink';
}

var odd = document.querySelectorAll('li:nth-child(odd)');

for (var s = 0; s < odd.length; s++){
    odd[s].style.backgroundColor = '#f4f4f4'
} */






/* //Traversing the dom//
var itemList = document.querySelector('#items');
//parentNode//
//console.log(itemList.parentNode);

//creating a div//
var newDiv = document.createElement('div');

//add class
newDiv.className = 'hello';

//add id
newDiv.id = 'hello1';

//add attriibutes
newDiv.setAttribute('title', 'Hello Div');

//create text node
var newDivText = document.createTextNode('hello world');

//add text to div
newDiv.appendChild(newDivText);


var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);

console.log(newDiv) */



//events


/* var button = document.getElementById('button').addEventListener('click', buttonClicked);
    //console.log(123);
    function buttonClicked(e){
        //console.log(e)
        //document.querySelector('#header-title').textContent = 'Changed';
        //document.querySelector('#main').style.backgroundColor = '#f4f4f4';

        console.log(e.target)
    }  */
//var output = document.querySelector('#output');

var box = document.querySelector('#box');

//var button = document.getElementById('button');
//button.addEventListener('dblclick', runEvent);

//var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('.form-inline');

box.addEventListener('mousemove', runEvent);
//itemInput.addEventListener('blur', runEvent);
//itemInput.addEventListener('cut', runEvent);
//itemInput.addEventListener('paste', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e){
    e.preventDefault();
    console.log(`EVENT TYPE: ${e.type}`);

   /* console.log(e.target.value);
    output.innerHTML = e.target.value; */

   
    //output.innerHTML = `<h3>MouseX: ${e.offsetX} </h3><h3>MouseY: ${e.offsetY}</h3>`

    box.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`
}



//box.addEventListener('mouseleave', endEvent);