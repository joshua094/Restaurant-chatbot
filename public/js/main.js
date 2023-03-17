const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");

let orderHistory = [];
let price = 0;
let currentOrder = "";

let date = new Date();
let currentTime =
  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

//Message Submit

document.body.addEventListener("click", function (event) {
  if (event.target.id == "btnSubmit") {
    chatForm.addEventListener(
      "submit",
      (e) => {
        e.preventDefault();

        const msg = e.target.elements.msg.value;
        console.log(msg);

        const div = document.createElement("div");
        div.classList.add("message");
        div.innerHTML = `<p class="meta">Customer <span>${currentTime}</span></p>
            <p class="text">
                ${msg}
            </p>`;
        document.querySelector(".chat-messages").appendChild(div);

        if (msg == "0") {
          if (orderHistory.length === 0) {
            noOrder();
          } else {
            if (currentOrder === "Slow cooker taco soup at ₦1000") {
              price = price - 1000;
              removeOrder();
            } else if (
              currentOrder === "Slow-cooked beef casserole taco soup at ₦1500"
            ) {
              price = price - 1500;
              removeOrder();
            } else if (
              currentOrder === "Lemon and herb roast chicken at ₦1200"
            ) {
              price = price - 1200;
              removeOrder();
            } else if (currentOrder === "Green Pickled potato salad at ₦1500") {
              price = price - 1500;
              removeOrder();
            } else if (
              currentOrder ===
              "Roast Carrots with Populate Hummus and Green Tahini at ₦800"
            ) {
              price = price - 800;
              removeOrder();
            } else if (
              currentOrder ===
              "Prawn Sliders with Sriracha Mayo taco soup at ₦1100"
            ) {
              price = price - 1100;
              removeOrder();
            } else if (
              currentOrder === "Turmeric Chicken Noodle Soup taco soup at ₦1500"
            ) {
              price = price - 1500;
              removeOrder();
            } else {
              noOrder();
            }
          }
        } else if (msg == "1") {
          const div = document.createElement("div");
          div.classList.add("message");
          div.innerHTML = `<p class="meta">Order bot  <span>${currentTime}</span></p>
            <p class="text">
            <p>Select 11 to order "Slow cooker taco soup for ₦1000"</p>
            <p>Select 12 to order "Slow-cooked beef casserole for ₦1500"</p>
            <p>Select 13 to order "Lemon and herb roast chicken for ₦1200"</p>
            <p>Select 14 to order "Green Pickled potato salad for ₦1500"</p>
            <p>Select 15 to order "Roast Carrots with Populate Hummus and Green Tahini for ₦800"</p>
            <p>Select 16 to order "Prawn Sliders with Sriracha Mayo for ₦1100"</p>
            <p>Select 17 to order "Turmeric Chicken Noodle Soup for ₦1500"</p>
            </p>`;
          document.querySelector(".chat-messages").appendChild(div);
        } else if (msg === "11") {
          const div = document.createElement("div");
          div.classList.add("message");
          div.innerHTML = `<p class="meta">Order bot  <span>${currentTime}</span></p>
            <p class="text">
                Slow cooker taco soup sucessfully added to orders
            </p>`;
          document.querySelector(".chat-messages").appendChild(div);
          let order = "Slow cooker taco soup at ₦1000";
          orderHistory.push(order);
          currentOrder = order;
          price = price + 1000;
        } else if (msg == "12") {
          const div = document.createElement("div");
          div.classList.add("message");
          div.innerHTML = `<p class="meta">Order bot  <span>${currentTime}</span></p>
            <p class="text">
            Slow-cooked beef casserole sucessfully added to orders
            </p>`;
          document.querySelector(".chat-messages").appendChild(div);
          let order = "Slow-cooked beef casserole taco soup at ₦1500";
          orderHistory.push(order);
          currentOrder = order;
          price = price + 1500;
        } else if (msg == "13") {
          const div = document.createElement("div");
          div.classList.add("message");
          div.innerHTML = `<p class="meta">Order bot  <span>${currentTime}</span></p>
            <p class="text">
            Lemon and herb roast chicken sucessfully added to orders
            </p>`;
          document.querySelector(".chat-messages").appendChild(div);
          let order = "Lemon and herb roast chicken at ₦1200";
          orderHistory.push(order);
          currentOrder = order;
          price = price + 1200;
        } else if (msg == "14") {
          const div = document.createElement("div");
          div.classList.add("message");
          div.innerHTML = `<p class="meta">Order bot  <span>${currentTime}</span></p>
            <p class="text">
            Green Pickled potato salad sucessfully added to orders
            </p>`;
          document.querySelector(".chat-messages").appendChild(div);
          let order = "Green Pickled potato salad at ₦1500";
          orderHistory.push(order);
          currentOrder = order;
          price = price + 1500;
        } else if (msg == "15") {
          const div = document.createElement("div");
          div.classList.add("message");
          div.innerHTML = `<p class="meta">Order bot  <span>${currentTime}</span></p>
            <p class="text">
            Roast Carrots with Populate Hummus and Green Tahini sucessfully added to orders
            </p>`;
          document.querySelector(".chat-messages").appendChild(div);
          let order =
            "Roast Carrots with Populate Hummus and Green Tahini at ₦800";
          orderHistory.push(order);
          currentOrder = order;
          price = price + 800;
        } else if (msg == "16") {
          const div = document.createElement("div");
          div.classList.add("message");
          div.innerHTML = `<p class="meta">Order bot  <span>${currentTime}</span></p>
            <p class="text">
            Prawn Sliders with Sriracha Mayo sucessfully added to orders
            </p>`;
          document.querySelector(".chat-messages").appendChild(div);
          let order = "Prawn Sliders with Sriracha Mayo taco soup at ₦1100";
          orderHistory.push(order);
          currentOrder = order;
          price = price + 1100;
        } else if (msg == "17") {
          const div = document.createElement("div");
          div.classList.add("message");
          div.innerHTML = `<p class="meta">Order bot  <span>${currentTime}</span></p>
            <p class="text">
            Turmeric Chicken Noodle Soup sucessfully added to orders
            </p>`;
          document.querySelector(".chat-messages").appendChild(div);
          let order = "Turmeric Chicken Noodle Soup taco soup at ₦1500";
          orderHistory.push(order);
          currentOrder = order;
          price = price + 1500;
        } else if (msg == "97") {
          if (orderHistory.length === 0) {
            noOrder();
          }
          else {
          const div = document.createElement("div");
          div.classList.add("message");
          div.innerHTML = `<p class="meta">Order bot  <span>${currentTime}</span></p>
            <p class="text">
                ${currentOrder}
            </p>`;
          document.querySelector(".chat-messages").appendChild(div);}
        } else if (msg == "98") {
          if (orderHistory.length == 0) {
            noOrder();
          }
          else {
          const div = document.createElement("div");
          div.classList.add("message");
          div.innerHTML = `<p class="meta">Order bot  <span>${currentTime}</span></p>
            <p class="text">
               <p>${orderHistory.toString()}</p>
               <p>Total Price: ₦${price}</p>
            </p>`;
          document.querySelector(".chat-messages").appendChild(div);}
        } else if (msg == "99") {
          if (orderHistory.length === 0) {
            noOrder();
          }
          else {
          const div = document.createElement("div");
          div.classList.add("message");
          div.innerHTML = `<p class="meta">Order bot  <span>${currentTime}</span></p>
            <p class="text">
            <p>${orderHistory.toString()}</p>
            <p>Total Price: ₦${price}</p>
            <p>Order has been placed successfully and will be delivered soon.</p>
            </p>`;
          document.querySelector(".chat-messages").appendChild(div);
          orderHistory = [];
          price = 0;
          currentOrder = "";}
        } else {
          const div = document.createElement("div");
          div.classList.add("message");
          div.innerHTML = `<p class="meta">Order bot  <span>${currentTime}</span></p>
            <p class="text">
                <p>Wrong input!</p>
                <p>Select 1 to Place an order, Select 99 to
                checkout order, Select 98 to see order history, Select 97 to see
                current order, Select 0 to cancel order</p>
            </p>`;
          document.querySelector(".chat-messages").appendChild(div);
        }

        chatMessages.scrollTop = chatMessages.scrollHeight;

        e.target.elements.msg.value = "";
        e.target.elements.msg.focus();
      },
      { once: true }
    );
  }
});

function removeOrder() {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `<p class="meta">Order bot  <span>${currentTime}</span></p>
              <p class="text">
                  ${currentOrder} has been successfully removed
              </p>`;
  document.querySelector(".chat-messages").appendChild(div);
  orderHistory.pop();
  currentOrder = orderHistory[orderHistory.length - 1];
}

function noOrder() {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `<p class="meta">Order bot  <span>${currentTime}</span></p>
              <p class="text">
                  <p>No order to yet</p>
                  <p>Order first</p>
                  <p>Select 11 to order "Slow cooker taco soup for ₦1000"</p>
            <p>Select 12 to order "Slow-cooked beef casserole for ₦1500"</p>
            <p>Select 13 to order "Lemon and herb roast chicken for ₦1200"</p>
            <p>Select 14 to order "Green Pickled potato salad for ₦1500"</p>
            <p>Select 15 to order "Roast Carrots with Populate Hummus and Green Tahini for ₦800"</p>
            <p>Select 16 to order "Prawn Sliders with Sriracha Mayo for ₦1100"</p>
            <p>Select 17 to order "Turmeric Chicken Noodle Soup for ₦1500"</p>
              </p>`;
  document.querySelector(".chat-messages").appendChild(div);
}
