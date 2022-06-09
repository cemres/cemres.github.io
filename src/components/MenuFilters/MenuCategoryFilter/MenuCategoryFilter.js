import "./MenuCategoryFilter.css";

import { categories } from "../../../data/menuCategories";
import { useState } from "react";

function MenuCategoryFilter(props) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoryClickHandler = (categoryName) => {
    setSelectedCategory(categoryName);
    props.onFilterApplied(categoryName);
  };

  return (
    <div className="surface-0 text-center mt-4">
      <div className="mb-4 font-bold text-2xl">
        <span className="text-blue-600">Categories</span>
        <hr />
      </div>

      <div className="grid">
        {categories.map((category, i) => (
          <div
            className="col category"
            key={i}
            onClick={() => categoryClickHandler(category.name)}
          >
            <span
              className={
                "p-3 shadow-2 mb-3 inline-block " +
                (selectedCategory === category.name ? "bg-primary" : "")
              }
              style={{ borderRadius: "10px" }}
            >
              {category.icon}
            </span>
            <div className="text-900 mb-3 font-medium">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuCategoryFilter;
