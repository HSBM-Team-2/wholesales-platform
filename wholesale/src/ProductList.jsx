import React from "react";

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} (Quantity: {product.quantity}, Category: {product.category}){" "}
            <button onClick={() => onEdit(product.id)}>Edit</button>
            <button onClick={() => onDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
