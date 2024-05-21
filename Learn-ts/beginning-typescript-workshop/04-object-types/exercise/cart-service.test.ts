import test, { before, describe } from "node:test";
import assert from "assert/strict";

describe("Cart Service", () => {
  before(async () => {
    await import("./cart-service.js");
  });

  test("adding a cart", async (t) => {
    const response = await fetch("http://localhost:3000/cart/1", {
      method: "POST",
    });
    await response.json();

    assert.equal(response.status, 200);

    const cart = await fetch("http://localhost:3000/cart/1").then((res) =>
      res.json()
    );

    assert.deepEqual(cart, { id: "1", items: [] });
  });

  test("adding an item to a cart", async (t) => {
    const response = await fetch("http://localhost:3000/cart/1/add-item", {
      method: "POST",
      body: JSON.stringify({ productId: "1", quantity: 1 }),
      headers: { "Content-Type": "application/json" },
    });
    await response.json();

    assert.equal(response.status, 200);

    const cart = await fetch("http://localhost:3000/cart/1").then((res) =>
      res.json()
    );

    assert.deepEqual(cart, {
      id: "1",
      items: [{ productId: "1", quantity: 1 }],
    });
  });

  test("adding an existing item to a cart", async (t) => {
    const response = await fetch("http://localhost:3000/cart/1/add-item", {
      method: "POST",
      body: JSON.stringify({ productId: "1", quantity: 3 }),
      headers: { "Content-Type": "application/json" },
    });
    await response.json();

    assert.deepEqual(response.status, 200);

    const cart = await fetch("http://localhost:3000/cart/1").then((res) =>
      res.json()
    );

    assert.deepEqual(cart, {
      id: "1",
      items: [{ productId: "1", quantity: 4 }],
    });
  });
});
