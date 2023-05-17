function homeComponent(){
  const homeCompNode = document.createElement('div');
  homeCompNode.textContent= "home"
//   const restaurantName = getRestaurantNameElement();

//   homeCompNode.append(restaurantName);
  return homeCompNode
}

function getRestaurantNameElement(){
   const restaurantName = document.querySelector('div');
   restaurantName.classList.add('restaurant-name');
   restaurantName.textContent = "Beary's Breakfast Bar";
   return restaurantName
}
function getSummaryElement(){

}
function getTimingsElement(){

}
function getLocationElement(){

}
export default homeComponent