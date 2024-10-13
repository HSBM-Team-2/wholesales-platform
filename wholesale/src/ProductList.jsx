import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
const WholesaleProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('wholesaleproducts')
          .select('*');

        if (error) {
          throw error;
        }

        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Wholesale Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price per unit: ${product.price_per_unit}</p>
            <p>Bulk price: ${product.bulk_price}</p>
            <p>Minimum order quantity: {product.minimum_order_quantity}</p>
            <p>Stock: {product.stock}</p>
            {product.image_url && <img src={product.image_url} alt={product.name} />}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WholesaleProducts;
