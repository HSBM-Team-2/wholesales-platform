import React, { useState, useEffect } from "react";

const ProductForm = ({ product, onSubmit }) => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState(null); // Add image state

  // Update form fields if editing
  useEffect(() => {
    if (product) {
      setProductName(product.name);
      setProductDescription(product.description);
      setProductPrice(product.price);
      setProductQuantity(product.quantity);
      setProductCategory(product.category);
      setProductImage(product.image || null);
    }
  }, [product]);

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: product?.id || null,
      name: productName,
      description: productDescription,
      price: productPrice,
      quantity: productQuantity,
      category: productCategory,
      image: productImage
    };

    onSubmit(newProduct);

    setProductName("");
    setProductDescription("");
    setProductPrice("");
    setProductQuantity("");
    setProductCategory("");
    setProductImage(null); // Clear image
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
  <h2 className="text-2xl font-semibold mb-6">
    {product ? 'Edit Product' : 'Add Product'}
  </h2>

  <div className="grid grid-cols-1 gap-6 mb-6">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2" aria-label="Product Name">Product Name:</label>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2" aria-label="Description">Description:</label>
      <textarea
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      ></textarea>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2" aria-label="Price">Price:</label>
      <input
        type="number"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2" aria-label="Quantity">Quantity:</label>
      <input
        type="number"
        value={productQuantity}
        onChange={(e) => setProductQuantity(e.target.value)}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2" aria-label="Category">Category:</label>
      <select
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">Select a category</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="food">Food</option>
        <option value="furniture">Furniture</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2" aria-label="Product Image">Product Image:</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        required={!product}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  </div>

  <button
    type="submit"
    className="w-full px-3 py-2 bg-blue-500 text-lg text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
  >
    {product ? 'Update Product' : 'Add Product'}
  </button>
</form>
  );
};

export default ProductForm;
