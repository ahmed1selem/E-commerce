let search=document.querySelector(".search-box")

document.querySelector("#search-icon").onclick=()=>{
    search.classList.toggle("active");
    menu.classList.remove("active");

}

let menu=document.querySelector(".navbar")

document.querySelector("#menu-icon").onclick=()=>{
    menu.classList.toggle("active");
    search.classList.remove("active");

}

window.onscroll=()=>{
    menu.classList.remove("active");
    search.classList.remove("active");
}
let header=document.querySelector("header")

window.addEventListener("scroll",()=>{
    header.classList.toggle('shadow',window.scrollY>0)
})



const products = [
    { name: "Dodge Charger", image: "images/cars/joey-banks-YApiWyp0lqo-unsplash.jpg" },
    { name: "Aston Martin", image: "images/cars/aston-martin-1879492_1280.jpg" },
    { name: "Audi", image: "images/cars/car5.jpg" },
    { name: "Audi white", image: "images/cars/pexels-mike-bird-1335077.jpg" },
    { name: "dodge charger white", image: "images/cars/luca-david-HjXbVnnITvE-unsplash.jpg" },
    { name: "audi black", image: "images/cars/car3.jpg" },

    // You can add more products here
  ];
  const searchInput = document.getElementById('search-input');
  const carsContainer = document.querySelector('.cars-container');
  
  searchInput.addEventListener('keyup', function() {
    const searchTerm = this.value.toLowerCase(); // Get the search term in lowercase
  
    // Filter products based on search term
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
  
    // Clear existing content
    carsContainer.innerHTML = ''; // Remove previous results
  
    // Display filtered products
    if (filteredProducts.length > 0) {
      filteredProducts.forEach(product => {
        const box = document.createElement('div');
        box.classList.add('box');
        box.innerHTML = `
          <img src="${product.image}" alt="">
          <h2>${product.name}</h2>
        `;
        carsContainer.appendChild(box);
      });
    } else {
      // Display message if no products found
      const message = document.createElement('p');
      message.textContent = 'No products found.';
      carsContainer.appendChild(message);
    }
  });
    