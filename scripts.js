/* VARIABLES */

const removeItemBtn = document.querySelector('.list__btn--remove');
const addItemBtn = document.querySelector('.list__btn--add');
const list = document.querySelector('.list__entries');
const listInput = document.getElementById('list__input');


/* FUNCTIONS */

// Function to delete a list item
function deleteItem() {
  const activeItem = document.querySelector('.list__item--active');
  if(activeItem) activeItem.remove(); // If we don't have an active element nothing will happen, no errors.
}

// Function to create a new list item
function createItem() {
  if(listInput.value !== '') {
    const newListItem = document.createElement('li');
    newListItem.classList.add('list__item');
    newListItem.textContent = listInput.value;
    list.prepend(newListItem);
    listInput.value = '';
  } else {
    listInput.placeholder = 'Describe your task';
  }

}


/* EVENT LISTENERS */

list.addEventListener('click', (e) => {
  const listItems = Array.from(list.children);

  if(e.target.classList.contains('list__item')) {
    listItems.forEach(item => item.classList.remove('list__item--active'));
    e.target.classList.add('list__item--active');
  }
});

removeItemBtn.addEventListener('click', deleteItem);

addItemBtn.addEventListener('click', createItem);

window.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') createItem();
})

