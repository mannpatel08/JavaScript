let cart = [];
let total = 0;

function addToCart(product, price) {
  let item = cart.find(i => i.product === product);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ product, price, quantity: 1 });
  }

  total += price;
  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.product} (x${item.quantity}) - ₹${item.price * item.quantity}`;
    cartItems.appendChild(li);
  });

  document.getElementById("total").textContent = total;
  document.getElementById("message").textContent = "";
}

function clearCart() {
  cart = [];
  total = 0;
  updateCart();
}

function placeOrder() {
  if (cart.length === 0) {
    document.getElementById("message").textContent = "⚠️ Your cart is empty!";
    document.getElementById("message").style.color = "red";
    return;
  }
  document.getElementById("message").textContent = "✅ Order placed successfully! Thank you for shopping.";
  document.getElementById("message").style.color = "green";
  clearCart();
}