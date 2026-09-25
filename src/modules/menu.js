export function loadMenu() {
  const content = document.getElementById('content');
  content.textContent='';
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container')
  const menuTitle = document.createElement('h1');
  menuTitle.classList.add('menu-title');
  const menuGrid = document.createElement('div');
  menuGrid.classList.add('menu-grid');
  const item1 = document.createElement('div');
  const itemTitle1 = document.createElement('h3');
  const itemDescription1 = document.createElement('p');
  const itemPrice1 = document.createElement('p');
  const item2 = document.createElement('div');
  const itemTitle2 = document.createElement('h3');
  const itemDescription2 = document.createElement('p');
  const itemPrice2 = document.createElement('p');
  const item3 = document.createElement('div');
  const itemTitle3 = document.createElement('h3');
  const itemDescription3 = document.createElement('p');
  const itemPrice3 = document.createElement('p');

  item1.classList.add('menu-item');
  item2.classList.add('menu-item');
  item3.classList.add('menu-item');
  menuTitle.textContent = "Our Menu";
  itemTitle1.textContent = "Classic Cheeseburger";
  itemDescription1.textContent = "Juicy beef patty topped with cheddar cheese, lettuce, tomato, and signature sauce.";
  itemPrice1.textContent = "$12.99";
  itemTitle2.textContent = "Margherita Pizza";
  itemDescription2.textContent = "Fresh mozzarella, tomatoes, and basil on a crispy thin crust";
  itemPrice2.textContent = "$14.50";
  itemTitle3.textContent = "Caesar Salad";
  itemDescription3.textContent = "Crisp romaine lettuce, parmesan cheese, crunchy croutons, and Caesar dressing.";
  itemPrice3.textContent = "$9.99";

  item1.appendChild(itemTitle1);
  item1.appendChild(itemDescription1);
  item1.appendChild(itemPrice1);

  item2.appendChild(itemTitle2);
  item2.appendChild(itemDescription2);
  item2.appendChild(itemPrice2);

  item3.appendChild(itemTitle3);
  item3.appendChild(itemDescription3);
  item3.appendChild(itemPrice3);

  menuGrid.appendChild(item1);
  menuGrid.appendChild(item2);
  menuGrid.appendChild(item3);

  menuContainer.appendChild(menuTitle);
  menuContainer.appendChild(menuGrid);

  content.appendChild(menuContainer);







}