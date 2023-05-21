import  beeImg from '../assests/bee1.png';
import honeCombImg from '../assests/honeycomb.png';
import honeyTeaImg from '../assests/honeyTea.jpg';
import berryTeaImg from '../assests/berryTea.jpg';
import { CreateCard,CreateImageNode} from '../utilities/utilities.js'

function menuComponent(){
    const menuCompNode = document.createElement('div');
    menuCompNode.classList.add('menu-container');

    const menuHeader = getMenuHeaderElement()
    menuCompNode.append(menuHeader)

    createBeveragesSection(menuCompNode);
    createSidesSection(menuCompNode);
    createMainDishesSection(menuCompNode);
    return menuCompNode;
  }

 
  function getMenuHeaderElement(){
    const menuHeaderContainer = document.createElement('div');
    menuHeaderContainer.classList.add('menu-name-container');

    const menuNameBox = document.createElement('div');
    menuNameBox.classList.add('menu-name-box');

    const img1 = new CreateImageNode(beeImg,'bee-image1');
    
    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-name');
    menuHeader.textContent = `Menu`;

    const img2 = new CreateImageNode(beeImg,'bee-image2');

    menuNameBox.append(img1.imageNode);
    menuNameBox.append(menuHeader);
    menuNameBox.append(img2.imageNode);
    menuHeaderContainer.append(menuNameBox);
    return menuHeaderContainer;
}



function createBeveragesSection(parentNode){
  const beverageCategory = new CreateMenuCategory('Beverages');
  parentNode.append(beverageCategory.menuCategoryNode);

  const honeyTeaEle = new CreateCard('Honey Tea','A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!','30 Rs',honeyTeaImg);
  parentNode.append(honeyTeaEle.node);

  const berryTeaEle = new CreateCard('Berry Tea','A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.','40 Rs',berryTeaImg);
  parentNode.append(berryTeaEle.node);
}

function createSidesSection(parentNode){
  const sidesCategory = new CreateMenuCategory('Sides');
  parentNode.append(sidesCategory.menuCategoryNode);

  const honeyTeaEle = new CreateCard('Toast And jam','A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.','60 Rs',honeyTeaImg);
  parentNode.append(honeyTeaEle.node);

  const berryTeaEle = new CreateCard('Fresh Fruits','A small bowl of fresh fruit, whatever we find at the market for the day.','50 Rs',berryTeaImg);
  parentNode.append(berryTeaEle.node);
}

function createMainDishesSection(parentNode){
  const mainDishesCategory = new CreateMenuCategory('Main Dishes');
  parentNode.append(mainDishesCategory.menuCategoryNode);

  const panCakesEle = new CreateCard('Pan Cakes','A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.','160 Rs',honeyTeaImg);
  parentNode.append(panCakesEle.node);

  const frenchToastEle = new CreateCard('French Toast','Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.','150 Rs',berryTeaImg);
  parentNode.append(frenchToastEle.node);

  const bearyVeggieSandwichEle = new CreateCard('Beary Veggie Sandwich','Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.','260 Rs',honeyTeaImg);
  parentNode.append(bearyVeggieSandwichEle.node);

  const bagelAndLox = new CreateCard('Bagel and Lox','Our house specialty, you cant go wrong with a hearty bagel topped with sustainably harvested salmon.','250 Rs',berryTeaImg);
  parentNode.append(bagelAndLox.node);

  const honeyCombEle = new CreateCard('Honeycomb','Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.','160 Rs',honeyTeaImg);
  parentNode.append(honeyCombEle.node);

  const theBearyBestPorridgeEle = new CreateCard('The Beary Best Porridge','Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.','150 Rs',berryTeaImg);
  parentNode.append(theBearyBestPorridgeEle.node);
  
}

class CreateMenuCategory {
  beverageContainer = document.createElement('div');
  beverage = document.createElement('h3');
  img = new CreateImageNode(honeCombImg,'brev-honey-comb');
  constructor(label){
   this.beverageContainer.classList.add('menu-category-container');
   this.beverage.classList.add('menu-label');
   this.beverage.textContent = label;
   this.beverageContainer.append(this.beverage);
   this.beverageContainer.append(this.img.imageNode);
  }
  get menuCategoryNode (){
    return this.beverageContainer;
  }
}
  export default menuComponent