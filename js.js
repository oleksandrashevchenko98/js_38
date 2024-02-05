let Kitchen = { category: 'kitchen' };
let Devices = { category: 'devices' };
let Cosmetics = { category: 'cosmetics' };

function createProductObjects(products, categoryObject) {
    return products.map(product => Object.assign(Object.create(categoryObject), product));
}

function renderProducts(products) {
    return products.map(product => `
    <div class="includes ${product.type}">
        <img src="images/${product.category}/${product.type}.svg" alt="${product.type}">
        <p>Name: <span class="bold">${product.type}</span></p>
        <p>Price: $ <span class="bold">${Array.isArray(product.price) ? product.price.join('-') : product.price}</span></p>
    </div>`
    ).join('');
}

const kitchenProducts = [
    { type: 'grater', price: 10 },
    { type: 'pastry-bag', price: 25 },
    { type: 'scale', price: 5 },
    { type: 'whisk', price: 15 }
];

const devicesProducts = [
    { type: 'desktop', price: [100, 1000] },
    { type: 'laptop', price: [50, 1500] },
    { type: 'smartphone', price: [80, 2000] },
    { type: 'tablet', price: [20, 1300] }
];

const cosmeticsProducts = [
    { type: 'blush', price: 100 },
    { type: 'eyeshadow', price: 50 },
    { type: 'lipstick', price: 80 },
    { type: 'nail-polish', price: 200 },
    { type: 'perfume', price: 300 }
];

const kitchen = createProductObjects(kitchenProducts, Kitchen);
const devices = createProductObjects(devicesProducts, Devices);
const cosmetics = createProductObjects(cosmeticsProducts, Cosmetics);

document.write(`
  <div class="wrapper">
    <h2>Category: ${Kitchen.category}</h2>
    <div class="category kitchen">
      ${renderProducts(kitchen)}
    </div>

    <h2>Category: ${Devices.category}</h2>
    <div class="category devices">
      ${renderProducts(devices)}
    </div>

    <h2>Category: ${Cosmetics.category}</h2>
    <div class="category cosmetics">
      ${renderProducts(cosmetics)}
    </div>
  </div>
`);