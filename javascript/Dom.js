const itemList = document.getElementById("item-list");
const addItemButton = document.getElementById("add-item");
const removeItemButton = document.getElementById("remove-item");
const keyPressInput = document.getElementById("key-press-input");
const keyPressOutput = document.getElementById("key-press-output");

// Add a new item to the list
addItemButton.addEventListener('click',()=>{
    const newItem = document.createElement('li')
    const itemNumber = itemList.children.length+1
    newItem.textContent = `Item ${itemNumber}`;
    newItem.style.backgroundColor = "#d1f4d1";
    itemList.appendChild(newItem);
})
// Remove the last item from the list
removeItemButton.addEventListener('click',()=>{
    if(itemList.children.length>0){
        itemList.removeChild(itemList.lastChild)
    }
    else{
        alert('No child element')
    }
})

// Handle key press events
keyPressInput.addEventListener('keyup',(e)=>{
    keyPressOutput.textContent = `You typed ${e.target.value}`
})

// Modify items dynamically (hover effect)
itemList.addEventListener('mouseover',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.style.backgroundColor= "#ffecd1";
    }
})

itemList.addEventListener('mouseout',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.style.backgroundColor =  "#f0f0f0";
    }
})