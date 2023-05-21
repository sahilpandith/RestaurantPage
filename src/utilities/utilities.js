 class CreateCard {
    card = document.createElement('div');
    cardTitle = document.createElement('h3');
    summary = document.createElement('p');
    price = document.createElement('div');
    img;
    constructor(title,summary,price,img){
      this.cardTitle.textContent = title,
      this.summary.textContent = summary;
      this.price.textContent = price;
      this.img = new CreateImageNode(img,'card-image')
      this.card.classList.add('card');
      this.cardTitle.classList.add('card-title');
      this.summary.classList.add('card-summary');
      this.price.classList.add('card-price');
      this.card.append(this.cardTitle);
      this.card.append(this.summary);
      this.card.append(this.price);
      this.card.append(this.img.imageNode);
    }
    get node (){
      return this.card;
    }
  }

  class CreateImageNode {
    node = document.createElement('img');
    constructor(src,classname){
      this.node.src =src;
      this.node.classList.add(classname);
    }
    get imageNode(){
      return this.node;
    }
  }

  export {CreateCard,CreateImageNode}