// var h = document.createElement('h1');
// var myValue = document.createTextNode('Hello World!');
// h.appendChild(myValue);
// document.querySelector('h1').appendChild(h);

var ul = document.getElementById('list');
var li;

function storeItems(){
    
    
}

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem); 

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

var removeButton = document.getElementById('removeAll');
removeButton.addEventListener('click', removeAllItems);



function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textNode = document.createTextNode(item);

    if (item === ' '){
        alert("Please enter valid todo.");
         return false;
    } else {
        localStorage.setItem('TODO', item); 
        li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        var label = document.createElement('label');
        label.setAttribute('for', 'item');

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);

        setTimeout(() => {
            li.className = 'visual';
        }, 2);
        
        input.value = " ";
    }
}

function removeItem(){
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked){
            ul.removeChild(li[index]);
        }    
    }
}

function removeAllItems(){
    li = ul.children;
    let index = 0;
    
    while (index != ul.children.length) {
        ul.removeChild(li[index]);
    }
    localStorage.clear();
}