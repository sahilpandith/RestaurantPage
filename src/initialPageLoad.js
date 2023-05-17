function initialPageLoad(){
    const container = document.createElement('div');
    container.classList.add('container');
    
    const headerNode = createHeaderNode();
    const mainNode = createMainNode();
    const footerNode = createFooterNode();

    container.append(headerNode);
    container.append(mainNode);
    container.append(footerNode);

    return container;

}

function createHeaderNode (){
    const header = document.createElement('header');

    const home = document.createElement('div');
    home.classList.add('home-tab');
    home.classList.add('selected-tab');
    home.textContent = 'Home';

    const menu = document.createElement('div');
    menu.classList.add('menu-tab');
    menu.textContent = "Menu";

    const contact = document.createElement('div');
    contact.classList.add('contact-tab');
    contact.textContent = "Contact";

    header.append(home);
    header.append(menu);
    header.append(contact);
    return header;
}

function createMainNode(){
    const main = document.createElement('main');
    return main;
}

function createFooterNode(){
    const footer = document.createElement('footer');
    footer.innerHTML = `<ul>
    <li>
      <a class="attribution icons2" href="http://www.freepik.com" title="Freepik">Hive icon made by Freepik - www.flaticon.com</a>
    </li>
    <li>
      <a class="attribution icons" href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Bee icons made by Smashicons - www.flaticon.com</a>
    </li>
    <li>
      <a class="attribution" href="https://www.freepik.com/vectors/food">Background image created by dgim-studio - www.freepik.com</a>
    </li>
  </ul>`;
    return footer;
}
export default initialPageLoad;

