import faker from "faker";
const mount = (el) => {
  const carttext = `<div>You have ${faker.random.alphaNumeric()} items in your cart</div>`;
  el.innerHTML = carttext;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");
  if (el) {
    mount(el);
  }
}

export { mount };
