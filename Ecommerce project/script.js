let cart = [];
let total = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  total += price;

  // Update cart UI
  document.getElementById("cart-count").innerText = cart.length;
  document.getElementById("cart-total").innerText = total;

  let cartItems = document.getElementById("cart-items");
  let li = document.createElement("li");
  li.textContent = `${productName} - $${price}`;
  cartItems.appendChild(li);
}


