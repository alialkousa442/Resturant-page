export function loadContact() {
  const content = document.getElementById('content');
  content.textContent = "";
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');

  const contactTitle = document.createElement('h1');
  contactTitle.classList.add('contact-title');
  contactTitle.textContent = "Contact us ...";
  const infoCards = document.createElement('div');

  const phoneCard = document.createElement('div');
  const phoneTitle = document.createElement('h3');
  phoneTitle.textContent = "Get in Touch";
  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = "Phone: (555) 123-4567"
  const emailAddress = document.createElement('p');
  emailAddress.textContent = "Email: contact@goldenspoon.com";

  const addressCard = document.createElement('div');
  const addressTitle = document.createElement('h3');
  addressTitle.textContent = "Visit Us";
  const addressDetails = document.createElement('p');
  addressDetails.textContent = "Address: 123 Gourmet Street, Downtown City";

  const hoursCard = document.createElement('div');
  const hoursTitle = document.createElement('h3');
  hoursTitle.textContent = "Opening Hours";
  const hoursDetails = document.createElement('p');
  hoursDetails.textContent = "Mon - Sat: 10:00 AM - 11:00 PM";

  phoneCard.classList.add('contact-card');
  addressCard.classList.add('contact-card');
  hoursCard.classList.add('contact-card');

  hoursCard.appendChild(hoursTitle);
  hoursCard.appendChild(hoursDetails);

  addressCard.appendChild(addressTitle);
  addressCard.appendChild(addressDetails);

  phoneCard.appendChild(phoneTitle);
  phoneCard.appendChild(phoneNumber);
  phoneCard.appendChild(emailAddress);

  infoCards.appendChild(phoneCard);
  infoCards.appendChild(addressCard);
  infoCards.appendChild(hoursCard);

  contactContainer.appendChild(contactTitle);
  contactContainer.appendChild(infoCards);

  content.appendChild(contactContainer);


}