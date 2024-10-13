import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

const PromotionsDisplayPage = () => {
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const { data, error } = await supabase
          .from("promotions")
          .select("id, product_id, discount_amount, start_date, end_date, created_at, updated_at");
        if (error) {
          console.error("Error fetching promotions:", error);
          setError(error);
        } else {
          setPromotions(data);
        }
      } catch (err) {
        console.error("Error fetching promotions:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPromotions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching promotions: {error.message}</div>;
  }

  return (
    <div>
      <h2>Promotions</h2>
      <ul>
        {promotions.map((promotion) => (
          <li key={promotion.id}>
            <p>Product ID: {promotion.product_id}</p>
            <p>Discount Amount: ${promotion.discount_amount}</p>
            <p>Start Date: {new Date(promotion.start_date).toLocaleString()}</p>
            <p>End Date: {new Date(promotion.end_date).toLocaleString()}</p>
            <p>Created At: {new Date(promotion.created_at).toLocaleString()}</p>
            <p>Updated At: {new Date(promotion.updated_at).toLocaleString()}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromotionsDisplayPage;