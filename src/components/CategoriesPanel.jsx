import React, { useState, useEffect } from "react";

const CategoriesPanel = () => {
  const [categories, setCategories] = useState([]);

  async function getData() {
    try {
      const res = await fetch("http://localhost:3000/api/categories");
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
      const result = await res.json();
      setCategories(result);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ul className="cursor-pointer ">
      {categories.map((item) => (
        <li key={item.CategoryID} className="pb-1 hover:underline">
          {item.CategoryName}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesPanel;
