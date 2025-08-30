let cartItems = [];
let total = 0;

function addToCart(name, price) { 
    cartItems.push({ name: name, price: price });
    total += price;
    alert(name + " added to cart. Total:" + total);
}

function viewCart() {
    let cartHTML = "<h1>Your Cart:</h1><ul>";

    for (let i = 0; i < cartItems.length; i++) {
        cartHTML += "<li>" + cartItems[i].name +"-"+ cartItems[i].price +"</li>";
    }

    cartHTML += "</ul><h2><b>Total:</b> " + total + "</h2>";

    let middleFrame = parent.frames["contentFrame"];
    middleFrame.document.open();
    middleFrame.document.write(`
        <html>
        <body style="background-color:#8F7E4F;">
            ${cartHTML}
        </body>
        </html>
    `);
    middleFrame.document.close();
}