import React from "react";

function PriceFilter({ onFilter, onReset }) {
  const priceRanges = [
    "All",
    "Below Ksh 1,500,000",
    "Ksh 1,500,000 - Ksh 3,500,000",
    "Ksh 3,500,000 - Ksh 6,000,000",
    "Above Ksh 6,000,000",
  ];

  return (
    <div className="price-filter-containerJk">
    <select className="price-filter-selectJk" onChange={(e) => onFilter(e.target.value)}>
      {priceRanges.map((range) => (
        <option key={range} value={range}>
          {range}
        </option>
      ))}
    </select>
    <button className="price-filter-buttonJk" onClick={onReset}>
      <i className="fa-solid fa-broom"></i>
    </button>
  </div>
  );
}

export default PriceFilter;
