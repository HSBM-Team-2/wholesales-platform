import React, { useState } from "react";

const PromotionForm = () => {
  const [promotionProductId, setPromotionProductId] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handlePromotionSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Applying ${discountAmount} discount to product ID ${promotionProductId} from ${startDate} to ${endDate}`
    );
    setPromotionProductId("");
    setDiscountAmount("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <form onSubmit={handlePromotionSubmit}>
      <h2>Promotions and Discounts</h2>
      <div>
        <label>Product ID:</label>
        <input
          type="text"
          value={promotionProductId}
          onChange={(e) => setPromotionProductId(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Discount Amount/Percentage:</label>
        <input
          type="text"
          value={discountAmount}
          onChange={(e) => setDiscountAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Apply Promotion</button>
    </form>
  );
};

export default PromotionForm;
