import './style.css';
import {loadHome} from './modules/home.js';
import { loadMenu } from './modules/menu.js';
import { loadContact } from './modules/contact.js';
const body=document.querySelector('body');
const home=document.createElement('button');
const menu=document.createElement('button');
const contact=document.createElement('button');
const Nav=document.createElement('nav');
const content=document.getElementById('content');
home.textContent="Home";
menu.textContent="Menu";
contact.textContent="Contact";

Nav.appendChild(home);
Nav.appendChild(menu);
Nav.appendChild(contact);

body.insertBefore(Nav,content);

const clickHome=()=>{
    loadHome();
}
home.addEventListener("click",clickHome);

const clickMenu=()=>{
    loadMenu();
}
menu.addEventListener("click",clickMenu)

const clickContact=()=>{
    loadContact();
}
contact.addEventListener("click",clickContact)
loadHome();
