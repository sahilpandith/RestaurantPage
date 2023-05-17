function menuComponent(){
    const menuCompNode = document.createElement('div');
    menuCompNode.classList.add('menu-container');

    const menuHeader = getMenuHeaderElement()
    menuCompNode.append(menuHeader)
    return menuCompNode;
  }
  
  function getMenuHeaderElement(){
    const menuHeaderContainer = document.createElement('div');
    menuHeaderContainer.classList.add('menu-name-container');

    const img = document.createElement('img');
    img.src ='./assests/bee1.png'
    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-name');
    menuHeader.textContent = "Menu";
    menuHeaderContainer.append(img);
    menuHeaderContainer.append(menuHeader);
    menuHeaderContainer.append(img);
    return menuHeaderContainer;
}
  export default menuComponent