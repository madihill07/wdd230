const input = document.querySelector('#favchap')
const button = document.querySelector('button');
const list = document.querySelector('.list');


button.addEventListener('click',addButton)

function addButton() {
    
 let listItem = document.createElement('li')
 let listItemButton = document.createElement('button')
 let listItemText = document.createElement('p')
 list.appendChild(listItem);
 let listItemContent = input.value;
 listItem.appendChild(listItemText)
 listItem.appendChild(listItemButton)
 listItemText.innerHTML = listItemContent
 listItemButton.innerHTML = '❌'
 listItemButton.id = 'list-button'
 listItemButton.addEventListener('click',removeItems)
 input.value = '';

 function removeItems() {
    listItemText.remove();
    listItemButton.remove();
 }



input.focus();
}