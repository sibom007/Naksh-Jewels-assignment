import { products as catalog } from "../data/products.js";

export const validateCart = (req, res, next) => {
  const { products, totalPrice, ...others } = req.body;

  //  Reject unexpected root-level fields
  if (Object.keys(others).length > 0) {
    return res.status(400).json({
      message: "Only products and totalPrice are allowed",
      unexpected: Object.keys(others),
    });
  }

  //  products must be a non-empty array
  if (!Array.isArray(products) || products.length === 0) {
    return res.status(400).json({
      message: "products must be a non-empty array",
    });
  }

  let calculatedTotal = 0;

  //  Validate each product
  for (let i = 0; i < products.length; i++) {
    const { productId, quantity, price, ...extra } = products[i];

    //  Extra fields inside product
    if (Object.keys(extra).length > 0) {
      return res.status(400).json({
        message: `Unexpected fields in products[${i}]`,
        unexpected: Object.keys(extra),
      });
    }

    // productId
    if (!productId || typeof productId !== "string") {
      return res.status(400).json({
        message: `products[${i}].productId must be a string`,
      });
    }

    // quantity
    if (!Number.isInteger(quantity) || quantity < 1) {
      return res.status(400).json({
        message: `products[${i}].quantity must be a positive integer`,
      });
    }

    // price
    if (typeof price !== "number" || price <= 0) {
      return res.status(400).json({
        message: `products[${i}].price must be a positive number`,
      });
    }

    // check product exists
    const productExists = catalog.find((p) => p.id === productId);
    if (!productExists) {
      return res.status(404).json({
        message: `Product with id '${productId}' not found`,
      });
    }

    // calculate total (backend truth)
    calculatedTotal += price * quantity;
  }

  //  validate totalPrice
  if (typeof totalPrice !== "number" || totalPrice <= 0) {
    return res.status(400).json({
      message: "totalPrice must be a positive number",
    });
  }

  //  mismatch protection
  if (calculatedTotal !== totalPrice) {
    return res.status(400).json({
      message: "totalPrice mismatch",
      expected: calculatedTotal,
      received: totalPrice,
    });
  }

  //  attach calculated total for controller use
  req.calculatedTotal = calculatedTotal;

  next();
};
