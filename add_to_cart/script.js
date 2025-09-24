    const products = [
        {
          id: 1,
          name: "Labubu",
          price: 250,
          ageGroup: "3-6 years",
          stock: 10,
          image: "./img/img_1.png",
          category: "Figurines",
          description: "A cute Labubu figure for kids to collect."
        },
        {
          id: 2,
          name: "Toy Car",
          price: 1350,
          ageGroup: "5-10 years",
          stock: 5,
          image: "./img/img_2.png",
          category: "Vehicles",
          description: "Remote controlled toy car with lights and sound."
        },
        {
          id: 3,
          name: "Building Blocks",
          price: 600,
          ageGroup: "4-8 years",
          stock: 8,
          image: "https://cdn-icons-png.flaticon.com/512/2977/2977785.png",
          category: "Educational",
          description: "Colorful blocks that help improve creativity."
        },
        {
          id: 4,
          name: "Teddy Bear",
          price: 350,
          ageGroup: "2-6 years",
          stock: 15,
          image: "./img/img_3.png",
          category: "Soft Toys",
          description: "Soft and fluffy teddy bear for kids to cuddle."
        }
      ];
  
      let cart = [];
      let total = 0;
  
      function renderProducts() {
        const productContainer = document.getElementById("products");
        productContainer.innerHTML = "";
  
        products.forEach(prod => {
          const div = document.createElement("div");
          div.classList.add("product");
          div.innerHTML = `
            <img src="${prod.image}" alt="${prod.name}">
            <h3>${prod.name}</h3>
            <p><b>Price:</b> ₹${prod.price}</p>
            <p><b>Age Group:</b> ${prod.ageGroup}</p>
            <p><b>Category:</b> ${prod.category}</p>
            <p><b>Stock:</b> ${prod.stock}</p>
            <p>${prod.description}</p>
            <button onclick="addToCart(${prod.id})" ${prod.stock === 0 ? "disabled" : ""}>Add to Cart</button>
          `;
          productContainer.appendChild(div);
        });
      }
  
      function addToCart(id) {
        const product = products.find(p => p.id === id);
        if (!product || product.stock <= 0) return;
  
        let item = cart.find(i => i.id === id);
        if (item) {
          item.quantity++;
        } else {
          cart.push({ ...product, quantity: 1 });
        }
  
        product.stock--;
        total += product.price;
        updateCart();
        renderProducts();
      }
  
      function updateCart() {
        const cartItems = document.getElementById("cart-items");
        cartItems.innerHTML = "";
  
        cart.forEach(item => {
          const li = document.createElement("li");
          li.textContent = `${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`;
          cartItems.appendChild(li);
        });
  
        document.getElementById("total").textContent = total;
        document.getElementById("message").textContent = "";
      }
  
      function clearCart() {

        cart.forEach(item => {
          let prod = products.find(p => p.id === item.id);
          if (prod) prod.stock += item.quantity;
        });
  
        cart = [];
        total = 0;
        updateCart();
        renderProducts();
      }
  
      function placeOrder() {
        if (cart.length === 0) {
          document.getElementById("message").textContent = "⚠️ Your cart is empty!";
          document.getElementById("message").style.color = "red";
          return;
        }
        document.getElementById("message").textContent = "✅ Order placed successfully!";
        document.getElementById("message").style.color = "green";
  
        cart = [];
        total = 0;
        updateCart();
      }
  
      renderProducts();