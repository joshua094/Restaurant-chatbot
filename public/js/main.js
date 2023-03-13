const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");


//Message Submit

document.body.addEventListener("click", function (event) {
  let orderList = {
    11: "Slow cooker taco soup for 1000",
    12: "Slow-cooked beef casserole for 1500",
    13: "Lemon and herb roast chicken for 1200",
    14: "Green Pickled potato salad for 1500",
    15: "Roast Carrots with Populate Hummus and Green Tahini for 800",
    16: "Prawn Sliders with Sriracha Mayo for 1100",
    17: "Turmeric Chicken Noodle Soup for 1500"
  }

  let orderHistory = {};
  let currentOrder = "";
  if (event.target.id == "btnSubmit") {
    chatForm.addEventListener(
      "submit",
      (e) => {
        e.preventDefault();

        const msg = e.target.elements.msg.value;
        console.log(msg);


        const div = document.createElement("div");
          div.classList.add("message");
          div.innerHTML = `<p class="meta">Customer <span>Time</span></p>
            <p class="text">
                ${msg}
            </p>`;
          document.querySelector(".chat-messages").appendChild(div);


        if (msg == "0") {
            const div = document.createElement("div");
            div.classList.add("message");
            div.innerHTML = `<p class="meta">Order bot <span>Time</span></p>
              <p class="text">
                  Order cancelled successfully
              </p>`;
            document.querySelector(".chat-messages").appendChild(div);
          }
        else if (msg == "1") {
          const div = document.createElement("div");
          div.classList.add("message");
          div.innerHTML = `<p class="meta">Order bot <span>Time</span></p>
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
        }
        else if (msg == "97") {
          const div = document.createElement("div");
          div.classList.add("message");
          div.innerHTML = `<p class="meta">Order bot <span>Time</span></p>
            <p class="text">
                Current order
            </p>`;
          document.querySelector(".chat-messages").appendChild(div);
        }
        else if (msg == "98") {
          const div = document.createElement("div");
          div.classList.add("message");
          div.innerHTML = `<p class="meta">Order bot <span>Time</span></p>
            <p class="text">
                See order history
            </p>`;
          document.querySelector(".chat-messages").appendChild(div);
        }
        else if (msg == "99") {
          const div = document.createElement("div");
          div.classList.add("message");
          div.innerHTML = `<p class="meta">Order bot <span>Time</span></p>
            <p class="text">
                Checkout order
            </p>`;
          document.querySelector(".chat-messages").appendChild(div);
        }
        else {
          const div = document.createElement("div");
          div.classList.add("message");
          div.innerHTML = `<p class="meta">Order bot <span>Time</span></p>
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

//Output message to DOM
// function outputToDOM(message) {
//     const div = document.createElement('div')
//     div.classList.add('message')
//     div.innerHTML = `<p class="meta">Customer <span>${message.time}</span></p>
//     <p class="text">
//         ${message.text}
//     </p>`;
//     document.querySelector('.chat-messages').appendChild(div)
// }
