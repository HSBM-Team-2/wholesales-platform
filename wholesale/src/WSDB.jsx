import React, { useState } from "react"
// import "./HSDB.css"
import Header from "./Header"
import ProductForm from "./ProductForm"
import PromotionForm from "./DiscountForm"
import ProductList from "./ProductList"

const WholesalerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setEditProductId(null);
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };
  const editProduct = (id) => {
    setEditProductId(id);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
      <div className="dashboard min-h-screen bg-gray-100 p-6">
        <Header />
  
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">
            Wholesaler Dashboard
          </h1>
          <p className="text-lg text-gray-600 mb-6 text-center">
            Manage your products, orders, and promotions effectively.
          </p>
  
          <div className="mb-6 flex  justify-center">

            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out shadow-sm"
            />
          </div>
  
          {/* Product Form for Adding */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <ProductForm onSubmit={addProduct} />
          </div>
  
          {/* Edit Product Form if needed */}
          {editProductId && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <ProductForm
                product={products.find((product) => product.id === editProductId)}
                onSubmit={updateProduct}
              />
            </div>
          )}
  
          {/* Promotion Form */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <PromotionForm />
          </div>
  
          {/* Product List */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ProductList
              products={filteredProducts}
              onEdit={editProduct}
              onDelete={deleteProduct}
            />
          </div>
        </div>
      </div>
    );
  };
  

export default WholesalerDashboard;
