import React, { useState } from 'react';
import { supabase } from './supabaseClient';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [wholesalerId, setWholesalerId] = useState('');
  const [description, setDescription] = useState('');
  const [pricePerUnit, setPricePerUnit] = useState('');
  const [bulkPrice, setBulkPrice] = useState('');
  const [minimumOrderQuantity, setMinimumOrderQuantity] = useState('');
  const [stock, setStock] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { data, error } = await supabase
        .from('wholesaleproducts')
        .insert([
          {
            wholesaler_id: wholesalerId,
            name,
            description,
            price_per_unit: parseFloat(pricePerUnit),
            bulk_price: parseFloat(bulkPrice),
            minimum_order_quantity: parseInt(minimumOrderQuantity),
            stock: parseInt(stock),
            image_url: imageUrl,
          },
        ]);

      if (error) {
        throw error;
      }

      setSuccess('Product added successfully!');
      // Clear the form fields
      setName('');
      setWholesalerId('');
      setDescription('');
      setPricePerUnit('');
      setBulkPrice('');
      setMinimumOrderQuantity('');
      setStock('');
      setImageUrl('');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Product</h2>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <div>
        <label>
          Wholesaler ID:
          <input
            type="text"
            value={wholesalerId}
            onChange={(e) => setWholesalerId(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Price per Unit:
          <input
            type="number"
            value={pricePerUnit}
            onChange={(e) => setPricePerUnit(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Bulk Price:
          <input
            type="number"
            value={bulkPrice}
            onChange={(e) => setBulkPrice(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Minimum Order Quantity:
          <input
            type="number"
            value={minimumOrderQuantity}
            onChange={(e) => setMinimumOrderQuantity(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Stock:
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Image URL:
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add Product'}
      </button>
    </form>
  );
};

export default ProductForm;
