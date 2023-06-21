const categoriesList = document.querySelectorAll('#categories .item');

console.log("Number of categories:", categoriesList.length);

categoriesList.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const numberOfCategory = category.querySelectorAll('li').length;

    console.log("\nCategory:", categoryTitle);
    console.log("Elements:", numberOfCategory);    
});