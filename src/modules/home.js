
export function loadHome() {
  const content = document.getElementById('content');
  content.textContent="";
  const homeContainer = document.createElement('div')
  const heroTitle = document.createElement('h1');
  const description = document.createElement('p');
  const hoursCard = document.createElement('div');
  const hoursTitle = document.createElement('h3');
  const hoursList = document.createElement('ul')
  const list1 = document.createElement('li');
  const list2 = document.createElement('li');
  const list3 = document.createElement('li');
  const locationCard = document.createElement('div');
  const locationTitle = document.createElement('h3');
  const locationAddress = document.createElement('p')
  homeContainer.classList.add("home-container");
  heroTitle.classList.add("hero-title");
  description.classList.add('home-description');
  hoursCard.classList.add('hero-card');
  locationCard.classList.add('location-card');
  heroTitle.textContent = "The Golden Spoon";
  description.textContent = "Welcome to The Golden Spoon! We serve fresh,organic, and delicious meals made with love every single day.";
  hoursTitle.textContent = "Operating Hours";
  list1.textContent = "Mon - Thu: 10:00 AM - 10:00 PM";
  list2.textContent = "Fri - Sat: 10:00 AM - 11:30 PM";
  list3.textContent = "Sunday: Closed";
  locationTitle.textContent = "Location";
  locationAddress.textContent = "123 Gourmet Street, Downtown City";
  hoursList.appendChild(list1);
  hoursList.appendChild(list2);
  hoursList.appendChild(list3);
  hoursCard.appendChild(hoursTitle);
  hoursCard.appendChild(hoursList);
  locationCard.appendChild(locationTitle);
  locationCard.appendChild(locationAddress);
  homeContainer.appendChild(heroTitle);
  homeContainer.appendChild(description);
  homeContainer.appendChild(hoursCard);
  homeContainer.appendChild(locationCard);
  content.appendChild(homeContainer);

}