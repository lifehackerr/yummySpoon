export function filterData(searchText,restaurants){
    const data = restaurants.filter((restaurant)=> restaurant.name.toLowerCase().includes(searchText.toLowerCase()));
    return data;
}
