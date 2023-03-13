const listClass = document.querySelectorAll(".item");
console.log(`Number of categories: ${listClass.length}`);

listClass.forEach(listEl => {
    console.log('');
console.log(`Category: ${listEl.firstElementChild.textContent}`);
console.log(`Elements: ${listEl.lastElementChild.querySelectorAll('li').length}`);

 }
  );

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5







