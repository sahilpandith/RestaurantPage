function contactComponent(){
    const contactCompNode = document.createElement('div');

    const contactHeaderEle = getContactHeader();
    contactCompNode.append(contactHeaderEle);

    const contact1 = new CreateContactCard('Sahil' , 'Chef' , '555-666-7777', 'sahil.something@gmail.com');
    contactCompNode.append(contact1.contactCardNode);

    const contact2 = new CreateContactCard('Romit' , 'Manager' , '555-666-7776', 'romit.something@gmail.com');
    contactCompNode.append(contact2.contactCardNode);

    const contact3 = new CreateContactCard('Goldi' , 'Waiter' , '555-666-7778', 'goldi.something@gmail.com');
    contactCompNode.append(contact3.contactCardNode);
    return contactCompNode;
  }
  
  function getContactHeader(){
    const contactHeaderEle = document.createElement('div');
    contactHeaderEle.classList.add('contact-name-container');
   const contactHeaderLabel = document.createElement('div');
   contactHeaderLabel.classList.add('contact-name');
   contactHeaderLabel.textContent = "contact";

   contactHeaderEle.append(contactHeaderLabel);
   return contactHeaderEle;
}
class CreateContactCard {
  container = document.createElement('div');
  contactNode = document.createElement('div');
  name = document.createElement('div');
  designation = document.createElement('div');
  contact = document.createElement('div');
  email = document.createElement('div');
  constructor(name, designation, contact, email){
    this.container.classList.add('contact-card-container');
    this.contactNode.classList.add('contact-class')
    this.name.textContent = name;
    this.designation.textContent=designation;
    this.email.textContent=email;
    this.contact.textContent=contact;
    this.contactNode.append(this.name);
    this.contactNode.append(this.designation);
    this.contactNode.append(this.contact);
    this.contactNode.append(this.email);
    this.container.append(this.contactNode);
  }

  get contactCardNode (){
    return this.container
  }
}
  export default contactComponent