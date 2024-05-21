import express from "express";

const app = express();

app.use(express.json());

interface Cart {
  id: string;
  items: CartItem[];
}

interface CartItem {
  productId: string;
  quantity: number;
}

const carts:  Cart [] = [];

app.get("/cart/:cart", (req, res) => {
  const cartId = req.params.cart;

  const cart = carts.find((cart) => cart.id === cartId);

  if (cart) {
    res.send(cart);
  } else {
    res.status(404).send({ message: "Cart not found" });
  }
});

app.post("/cart/:cart", async (req, res) => {
  if (carts.find((cart) => cart.id === req.params.cart)) {
    res.status(400).send({ message: "Cart already exists" });
    return;
  }

  carts.push({
    id: req.params.cart,
    items: []
  });

  res.send({});
});

app.post("/cart/:cart/add-item", async (req, res) => {
  const cartId = req.params.cart;
  const cartItem: CartItem = req.body;

  const cart = carts.find((cart) => cart.id === cartId);

  if (cart === undefined) {
    return res.status(404).send({ message: "Cart not found" });
  }

  const existingCartItem = cart?.items.find(
    (item) => item.productId === cartItem.productId
  );

  if (existingCartItem) {
    existingCartItem.quantity += cartItem.quantity;
  } else {
    cart?.items.push(cartItem);
  }
  res.send({});
});

app.listen({ port: 3000 });
