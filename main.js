var form = document.querySelector('#addForm');
var itemList = document.querySelector('#items');
var filter = document.querySelector('#filter');

//form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', deleteItem);

//filter event
filter.addEventListener('keyup', filterItems);

//additem

function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;

    //create li element
    var li = document.createElement('li');

    //add class
    li.className = 'list-group-item';
    
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button
    var deleteBtn = document.createElement('button');

    // add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete' ;

    //append text node to delete button
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn);

    //add to ul
    itemList.appendChild(li);
}

function deleteItem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure you want to delete')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// filter items
function filterItems(e){
    // convert to lower case
    var text = e.target.value.toLowerCase();
    //get the whole list
    var items = itemList.getElementsByTagName('li');
    // convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) !== -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}