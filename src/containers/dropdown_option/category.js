import React from "react";

const category = [
  { name: "Please Choose Category...", value: "" },
  { name: "Entertainment", value: "Entertainment" },
  { name: "Grocery", value: "Grocery" },
  { name: "Fees", value: "Fees" },
  { name: "Rent", value: "Rent" },
  { name: "Taxes", value: "Taxes" },
  // { name: "Utilities", value: "Utilities" },
  // { name: "Insurance", value: "Insurance" }
];

const mappedCategory = category.map((item, index) => {
  return (
    <option
      key={index}
      value={item.value}>
      {item.name}
    </option>
  );
});

export default mappedCategory;
