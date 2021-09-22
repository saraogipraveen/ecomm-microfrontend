import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

export { mount };

// Context/Situation #1
// we are running this file in isolation
// we are using our local index.html file
// which DEFINETELY has an element of id dev-products
// We want to immediately render our app into that element
if (process.env.NODE_ENV == "development") {
  const el = document.querySelector("#dev-products");

  // assuming our container doesnt have an element with id dev-products
  if (el) {
    // we are running probably in isolation
    mount(el);
  }
}

// Context/Situation #2
// we are running this file in dev or prod through the container app
// NO guarantee that an element with id dev-products exist
// WE do not want to immediately render our app
