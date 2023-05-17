import initialPageLoad from "./initialPageLoad";
import homeComponent from "./components/homeComponent";
import menuComponent from "./components/menuComponent";
import contactComponent from "./components/contactComponent";
import './style.css';

const htmlLayout = initialPageLoad();
const content = document.querySelector('#content');
content.append(htmlLayout);

const homeTab = document.querySelector('.home-tab');
const menuTab = document.querySelector('.menu-tab');
const contactTab = document.querySelector('.contact-tab');

const homeNode = homeComponent();
const menuNode = menuComponent();
const contactNode = contactComponent();

const main = document.querySelector('main');
removeAllChildren(main);
main.append(homeNode);

homeTab.addEventListener('click', function(event){
    if(this.classList.contains('selected-tab'))  return;
    this.classList.add('selected-tab');
    menuTab.classList.remove('selected-tab');
    contactTab.classList.remove('selected-tab');
    removeAllChildren(main);
    main.append(homeNode);

})

menuTab.addEventListener('click', function(event){
    if(this.classList.contains('selected-tab'))  return;
    this.classList.add('selected-tab');
    homeTab.classList.remove('selected-tab');
    contactTab.classList.remove('selected-tab');
    removeAllChildren(main);
    main.append(menuNode);
})

contactTab.addEventListener('click', function(event){
    if(this.classList.contains('selected-tab'))  return;
    this.classList.add('selected-tab');
    menuTab.classList.remove('selected-tab');
    homeTab.classList.remove('selected-tab');
    removeAllChildren(main);
    main.append(contactNode);
})

function removeAllChildren(parent){
    while(parent.hasChildNodes()){
        parent.removeChild(parent.firstChild);
    }
}