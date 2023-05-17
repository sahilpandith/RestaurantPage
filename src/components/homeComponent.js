function homeComponent(){
  const homeCompNode = document.createElement('div');
  const restaurantName = getRestaurantNameElement();
  homeCompNode.append(restaurantName);
  const summary = getSummaryElement();
  homeCompNode.append(summary);
  const timings = getTimingsElement();
  homeCompNode.append(timings);
  const location = getLocationElement();
  homeCompNode.append(location);
  return homeCompNode
}

function getRestaurantNameElement(){
    const restaurantNameContainer = document.createElement('div');
    restaurantNameContainer.classList.add('restaurant-name-container');
   const restaurantName = document.createElement('div');
   restaurantName.classList.add('restaurant-name');
   restaurantName.textContent = "Beary's Breakfast Bar";

   restaurantNameContainer.append(restaurantName);
   return restaurantNameContainer;
}
function getSummaryElement(){
    const summary = document.createElement('div');
    summary.classList.add('summary');
    const review = document.createElement('p');
    review.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
    const customer = document.createElement('p');
    customer.textContent = "- Sahil";
    summary.append(review);
    summary.append(customer);
    return summary;
    
}
function getTimingsElement(){
   const timingsNode = document.createElement('div');
   timingsNode.classList.add('timings');
   timingsNode.innerHTML =`<h3 class="hours">Hours</h3>
   <p class="sunday day">Sunday: 8am - 8pm</p>
   <p class="monday day">Monday: 6am - 6pm</p>
   <p class="tuesday day">Tuesday: 6am - 6pm</p>
   <p class="wednesday day">Wednesday: 6am - 6pm</p>
   <p class="thursday day">Thursday: 6am - 10pm</p>
   <p class="friday day">Friday: 6am - 10pm</p>
   <p class="saturday day">Saturday: 8am - 10pm</p>
   `
   return timingsNode

}
function getLocationElement(){
    const locationNode = document.createElement('div');
    locationNode.classList.add('location');
    locationNode.innerHTML =`<h3 class="location-header">Location</h3>
    <p class="address"> 102, forest Villa , Hinjewadi</p>
    `
    return locationNode
}
export default homeComponent